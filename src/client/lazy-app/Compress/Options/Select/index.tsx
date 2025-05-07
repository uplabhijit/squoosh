import { h, Component } from 'preact';
import * as style from './style.css';
import 'add-css:./style.css';
import { Arrow } from 'client/lazy-app/icons';
import { SelectProps } from '../../../../components/custom-types';

export default class Select extends Component<SelectProps> {
  render(props: SelectProps) {
    const { large, children, value, onChange, ...otherProps } = props;

    return (
      <div class={style.select}>
        <select
          class={`${style.builtinSelect} ${large ? style.large : ''}`}
          value={value}
          onChange={onChange}
          {...otherProps}
        >
          {children}
        </select>
        <div class={style.arrow}>
          <Arrow />
        </div>
      </div>
    );
  }
}
