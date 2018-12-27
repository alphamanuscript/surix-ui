import { Component, Prop } from '@stencil/core';

@Component({
  tag: 's-icon'
})
export class MyTag {
  @Prop() name!: string;
  render () {
    const className = `fas fa-${this.name}`;
    return (
      <span class={className}></span>
    );
  }
}
