import TextFieldForm from "./TextFieldForm";
export const Dynamic=(fieldName:string,item:any)=>
{
    switch(fieldName){
        case "TextFieldForm":return<TextFieldForm{...item}/>;
        default:return 'Component not found';
    }
}
export default Dynamic