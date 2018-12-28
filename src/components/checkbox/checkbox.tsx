import { Component, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 's-checkbox',
  styleUrl: 'checkbox.scss'
})
export class SCheckbox {

  @Prop({ mutable: true }) checked!: boolean;
  @Prop() disabled!: boolean;
  @Prop({ mutable: true }) value!: boolean;

  @Watch('checked')
  checkedChanged () {
    // synchronize checked and value
    if (this.value !== this.checked) {
      this.value = this.checked;
    }
  }

  @Event() change!: EventEmitter;
  @Event() input!: EventEmitter;

  onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    if (input) {
      this.checked = input.checked;
    }
    this.input.emit({
      checked: this.checked,
      value: this.checked
    });
  }

  onChange = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    if (input) {
      this.checked = input.checked;
    }
    this.change.emit({
      checked: this.checked,
      value: this.checked
    });
  }

  render () {
    return (
      <input
        type="checkbox"
        checked={this.checked}
        disabled={this.disabled}
        onChange={this.onChange}
        onInput={this.onInput}
      ></input>
    );
  }
}
