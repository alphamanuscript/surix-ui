import { Component } from '@stencil/core';

@Component({
  tag: 's-drawer-layout',
  styleUrl: 'drawer-layout.scss'
})
export class SDrawerLayout {
  render () {
    return (
      <div>
        <slot name="drawer"></slot>
        <div s-drawer-layout-main>
          <slot></slot>
        </div>
      </div>
    );
  }
}
