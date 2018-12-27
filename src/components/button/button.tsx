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

  hostData () {
    return {
      class: {
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
      <button>
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </button>
    );
  }
}
