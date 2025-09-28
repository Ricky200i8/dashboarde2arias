import { View, Text } from 'react-native'
import React from 'react'

interface CustomTextPropierties{
    value:string;
    variant: "normal" | "title" | "subtitle";
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
            return "text-2xl font-bold text-black"           
        case "subtitle":
            return "text-xl font-bold text-gray-500"     
        default:
            return "text-base font-bold text-gray"     
    }
}