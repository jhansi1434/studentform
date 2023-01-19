import React from 'react'
import {TextField} from '@fluentui/react';
 import {Control,Controller,useFormContext} from 'react-hook-form';
  
 interface TextFieldProps{
    name:string|number|any;
    typeOf?:string|number;
   label:string,
   isRequired?:boolean;
   isdisabled?:boolean;
   isReadyOnly?:boolean;
   deafaultValue?:string;
   control?:Control<any>;
   register?:any;
   placeholder?:string;
 }

const TextFieldForm = ({
    name,
    label,
    isRequired,
    isdisabled,
    isReadyOnly,
    deafaultValue,
    placeholder,
    typeOf
}:TextFieldProps) => {
    const {control}=useFormContext();
  return (
    <>
    <Controller
    control={control}
    name={name}
    render={({
        field,
        fieldState:{error},
    })=>{
        return(
            <>
            <div 
            className={
                isRequired?(error?"errorGroup":"errorGroupstar"):""
            }
            >
                <TextField
                type={typeOf==='number'?"number":'text'}
                label={label}
                disabled={isdisabled}
                readOnly={isReadyOnly}
                styles={{fieldGroup:{background:"rgb(237,237,237)", border:0}}}
                defaultValue={deafaultValue}
                placeholder={placeholder}
                {...field}
                errorMessage={error?error.message:""}
                className={
                    isRequired?(error?"errorGroup":"errorGroupStar"):""
                } 
                />           
                </div>
            </>
        )
    }}
    />
    </>
   
  );
};

export default TextFieldForm