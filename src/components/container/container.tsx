import { Component } from '@stencil/core';

@Component({
  tag: 's-container',
  styleUrl: 'container.scss'
})
export class SContainer {
  render () {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
