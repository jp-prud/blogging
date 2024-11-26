import { useEffect } from 'react';

import { Stacks } from './navigationTypes';

import { hide } from 'react-native-bootsplash'

export function useRouter(): Stacks {
  useEffect(() => {
    hide({
      fade: true
    })
  }, []);

  return 'App';
}
