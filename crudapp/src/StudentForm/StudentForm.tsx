import React, { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { PrimaryButton } from '@fluentui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import *as yup from "yup";
import Dynamic from '../sharedcomponents/Dynamic';
import { useState } from 'react';
import { STUDENT_DETAILS } from './Details';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useParams } from "react-router-dom"
import './form.scss'
import { Link } from 'react-router-dom'

const StudentForm = () => {
    interface IStudentData {
        name?: string;
        RollNumber?: number;
        English?: string;
        Telugu?: string;
        Hindi?: string;
        Science?: string;
        Social?: string;
        Activites?: string;
        TotalMarks?: string;
    }
    const StudentSchema: yup.SchemaOf<IStudentData> = yup.object().shape({
        name: yup.string(),
        RollNumber: yup.number(),
        English: yup.string().max(3),
        Telugu: yup.string().max(3),
        Hindi: yup.string().max(3),
        Science: yup.string().max(3),
        Social: yup.string().max(3),
        Activites: yup.string(),
        TotalMarks: yup.string().max(4),
    });
    const StudentFormMethods = useForm<any>({
        defaultValues: {},
        mode: "all",
        resolver: async (data, context, options) => {
            return yupResolver(StudentSchema)(data, context, options);
        },
    });
    const [submitData, setSubmitData] = useState();
    //  const id =useParams();
    const navigation = useNavigate();

    const StudentFormSubmit: SubmitHandler<any> = async (
        data: any,
    ) => {
        setSubmitData(data);
        if (id.id) {
            editForm(data);

        } else {
            createForm(data);
        }
        StudentFormMethods.reset({});
        navigation('/View')
        console.log(data);

    };
    const getProps = (item: any) => {
        item.control = StudentFormMethods.control;
        item.setValue = StudentFormMethods.setValue;
        item.register = StudentFormMethods.register;
        return item;
    };
    const id = useParams();

    const [data, setData] = useState<any>();

    const getStudentdata = async () => {
        try {
            const result = await axios.get(` http://localhost:5000/data/${id.id}`);
            setData(result.data);

        }
        catch (error) {
            console.log(error)
        }
    }
    const editForm = async (updateData: any) => {
        try {
            const result = await axios.put(` http://localhost:5000/data/${id.id}`, updateData);
            setData(result.data);
        }
        catch (error) {
            console.log(error)
        }
    }
    const createForm = async (updateData: any) => {
        const generateNumber: any = Math.random();
        const newData = { ...updateData, 'id': generateNumber }
        try {
            const result = await axios.post(` http://localhost:5000/data`, newData);
            setData(result.data);
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getStudentdata();
    }, [id]);
    useEffect(() => {
        data &&
            Object.entries(data).forEach(([key, value]: any) => {
                StudentFormMethods.setValue(key, value, { shouldValidate: true });

            })
    }, [data])
    console.log(StudentFormMethods.watch(), StudentFormMethods.formState.errors)
    return (
        <>
            <div className='zelar'>
                <h1>
                    <img src="https://zelarsoft.com/wp-content/uploads/2021/10/logo.png" alt="icon" />

                </h1>
            </div>
            <div className='main'>
                <div className='main__head'>

                    <h1>create profile</h1>

                </div><hr></hr>
                <div >
                    <FormProvider {...StudentFormMethods}>

                        <form className='main__inform' onSubmit={StudentFormMethods.handleSubmit(StudentFormSubmit)}>
                            <div className='main__container'>
                                {STUDENT_DETAILS?.map((rows: any) => {
                                    return (
                                        < div className={`rowTwo ${rows.className}`}>
                                            {rows.controls?.map((item: any) => {
                                                const updatedItem = getProps(item);
                                                return Dynamic(item.type, updatedItem);
                                            })}
                                        </div>
                                    )
                                })}

                            </div>

                            <div><hr></hr>
                                <PrimaryButton type='submit' className='submit'
                                    onClick={StudentFormMethods.handleSubmit(StudentFormSubmit)}

                                >submit

                                </PrimaryButton>
                            </div>
                        </form>

                    </FormProvider>
                </div>
                {
                    JSON.stringify(submitData)
                }
            </div>
        </>
    )
}

export default StudentForm