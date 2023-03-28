import { Component } from '../../../core/Component';
class AdminPage extends Component {
  render() {
    return `
        <h1>Admin Page</h1>`;
  }
}

customElements.define('admin-page', AdminPage);
