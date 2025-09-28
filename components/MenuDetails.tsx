import { View, Text } from 'react-native'
import React from 'react'
import CustomText from './Reutilizables/CustomText'

const MenuDetails = () => {
  return (
    <View className='flex-1 w-full rounded-t-[50] pt-[30] pl-[35] bg-zinc-800'>
        <CustomText value="Skill" variant="subtitle"></CustomText>
        
    </View>
  )
}

export default MenuDetails