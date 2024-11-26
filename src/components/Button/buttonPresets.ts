import { ThemeColors } from '../../theme/theme';
import { TouchableOpacityBoxProps } from '../Box/Box';

import { ButtonPreset } from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
  icon?: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
      icon: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'disabled',
      },
      content: 'text',
      icon: 'text',
    },
  },
  secondary: {
    default: {
      container: {
        backgroundColor: 'white',
      },
      content: 'primary',
      icon: 'primary',
    },
    disabled: {
      container: {
        backgroundColor: 'disabled',
      },
      content: 'text',
      icon: 'text',
    },
  },
  positive: {
    default: {
      container: {
        backgroundColor: 'green',
      },
      content: 'primaryContrast',
      icon: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'disabled',
      },
      content: 'text',
      icon: 'text',
    },
  },
  negative: {
    default: {
      container: {
        backgroundColor: 'darkRed',
      },
      content: 'primaryContrast',
      icon: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'disabled',
      },
      content: 'text',
      icon: 'text',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 2,
        borderColor: 'primary',
      },
      content: 'primary',
      icon: 'primary',
    },
    disabled: {
      container: {
        backgroundColor: 'disabled',
      },
      content: 'text',
      icon: 'text',
    },
  },
  invertedOutline: {
    default: {
      container: {
        borderWidth: 2,
        borderColor: 'white',
      },
      content: 'white',
      icon: 'white',
    },
    disabled: {
      container: {
        backgroundColor: 'disabled',
      },
      content: 'text',
      icon: 'text',
    },
  },
};
