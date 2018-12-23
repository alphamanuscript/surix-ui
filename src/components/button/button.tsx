import { Component } from '@stencil/core';

@Component({
  tag: 's-button',
  styleUrl: 'button.scss'
})
export class SButton {
  render () {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }
}
