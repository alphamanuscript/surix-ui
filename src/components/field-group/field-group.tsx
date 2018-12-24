import { Component } from '@stencil/core';

@Component({
  tag: 's-field-group',
  styleUrl: 'field-group.scss'
})
export class SFieldGroup {
  render () {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
