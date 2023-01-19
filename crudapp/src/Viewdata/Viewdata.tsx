import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './../StudentForm/form.scss'
import { PrimaryButton } from '@fluentui/react';

const Viewdata = () => {
    const [data, setData] = useState<any>();
    const id = useParams();
    const getData = async (item: any) => {
        try {
            const url = `http://localhost:5000/data/${item.id}`
            const result: any = await axios.get(url);
            setData(result.data)

        }
        catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getData(id);
    }, [id])
    return (
        <div>
            {data &&
                <>
                <div className='zelar'>
        <h1>
        <img src="https://zelarsoft.com/wp-content/uploads/2021/10/logo.png" alt="icon"/>
       
        </h1>
    </div>
  <Link className='back' to="/create"><PrimaryButton>Go back</PrimaryButton> </Link>
  <Link className='back1' to="/View"><PrimaryButton>view Table</PrimaryButton></Link>
                    <div className='data'>
                        
                        <table>
                            <tr>
                                <th>Name</th>
                                <td>{data.Name}</td>
                            </tr>
                            <tr>
                                <th>Roll Number</th>
                                <td>{data.RollNumber}</td>
                            </tr>
                            <tr>
                                <th>English</th>
                                <td>{data.English}</td>
                            </tr>
                            <tr>
                                <th>Telugu</th>
                                <td>{data.Telugu}</td>
                            </tr>
                            <tr>
                                <th>Hindi</th>
                                <td>{data.Hindi}</td>
                            </tr>
                            <tr>
                                <th>science</th>
                                <td>{data.Science}</td>
                            </tr>
                            <tr>
                                <th>Social</th>
                                <td>{data.Social}</td>
                            </tr>
                            <tr>
                                <th>Activites</th>
                                <td>
                                    {data.Activites}
                                </td>
                            </tr>
                            <tr>
                                <th>Totalmarks</th>
                                <td>{data.TotalMarks}</td>
                            </tr>
                        </table>
                    
                    </div>



                </>}
        </div>
    )
}

export default Viewdata