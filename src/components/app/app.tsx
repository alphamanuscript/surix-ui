import { Component } from '@stencil/core';

@Component({
  tag: 's-app',
  styleUrl: 'app.scss'
})
export class SApp {
  render () {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
