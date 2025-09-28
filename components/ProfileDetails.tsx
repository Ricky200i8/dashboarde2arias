import React from 'react'
import { Image, Text, View } from 'react-native'
import "../global.css"
import IconButton from './Reutilizables/IconButton';

const ProfileDetails = () => {
  return (
      <View className="items-center">
      <Image
        className='max-h-[175] max-w-[175] rounded-full'
        source={require('../assets/images/image.png')}
      />

      <Text className='text-2xl font-bold'>Ricardo Arias</Text>
      <Text className='text-xl font-bold text-gray-400'> Estudiante </Text>
      <View className='flex-row justify-center  gap-3'>
        <IconButton icon="square-instagram" pulsar={() => console.log('Instagram')} />
        <IconButton icon="square-github" pulsar={() => console.log('GitHub')} color='green' />
        <IconButton icon="square-facebook" pulsar={() => console.log('Facebook')} color='#1877F2' />
        <IconButton icon="square-twitter" pulsar={() => console.log('Twitter')} color='#1DA1F2' />
      </View>
      </View>   
  )
}
export default ProfileDetails