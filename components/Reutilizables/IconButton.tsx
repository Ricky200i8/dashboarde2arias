import { Pressable} from 'react-native'
import React from 'react'
import "@/global.css"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface IconButtonProps {
  pulsar: () => void; // Método
  icon: string;       // Cadena
  enlace?: string;    // Cadena opcional
  color?: string;
  coloricon?: string;
  tamano?: number;
  texto?: string;
}

const iconButton = ({icon, pulsar, enlace, color, tamano,coloricon}: IconButtonProps) => {
  const finalColor = icon === "square-instagram" ? "#E1306C" : color || "black";
  return (
    <Pressable onPress={pulsar} className="p-2 rounded-2xl" style={{ backgroundColor: finalColor }}>
      <FontAwesome6 name={icon as any} size={tamano || 24} color={coloricon} />
    </Pressable>
  )
}

export default iconButton
