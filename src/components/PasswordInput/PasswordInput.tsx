import { useState } from 'react';

import { Icon, TextInput, TextInputProps } from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput({ ...passwordInputProps }: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function handleToggleSecureTextEntry() {
    setIsSecureTextEntry(prevState => !prevState);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...passwordInputProps}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eye' : 'eyeSlash'}
          color="subtext"
          onPress={handleToggleSecureTextEntry}
        />
      }
    />
  );
}
