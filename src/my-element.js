import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

export class MyElement extends PolymerElement {
  static get is() {
    return 'my-element';
  }

  static get template() {
    return `<style>
              :host {
                display: block;
              }
            </style>
            <p>It works! I am "${this.is}"</p>`;
  }

  static get properties() {
    return {
      name: {
        type: String,
        value: ''
      }
    }
  }
}

customElements.define(MyElement.is, MyElement);