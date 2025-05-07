import { h, Component } from 'preact';
import * as style from './style.css';
import 'add-css:./style.css';
import { UncheckedIcon, CheckedIcon } from '../../../icons';
import { CheckboxProps } from '../../../../components/custom-types';

export default class Checkbox extends Component<CheckboxProps> {
  render(props: CheckboxProps) {
    return (
      <div class={style.checkbox}>
        {props.checked ? (
          props.disabled ? (
            <CheckedIcon class={`${style.icon} ${style.disabled}`} />
          ) : (
            <CheckedIcon class={`${style.icon} ${style.checked}`} />
          )
        ) : (
          <UncheckedIcon class={style.icon} />
        )}
        <input
          class={style.realCheckbox}
          type="checkbox"
          checked={props.checked}
          disabled={props.disabled}
          name={props.name}
          onChange={props.onChange}
        />
      </div>
    );
  }
}
