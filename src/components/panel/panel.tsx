import { Component } from '@stencil/core';

@Component({
  tag: 's-panel',
  styleUrl: 'panel.scss'
})
export class SPanel {
  render () {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
