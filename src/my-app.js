import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
import {PaperButton} from '../node_modules/@polymer/paper-button/paper-button.js';
import {MyElement} from './my-element.js';

export class MyApp extends PolymerElement {
  static get is() {
    return 'my-app';
  }

  static get template() {
    return `<h1>Welcome [[name]]!</h1>
            <my-element></my-element>
            <paper-button on-click="_alertName" raised>Which is my name?</paper-button>`;
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