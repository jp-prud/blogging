import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition
} from 'react-native-reanimated';

import { AnimatedBox } from '../../Box/AnimatedBox';

interface BaseView {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollableViewContainer({
  backgroundColor,
  children,
}: BaseView) {
  return (
    <Animated.ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor, flex: 1 }}
      entering={FadeIn}
      exiting={FadeOut}
      layout={LinearTransition.springify().damping(15).stiffness(100)}
    >
      {children}
    </Animated.ScrollView>
  );
}

export function ViewContainer({ backgroundColor, children }: BaseView) {
  return (
    <AnimatedBox style={{ backgroundColor, flex: 1 }}>{children}</AnimatedBox>
  );
}
