import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { CompositeScreenProps } from '@react-navigation/native';

import {

  NativeStackNavigationOptions,

  NativeStackScreenProps,

} from '@react-navigation/native-stack';



export type AuthStackParamList = {

  SignInScreen: undefined;

  RecoveryPasswordScreen: undefined;

  SuccessScreen: {

    title: string;

    subtitle: string;

  };

  OTPScreen: {

    email: string;

    newPassword: string;

  };

};



export type AppStackParamList = {

  AppTabNavigator: undefined;

  HomeScreen: undefined;

  PostDetailsScreen: {

    id: string;

  };

  CreatePostScreen: undefined;

  EditPostScreen: {

    id: string;

  };

};



export type AppTabNavigatorParamList = {

  HomeScreen: undefined;

};



export type OnboardingStackParamList = {

  OnboardingScreen: undefined;

};



export type AppScreenProps<RouteScreenName extends keyof AppStackParamList> =

  NativeStackScreenProps<AppStackParamList, RouteScreenName>;



export type AuthScreenProps<RouteScreenName extends keyof AuthStackParamList> =

  NativeStackScreenProps<AuthStackParamList, RouteScreenName>;



export type OnboardingScreenProps<

  RouteScreenName extends keyof OnboardingStackParamList,

> = NativeStackScreenProps<OnboardingStackParamList, RouteScreenName>;



export type RootStackParamList = AuthStackParamList & AppStackParamList;



export type AppTabScreenProps<

  RouteName extends keyof AppTabNavigatorParamList,

> = CompositeScreenProps<

  BottomTabScreenProps<AppTabNavigatorParamList, RouteName>,

  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>

>;



export type Stacks = 'Loading' | 'App' | 'Auth' | 'Onboarding';



declare global {

  namespace ReactNavigation {

    interface RootParamList extends RootStackParamList {}

  }

}



export const NAVIGATOR_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {

  headerShown: false,

  animation: 'slide_from_right',

  fullScreenGestureEnabled: true,

  navigationBarHidden: true,

};

