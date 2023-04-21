import { Component } from '../../../core/Component';
import AccordionJS from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

class Accordion extends Component {
  static get observedAttributes() {
    return ['accordion-items'];
  }
  initAccordion() {
    new AccordionJS('.accordion-container', {
      duration: 400,
      showMultiple: true,
    });
  }

  componentDidMount() {
    this.initAccordion();
  }
  render() {
    const items = JSON.parse(this.props['accordion-items']);
    return `
    <div class="accordion-container">
    ${items
      .map((item) => {
        return `
        <div class="ac">
        ${item}</div>`;
      })
      .join('')}
     </div>
`;
  }
}

customElements.define('it-accordion', Accordion);
