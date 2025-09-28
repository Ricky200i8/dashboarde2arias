import { View, Text } from 'react-native'
import React from 'react'

interface CustomTextPropierties{
    value:string;
    variant: "normal" | "title" | "subtitle" | "minitext";
}

const CustomText = ({value, variant="normal"}:CustomTextPropierties) => {
  return (
    <Text className={selectVariant(variant)}>{value}</Text>
  )
}
export default CustomText

function selectVariant(variante:string){
    switch(variante){
        case "title":
            return "text-2xl font-bold text-white"           
        case "subtitle":
            return "text-xl font-bold text-black"     
        case "normal":
            return "text-base font-bold text-white"  
        default:
            return "text-xs text-gray-400"  
    }
}