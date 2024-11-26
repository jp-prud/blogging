import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AuthStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Navigator
      initialRouteName="SignInScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
    </Navigator>
  );
}
