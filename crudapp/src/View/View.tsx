import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {DetailsList,DetailsListLayoutMode,IColumn} from '@fluentui/react'
import {Link} from 'react-router-dom'
import './../StudentForm/form.scss'
import {GrView} from 'react-icons/gr'
import {AiTwotoneEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'

const View = () => {
    const [data,setData]=useState<any>();
    
    const getData=async()=>{
        try{
            const url=' http://localhost:5000/data'
            const result:any=await axios.get(url);
            setData(result.data)

        }
        catch(err){
            console.log(err);

        }
    };
    const deleteRequest=async(id:any)=>{
        try{
            const url=` http://localhost:5000/data/${id}`;
            const result:any=await axios.delete(url);
            console.log(result);
            getData();
            
        }
        catch(error){
            console.log(error)

        }
    }
    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        getData();
    },[data])
   
    const columns:IColumn[]=[
        {
            key:'column1',
            name:'Name',
            fieldName:'Name',
            minWidth:50,
            maxWidth:50,
            isResizable:true,

        },
        {
            key:'column2',
            name:'RollNumber',
            fieldName:'RollNumber',
            minWidth:90,
            maxWidth:90,
            isResizable:true,

        },
        {
            key:'column3',
            name:'English',
            fieldName:'English',
            minWidth:50,
            maxWidth:50,
            isResizable:true,

        },
        {
            key:'column4',
            name:'Telugu',
            fieldName:'Telugu',
            minWidth:50,
            maxWidth:50,
            isResizable:true,

        },
        {
            key:'column5',
            name:'Hindi',
            fieldName:'Hindi',
            minWidth:50,
            maxWidth:50,
            isResizable:true,

        },
        {
            key:'column6',
            name:'Science',
            fieldName:'Science',
            minWidth:50,
            maxWidth:50,
            isResizable:true,

        },
        {
            
                key:'column7',
                name:'Social',
                fieldName:'Social',
                minWidth:50,
                maxWidth:50,
                isResizable:true,
    
            
        },
        {
            key:'column8',
            name:'Activites',
            fieldName:'Activites',
            minWidth:90,
            maxWidth:90,
            isResizable:true,
        },
        {
            key:'column9',
            name:'Totalmarks',
            fieldName:'TotalMarks',
            minWidth:90,
            maxWidth:90,
            isResizable:true,
        },
        
        {
            key:'column10',
            name:'Edit',
            fieldName:'id',
            minWidth:90,
            maxWidth:90,
            isResizable:true,
            onRender:(item:any)=>(
                item.id&&
               

                <>
                <div className='icons'>
                <Link to={`/view/${item.id}`}><  GrView className='icon' size={20}/></Link>
                <Link to={`/update/${item.id}`}><AiTwotoneEdit className='icon' size={20} color={"#B0B3B5"}/></Link>
                <Link onClick={()=>deleteRequest(item.id)} to=''><AiFillDelete className='icon' size={20} color={"#B0B3B5"}/></Link>
                </div>
                </>
               
            )
        }

    ]
  return (
    <>
    <div className='zelar'>
        <h1>
        <img src="https://zelarsoft.com/wp-content/uploads/2021/10/logo.png" alt="icon"/>
       
        </h1>
    </div>
    <Link className='add' to="/create">Add</Link>
   
   <div className='table'>
    {data &&
    <DetailsList
    items={data}
    columns={columns}
    setKey='set'
    layoutMode={DetailsListLayoutMode.justified}/>}
   </div>
   
   </>
  )
}

export default View