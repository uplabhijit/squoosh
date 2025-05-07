declare global {
  namespace JSX {
    interface IntrinsicElements {
      'range-input': RangeInputAttributes;
    }
  }
}

interface RangeInputAttributes {
  value?: string | number;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  onInput?: (event: Event) => void;
  class?: string;
  ref?: any;
}

export default class RangeInputElement extends HTMLElement {
  value: string;
}
