import { h, Component } from 'preact';
import { RevealerProps } from '../../../../components/custom-types';
import { Arrow } from '../../../icons';
import './style.css';

export class Revealer extends Component<RevealerProps> {
  render() {
    const { children, checked, onChange, class: className } = this.props;
    return (
      <div class={`revealer ${className || ''}`}>
        <div class="revealer__header">
          <input type="checkbox" checked={checked} onChange={onChange} />
          <div class="revealer__arrow">
            <Arrow />
          </div>
        </div>
        {checked && <div class="revealer__content">{children}</div>}
      </div>
    );
  }
}
