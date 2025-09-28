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
          <IconButton coloricon='white' tamano={45} icon="square-odnoklassniki" color='#006CE4' pulsar={() => console.log('Op1')} />
          <IconButton coloricon='white' tamano={45} icon="square-behance" color='#006CE4' pulsar={() => console.log('Op2')} />
          <IconButton coloricon='white' tamano={45} icon="square-hacker-news" color='#006CE4' pulsar={() => console.log('Op3')} />
          <IconButton coloricon='white' tamano={45} icon="square-nfi" color='#006CE4' pulsar={() => console.log('Op4')} />
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