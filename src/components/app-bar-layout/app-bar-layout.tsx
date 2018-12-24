import { Component } from '@stencil/core';

@Component({
  tag: 's-app-bar-layout',
  styleUrl: 'app-bar-layout.scss'
})
export class SAppBarLayout {
  render () {
    return (
      <div>
        <slot name="app-bar"></slot>
        <div class="s-app-bar-layout-content">
          <slot></slot>
        </div>
      </div>
    )
  }
}
