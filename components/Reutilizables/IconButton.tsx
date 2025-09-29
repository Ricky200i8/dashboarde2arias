import { Pressable, Text} from 'react-native'
import React from 'react'
import "@/global.css"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface IconButtonProps {
  pulsar: () => void; // Método
  icon?: string;       // Cadena
  enlace?: string;    // Cadena opcional
  color?: string;
  coloricon: string;
  tamano?: number;
  variante: "icon" | "text";
  texto?: string;
}

const iconButton = ({icon, pulsar, enlace, color, tamano,coloricon, variante, texto}: IconButtonProps) => {
  const finalColor = icon === "square-instagram" ? "#E1306C" : color || "black";
  return (
    <Pressable onPress={pulsar} className="p-2 rounded-2xl " style={{ backgroundColor: finalColor,}}>
      {selectVariant(variante, icon, tamano, coloricon, enlace, pulsar, texto)}
    </Pressable>
  )
}

export default iconButton

function selectVariant(variante:string, icon:string, tamano:number, coloricon:string, enlace:string, pulsar:() => void, texto:string){
  switch(variante){
      case "icon":
          return <FontAwesome6 name={icon as any} size={tamano || 24} color={coloricon}/>            
      default:
          return <Text className='font-bold text-4xl text-center'   style={{color:coloricon, height:tamano, width:tamano}}>{texto}</Text>
  }
}