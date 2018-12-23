import { Component, Prop } from '@stencil/core';

@Component({
  tag: 's-button',
  styleUrl: 'button.scss'
})
export class SButton {
  @Prop() fill!: boolean;
  render () {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }
}
