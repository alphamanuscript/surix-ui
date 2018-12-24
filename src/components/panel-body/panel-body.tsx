import { Component } from '@stencil/core';

@Component({
  tag: 's-panel-body'
})
export class SPanelBody {
  render () {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
