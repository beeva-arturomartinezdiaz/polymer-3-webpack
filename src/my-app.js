import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
import {MyElement} from './my-element.js';

export class MyApp extends PolymerElement {
  static get is() {
    return 'my-app';
  }

  static get template() {
    return `<h1>Welcome [[name]]!</h1>
            <my-element></my-element>`;
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

customElements.define(MyApp.is, MyApp);