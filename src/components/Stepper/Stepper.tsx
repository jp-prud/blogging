import React, { createContext, useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';

import {
  AnimatedBox,
  Box,
  Button,
  ButtonProps,
  HORIZONTAL_PADDING,
  Text
} from '@components';

import { useStepper } from './useStepper';

interface StepperContextProps {
  previousStep: () => void;
  nextStep: () => void;
  disabled: boolean
}

interface StepperProps {
  initialStepIndex?: number;
  fixedRenderContent?: React.ReactNode;
  disabled?: boolean;
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
}

export const StepperContext = createContext({} as StepperContextProps);

export function Stepper({
  steps,
  initialStepIndex = 0,
  disabled = false
}: StepperProps) {
  const { width } = useWindowDimensions();

  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);

  const previousStep = useCallback(() => {
    setCurrentStepIndex(prevState => Math.max(0, prevState - 1));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStepIndex(prevState => Math.min(steps.length - 1, prevState + 1));
  }, [steps.length]);

  return (
    <StepperContext.Provider value={{ previousStep, nextStep, disabled }}>
      <AnimatedBox
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
          width: width - HORIZONTAL_PADDING * 2,
          gap: 56,
        }}>
        <Box alignSelf='center' flexDirection='row' g="s24">
          {steps.map((step, index) => (
            <Box key={step.label} alignItems='center' minHeight={20} g="s4">
              <Text color={currentStepIndex === index ? 'green' : 'subtext'}>{step.label}</Text>

              <Box backgroundColor={currentStepIndex === index ? 'green' : 'background'} width="100%" height={2} borderRadius='s2' />
            </Box>
          ))}
        </Box>

        {steps[currentStepIndex].content}
      </AnimatedBox>
    </StepperContext.Provider>
  );
}

export function StepperHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Box alignItems="center" g="s4" zIndex={2}>
      <Text preset="headingMedium" textAlign="center">
        {title}
      </Text>
      <Text color="subtext" textAlign="center">
        {subtitle}
      </Text>
    </Box>
  );
}

export function StepperContent({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedBox style={{ gap: 32, justifyContent: 'center' }}>
      {children}
    </AnimatedBox>
  );
}

export function StepperFooter({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedBox
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
      }}
    >
      {children}
    </AnimatedBox>
  );
}

export function StepperPreviousButton({
  onPress,
  ...props
}: Omit<ButtonProps, 'text'>) {
  const { previousStep } = useStepper();

  return (
    <Button
      flex={1}
      preset="outline"
      text="Voltar"
      onPress={onPress ?? previousStep}
      {...props}
    />
  );
}

export function StepperNextButton({
  text = 'Continuar',
  disabledText = 'Finalizado',
  onPress,
  ...props
}: Omit<ButtonProps, 'text'> & { disabledText?: string, text?: string }) {
  const { nextStep, disabled } = useStepper();

  return (
    <Button flex={1} text={disabled ? disabledText : text} onPress={onPress ?? nextStep} {...props} />
  );
}
