import { useContext } from 'react';

import { StepperContext } from './Stepper';

export function useStepper() {
  return useContext(StepperContext);
}
