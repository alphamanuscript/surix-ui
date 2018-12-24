import { Component } from '@stencil/core';

@Component({
  tag: 's-app-bar',
  styleUrl: 'app-bar.scss'
})
export class SAppBar {
  render () {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
