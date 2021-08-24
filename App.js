import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ListToDo from './src/components/listToDo';
import Confirm from './src/confirm'

const  Stack = createStackNavigator ();

function Myapp (){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={ListToDo} name ="ListToDo"/>
                <Stack.Screen component={Confirm} name ="confirm"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Myapp