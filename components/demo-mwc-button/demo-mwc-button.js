import { LitElement, html, css } from 'lit-element';
import '@material/mwc-button';


class DemoMWCButton extends LitElement {
  static get styles() {
    return [
      css`
        .custom {
          --mdc-theme-primary: #287E94;
          --mdc-theme-on-primary: white;
        }
      `
    ]
  }

  render() {
    return html`            
      <h2>Standard</h2>
      <p><mwc-button label="standard" class="custom"></mwc-button></p>
      <p><mwc-button label="standard" icon="code" class="custom"></mwc-button></p>
      <br />

      <h2>Outlined</h2>
      <p><mwc-button outlined label="outlined" class="custom"></mwc-button></p>
      <p><mwc-button outlined label="outlined" icon="code" class="custom"></mwc-button></p>
      <br />

      <h2>Unelevated</h2>
      <p><mwc-button unelevated label="unelevated" class="custom"></mwc-button class="custom"></p>
      <p><mwc-button unelevated label="unelevated" icon="code" class="custom"></mwc-button></p>
      <br />

      <h2>Trailing Icon</h2>
      <mwc-button label="trailing icon" icon="code" class="custom" trailingIcon></mwc-button>
      <br />
      <br/>

      <h2>Disabled</h2>
      <p><mwc-button disabled label="disabled" class="custom"></mwc-button></p>
      <p><mwc-button disabled label="disabled" icon="code" class="custom"></mwc-button></p>
      <br />


    `;
  }
}

customElements.define('demo-mwc-button', DemoMWCButton);