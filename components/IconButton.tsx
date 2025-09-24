import { Pressable} from 'react-native'
import React from 'react'
import "@/global.css"
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonProps{
  pulsar:() => void;//Metodo
  icon: string;//Cadena
  enlace: string;//Cadena opcional
}

const IconButton = ({icon, pulsar, enlace}: IconButtonProps) => {
  return (
    <Pressable onPress={pulsar}>
        <Ionicons name={icon as any} size={24} color="black"/>
    </Pressable>
  )
}

export default IconButton