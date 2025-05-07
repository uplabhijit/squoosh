import { h, Component } from 'preact';
import * as style from './style.css';
import 'add-css:./style.css';
import RangeInputElement from './custom-els/RangeInput/index';
import './custom-els/RangeInput/index';
import { linkRef } from 'shared/prerendered-app/util';
import {
  RangeProps,
  CustomElementProps,
} from '../../../../components/custom-types';

interface State {
  textFocused: boolean;
}

export default class Range extends Component<RangeProps, State> {
  rangeWc?: RangeInputElement;
  inputEl?: HTMLInputElement;

  private onTextInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();
    if (!value) return;
    this.rangeWc!.value = input.value;
    this.rangeWc!.dispatchEvent(
      new InputEvent('input', {
        bubbles: event.bubbles,
      }),
    );
  };

  private onTextFocus = () => {
    this.setState({ textFocused: true });
  };

  private onTextBlur = () => {
    this.setState({ textFocused: false });
  };

  render(props: RangeProps, state: State) {
    const { children, value, min, max, step, onInput, ...otherProps } = props;
    const textValue = state.textFocused ? this.inputEl!.value : value;

    return (
      <label class={style.range}>
        <span class={style.labelText}>{children}</span>
        {/* On interaction, Safari gives focus to the first element in the label, so the
        <range-input> is deliberately first. */}
        <div class={style.rangeWcContainer}>
          <range-input
            ref={linkRef(this, 'rangeWc')}
            class={style.rangeWc}
            value={value}
            min={min}
            max={max}
            step={step}
            onInput={onInput}
            {...(otherProps as CustomElementProps['range-input'])}
          />
        </div>
        <input
          ref={linkRef(this, 'inputEl')}
          type="number"
          class={style.textInput}
          value={textValue}
          min={min}
          max={max}
          step={step}
          onInput={this.onTextInput}
          onFocus={this.onTextFocus}
          onBlur={this.onTextBlur}
        />
      </label>
    );
  }
}
