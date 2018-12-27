import { Component, Prop } from '@stencil/core';

@Component({
  tag: 's-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class SButton {
  @Prop() block!: boolean;
  @Prop() circle!: boolean;
  @Prop() danger!: boolean;
  @Prop() iconOnly!: boolean;
  @Prop() large!: boolean;
  @Prop() primary!: boolean;
  @Prop() round!: boolean;
  @Prop() small!: boolean;
  @Prop() disabled!: boolean;

  hostData () {
    return {
      class: {
        'base-style': !(this.danger || this.primary),
        'base-size': !(this.large || this.small),
        block: this.block,
        circle: this.circle,
        danger: this.danger,
        large: this.large,
        'icon-only': this.iconOnly,
        primary: this.primary,
        round: this.round,
        small: this.small
      }
    };
  }

  render () {
    return (
      <button disabled={this.disabled}>
        <slot name="prefix"></slot>
        <span class="label">
          <slot></slot>
        </span>
        <slot name="suffix"></slot>
      </button>
    );
  }
}
