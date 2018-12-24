import { Component, Prop } from '@stencil/core';

@Component({
  tag: 's-text-field',
  styleUrl: 'text-field.scss'
})
export class STextField {
  @Prop() multiline!: boolean;
  @Prop() placeholder!: string;

  render () {
    return !this.multiline ? (
      <input
        type="text"
        placeholder={this.placeholder}
      />
    ): (
      <textarea
        placeholder={this.placeholder}
      ></textarea>
    )
  }
}
