import {View, TextInput} from 'react-native'
import React from 'react'
import CustomText from './Reutilizables/CustomText'
import IconButton from './Reutilizables/IconButton'
import "@/global.css"

const MenuDetails = () => {
    return (
      <View className='flex-1 w-full rounded-t-[50] pt-[30] px-[35] bg-white'>
          <CustomText value="Skill" variant="subtitle"></CustomText>
          <View className='mt-4 mb-14 flex-row items-center justify-between'>
          <IconButton texto='Xd' variante='text' coloricon='#BB5E9C' tamano={45} color='#eab308' pulsar={() => console.log('Op1')} />
          <IconButton texto='Ai' variante='text' coloricon='#D9583B' tamano={45} color='#eab308' pulsar={() => console.log('Op2')} />
          <IconButton texto='Ps' variante='text' coloricon='#4659A8' tamano={45} color='#eab308' pulsar={() => console.log('Op3')} />
          <IconButton texto='Ae' variante='text' coloricon='#80538A' tamano={45} color='#eab308' pulsar={() => console.log('Op4')} />
        </View>
        <CustomText value="Profession" variant="subtitle" ></CustomText>
        <TextInput 
        className='border-b-2 border-yellow-500 text-slate-900  mb-14' 
        />
        <CustomText value="Experience" variant="subtitle" ></CustomText>
        
    </View>
  )
}

export default MenuDetails