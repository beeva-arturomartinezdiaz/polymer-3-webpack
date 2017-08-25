import {Element as PolymerElement} from '../../node_modules/@polymer/polymer/polymer-element.js';
import {PaperButton} from '../../node_modules/@polymer/paper-button/paper-button.js';
import {MyElement} from '../my-element/my-element-module.js';

export class MyApp extends PolymerElement {
  static get is() {
    return 'my-app';
  }

  static get template() {
    return `##dom_replace##`;
  }

  static get properties() {
    return {
      name: {
        type: String,
        value: ''
      }
    }
  }

  _alertName(e) {
    console.log(`Your name is: ${this.name}`);
  }
}

customElements.define(MyApp.is, MyApp);