import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SingnInScreen/SignInScreen';
import SignUpScreen from '../screens/SingnUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
