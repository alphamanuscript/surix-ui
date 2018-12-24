import { Component } from '@stencil/core';

@Component({
  tag: 's-drawer',
  styleUrl: 'drawer.scss'
})
export class SDrawer {
  render () {
    return (
      <div>
        <div s-drawer-header>
          <slot name="header"></slot>
        </div>
        <div class="s-drawer-content">
          <slot></slot>
        </div>
      </div>
    );
  }
}
