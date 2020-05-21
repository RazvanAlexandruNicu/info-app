import { LitElement, html, css } from 'lit-element';

class iaTime extends LitElement {
  static get styles() {
    return css`
      section {
        background: #ddd;
        box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.2);
        margin-bottom: 2rem;
        padding: 1rem;
      }
    `;
  }

  static get properties() {
    return {
      time: { type: String },
    };
  }

  constructor() {
    super();
    this.time = new Date().toLocaleTimeString('ro');
    setInterval(() => {
      this.time = new Date().toLocaleTimeString('ro');
    });
  }
  render() {
    return html`
      <section>
        <h1>Current time</h1>
        <p>
          <strong>${this.time}</strong>
        </p>
      </section>
    `;
  }
}

window.customElements.define('ia-time', iaTime);
