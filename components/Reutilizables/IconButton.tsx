import { Pressable} from 'react-native'
import React from 'react'
import "@/global.css"
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface IconButtonProps {
  pulsar: () => void; // Método
  icon: string;       // Cadena
  enlace?: string;    // Cadena opcional
  color?: string;
}

const iconButton = ({icon, pulsar, enlace, color}: IconButtonProps) => {
  const finalColor = icon === "square-instagram" ? "#E1306C" : color || "black";
  return (
    <Pressable onPress={pulsar} className="p-2 rounded-lg" style={{ backgroundColor: finalColor }}>
      <FontAwesome6 name={icon as any} size={24} color="white" />
    </Pressable>
  )
}

export default iconButton
