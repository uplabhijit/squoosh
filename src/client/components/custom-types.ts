import { ComponentChildren, Ref } from 'preact';

export interface BaseProps {
  children?: ComponentChildren;
  ref?: Ref<any>;
}

export interface CheckboxProps extends BaseProps {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: Event) => void;
}

export interface RangeProps extends BaseProps {
  name?: string;
  value?: number | string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  onInput?: (event: Event) => void;
}

export interface SelectProps extends BaseProps {
  name?: string;
  value?: string | number;
  onChange?: (event: Event) => void;
  large?: boolean;
}

export interface ButtonProps extends BaseProps {
  onClick?: (event: Event) => void;
  disabled?: boolean;
  class?: string;
}

export interface RevealerProps extends BaseProps {
  checked?: boolean;
  onChange?: (event: Event) => void;
  class?: string;
}

export interface ToggleProps extends BaseProps {
  name?: string;
  checked?: boolean;
  onChange?: (event: Event) => void;
  class?: string;
}

export interface CustomElementProps {
  'range-input': {
    value?: string | number;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    onInput?: (event: Event) => void;
    class?: string;
    ref?: any;
  };
  'two-up': {
    'legacy-clip-compat'?: boolean;
    class?: string;
    orientation?: 'vertical' | 'horizontal';
    onTouchStartCapture?: (event: Event) => void;
    onTouchEndCapture?: (event: Event) => void;
    onTouchMoveCapture?: (event: Event) => void;
    onPointerDownCapture?: (event: Event) => void;
    onMouseDownCapture?: (event: Event) => void;
    onWheelCapture?: (event: Event) => void;
  };
  'pinch-zoom': {
    class?: string;
    onChange?: (event: Event) => void;
    ref?: any;
  };
  'loading-spinner': {};
}
