import { LitElement, html, css } from 'lit-element';
import { templatePlanned } from '../../templates/planned';


class DemoMWCBottomAppBar extends LitElement {
  render() {
    return html`            
      ${templatePlanned}
    `;
  }
}

customElements.define('demo-mwc-bottom-app-bar', DemoMWCBottomAppBar);