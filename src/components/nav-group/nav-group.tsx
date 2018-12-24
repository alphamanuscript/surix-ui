import { Component } from '@stencil/core';

@Component({
  tag: 's-nav-group'
})
export class SNavGroup {
  render () {
    return (
      <div>
        <div s-nav-group-header>
          <slot name="header"></slot>
        </div>
        <div s-nav-group-content>
          <slot></slot>
        </div>
      </div>
    );
  }
}
