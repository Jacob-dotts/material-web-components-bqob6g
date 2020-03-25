import { LitElement, html, css } from 'lit-element';
import { templatePlanned } from '../../templates/planned';

// import hljs from 'highlight.js/lib/highlight';
// import 'highlight.js/styles/github.css';

class DemoMWCCard extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`            
      ${templatePlanned}
    `;
  }
}

customElements.define('demo-mwc-card', DemoMWCCard);