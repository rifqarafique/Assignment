import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListing from '../screens/TaskListing';
import Filters from '../screens/Filters';
import AddTask from '../screens/AddTask';


const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="TaskListing" component={TaskListing} />
      <Stack.Screen name="Filters" component={Filters} />
      <Stack.Screen name="AddTask" component={AddTask} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation