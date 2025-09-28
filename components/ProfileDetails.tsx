import React from 'react'
import { Image, Text, View } from 'react-native'
import "../global.css"
import CustomText from './Reutilizables/CustomText'
import IconButton from './Reutilizables/IconButton'

const ProfileDetails = () => {
  return (
      <View className="items-center ">
      <Image
        className='max-h-[175] max-w-[175] rounded-full'
        source={require('../assets/images/image.png')}
      />
      <CustomText value='Ricardo Arias' variant='title'></CustomText>
      <CustomText value='Estudiante' variant='subtitle'></CustomText>
      <View className='flex-row justify-center  gap-3'>
        <IconButton coloricon='white' icon="square-instagram" pulsar={() => console.log('Instagram')} />
        <IconButton coloricon='white' icon="square-github" pulsar={() => console.log('GitHub')} color='#1F1D1D' />
        <IconButton coloricon='white' icon="square-facebook" pulsar={() => console.log('Facebook')} color='#1877F2' />
        <IconButton coloricon='white' icon="square-twitter" pulsar={() => console.log('Twitter')} color='#1DA1F2' />
      </View>
      </View>   
  )
}
export default ProfileDetails