import { Component } from '@stencil/core';

@Component({
  tag: 's-panel-header'
})
export class SPanelHeader {
  render () {
    return (
      <div>
        <div s-panel-title>
          <slot name="title"></slot>
        </div>
        <div s-panel-subtitle>
          <slot name="subtitle"></slot>
        </div>
        <slot></slot>
      </div>
    );
  }
}
