import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CreatePostScreen, EditPostScreen, PostDetailsScreen } from '@screens';

import {
  AppStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';
import { TabNavigationStack } from './TabNavigationStack';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="AppTabNavigator" component={TabNavigationStack} />

      <Screen name="PostDetailsScreen" component={PostDetailsScreen} />
      <Screen name="EditPostScreen" component={EditPostScreen} />
      <Screen name="CreatePostScreen" component={CreatePostScreen} />
    </Navigator>
  );
}
