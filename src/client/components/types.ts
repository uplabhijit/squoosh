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
  value?: number;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  onInput?: (event: Event) => void;
}

export interface SelectProps extends BaseProps {
  name?: string;
  value?: string | number;
  onChange?: (event: Event) => void;
}

export interface ButtonProps extends BaseProps {
  onClick?: (event: Event) => void;
  disabled?: boolean;
}
