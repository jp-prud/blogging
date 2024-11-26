import { Pressable } from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

import {
  ArrowIcon,
  CheckmarkAlertShield,
  CheckmarkFillIcon,
  ClockIcon,
  CloseIcon,
  ExclamationShieldIcon,
  EyeIcon,
  EyeSlashIcon,
  FireIcon,
  HeartIcon,
  HouseFillIcon,
  HouseIcon,
  PencilIcon,
  QuestionMarkIcon,
  ChevronIcon
} from '../../assets/icons';
import { Box } from '../Box/Box';

export interface IconBase {
  size?: number;
  color?: string;
  testID?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?(): void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const Icon = <SVGIcon color={colors[color]} size={size} />;

  if (onPress) {
    return (
      <Pressable testID="Icon" hitSlop={16} onPress={onPress} style={{}}>
        {Icon}
      </Pressable>
    );
  }

  return <Box testID="Icon">{Icon}</Box>;
}

const iconRegistry = {
  arrow: ArrowIcon,
  clock: ClockIcon,
  chevron: ChevronIcon,
  fire: FireIcon,
  heart: HeartIcon,
  pencil: PencilIcon,
  eye: EyeIcon,
  eyeSlash: EyeSlashIcon,
  house: HouseIcon,
  houseFill: HouseFillIcon,
  checkmark: CheckmarkFillIcon,
  checkmarkAlert: CheckmarkAlertShield,
  exclamation: ExclamationShieldIcon,
  close: CloseIcon,
  questionMark: QuestionMarkIcon,
  checkmarkFill: CheckmarkFillIcon
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
