import "@/global.css"
import React from 'react'
import { Image, View, Text } from 'react-native'
import IconButton from"@/components/IconButton"
import CustomText from "./CustomText"
const ProfileDetails= () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Image className='max-h-24 max-w-24' source={require('../assets/images/icon.png')} ></Image>
      <CustomText variant="title" value="Ricardo Arias"></CustomText>
      <CustomText variant="subtitle" value="Estudiante"></CustomText>
      <text className="">
      <IconButton icon='logo-instagram' pulsar={()=>console.log("Instagram")} enlace=''></IconButton>
      <IconButton icon='logo-facebook' pulsar={()=>console.log("Facebook")} enlace=''></IconButton>
      <IconButton icon='logo-x' pulsar={()=>console.log("X")} enlace=''></IconButton>
      </text>
      
    </View>
  )
}

export default ProfileDetails