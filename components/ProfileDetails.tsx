import "@/global.css"
import React from 'react'
import { Image, View, Text } from 'react-native'

const ProfileDetails= () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Image className='max-h-24 max-w-24' source={require('../assets/images/icon.png')} ></Image>
      <Text className="text-2xl font-bold">Ricardo Arias</Text>
      <Text className="text-xl font-bold text-gray-400">Estudiante</Text>
    </View>
    
  )
}

export default ProfileDetails