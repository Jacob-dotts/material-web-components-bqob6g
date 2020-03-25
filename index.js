import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import '@vaadin/vaadin-tabs';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

import '@material/mwc-drawer';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-tab';

import './components/demo-mwc-button/demo-mwc-button';
import './components/demo-mwc-bottom-app-bar/demo-mwc-bottom-app-bar';
import './components/demo-mwc-card/demo-mwc-card';


class MWCDemos extends LitElement {
  static get styles() {
    return [
      css`
        main {
          width: 100%;
          padding: 2rem;
          box-sizing: border-box;
        }
      `,
    ];
  }

  static get properties() {
    return {
      activeTab: { type: String },
      tabs: { type: Array },
      smallScreen: { type: Boolean },
      openDrawer: { type: Boolean }
    }
  }

  constructor(){
    super();
    this.activeTab = location.pathname === '/' ? 'demo-mwc-button' : location.pathname.replace('/', '');
    this.tabs = ['mwc-buttons', 'mwc-bottom-app-bar', 'mwc-card'];
    this.openDrawer = false;

    installMediaQueryWatcher(`(min-width: 600px)`, (matches) => {
      this.smallScreen = !matches;
    });
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('main'));
    router.setRoutes([
      {path: '/',     component: 'demo-mwc-button'},
      {path: '/mwc-button',  component: 'demo-mwc-button'},
      {path: '/mwc-bottom-app-bar',  component: 'demo-mwc-bottom-app-bar'},
      {path: '/mwc-card',  component: 'demo-mwc-card'},
      {path: '(.*)', redirect: '/', action: () => {
        this.activeTab = 'mwc-button';
        }
      }
    ]);
  }

  render() {
    return html`

      <mwc-drawer hasHeader type="modal" ?open=${this.openDrawer}>
        <span slot="title">Material Components</span>
        <span slot="subtitle">Select an element</span>
        <section>
          <vaadin-tabs 
            orientation="vertical" 
            selected=${this.tabs.indexOf(this.activeTab)} 
            theme="${this.smallScreen ? '' : 'centered'}">
            <vaadin-tab @click=${() => this.switchRoute('mwc-button')}>Material Design Buttons</vaadin-tab>
            <vaadin-tab @click=${() => this.switchRoute('mwc-bottom-app-bar')}>mwc-bottom-app-bar</vaadin-tab>
            <vaadin-tab @click=${() => this.switchRoute('mwc-card')}>mwc-card</vaadin-tab>
          </vaadin-tabs>
        </section>
        <section slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu" @click=${() => this.toggleHamburger()}></mwc-icon-button>
            <header slot="title">${this.activeTab}</header>
          </mwc-top-app-bar>
          <main></main>
        </section>
      </mwc-drawer>
    `;
  }

  switchRoute(route) {
    this.activeTab = route;
    Router.go(`/${route}`); 
    this.openDrawer = false;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  toggleHamburger() {
    this.openDrawer = !this.openDrawer;
  }
}

customElements.define('mwc-demos', MWCDemos);