import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '@routes';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params?: RootStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'SignInScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return { reset };
}
