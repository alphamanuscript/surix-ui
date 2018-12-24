import { Component, Prop } from '@stencil/core';

@Component({
  tag: 's-nav-item'
})
export class SNavItem {
  @Prop() active!: boolean;

  render () {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
