import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CreatePostScreen, PostDetailsScreen } from '@screens';
import { TabNavigationStack } from './TabNavigationStack';
import { AppStackParamList, NAVIGATOR_STACK_SCREEN_OPTIONS } from './navigationTypes';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="AppTabNavigator" component={TabNavigationStack} />

      <Screen name="PostDetailsScreen" component={PostDetailsScreen} />
      <Screen name="CreatePostScreen" component={CreatePostScreen} />
    </Navigator>
  );
}
