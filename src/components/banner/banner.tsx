import { Component } from '@stencil/core';

@Component({
  tag: 's-banner',
  styleUrl: 'banner.scss'
})
export class SBanner {
  render () {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
