import './Vertice.scss';

import Component from '../Component/Component';

export default class Vertice extends Component {
  constructor() {
    super();
    this.init();
  }

  // set componente value
  setValue(value) {
    this.input.value = value;
  }

  // init component
  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('Vertice');
    this.input = document.createElement('input');
    this.elem.appendChild(this.input);
  }
}
