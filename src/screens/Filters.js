import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Filters = ({navigation}) => {
    const onBackPress = () =>{
        navigation.goBack()

    }
  return (
    <View>
         <Header title = {"Filters"} backPress = {onBackPress}/>
      <Text>Filters</Text>
    </View>
  )
}

export default Filters