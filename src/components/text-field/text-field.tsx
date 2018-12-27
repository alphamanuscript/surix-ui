import { Component, Element, Event, EventEmitter, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 's-text-field',
  styleUrl: 'text-field.scss',
  shadow: true
})
export class STextField {

  @Element() el: HTMLElement;

  @State() hasFocus: boolean = false;

  @Prop() error!: string;
  @Prop() multiline!: boolean;
  @Prop() placeholder!: string;
  @Prop() type!: string;
  @Prop({ mutable: true }) value!: string;

  @Watch('value')
  onValueChanged () {
    this.onChange();
  }

  @Event() change: EventEmitter;
  @Event() input: EventEmitter;

  get isPassword () {
    return this.type === 'password';
  }

  onInputFocus = () => {
    this.hasFocus = true;
  }

  onInputBlur = () => {
    this.hasFocus = false;
  }

  onInput = (ev) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.input.emit(ev as KeyboardEvent);
  }

  onChange = () => {
    this.change.emit({ value: this.value });
  }

  hostData() {
    return {
      class: {
        focus: this.hasFocus
      }
    };
  }

  render () {
    const Tag = this.multiline ? 'textarea' : 'input' as any;
    const inputAttrs = { placeholder: this.placeholder, value: this.value } as any;
    if (!this.multiline) {
      inputAttrs.type = this.type;
    }
    return [
      <div class="input-container">
        <slot name="prefix"></slot>
        <Tag
          class="input" {...inputAttrs}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          onChange={this.onChange}
          onInput={this.onInput}
        >
        </Tag>
        <slot name="suffix"></slot>
      </div>,
      this.error && <div class="error-message">{ this.error }</div>
    ];
  }
}
