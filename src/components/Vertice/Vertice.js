import './Vertice.scss';

import Component from '../Component/Component';

export default class Vertice extends Component {
  // create elem to show in the panel to listener hold event
  // call callback on hold event to create new component
  static verticeSample(callback) {
    const container = document.createElement('div');
    container.classList.add('container-vertice-sample');
    const elem = Vertice.createElem();
    container.appendChild(elem);
    const p = document.createElement('p');
    p.innerText = 'Vértice';
    container.appendChild(p);
    return container;
  }

  // create default Vertice element
  static createElem() {
    const elem = document.createElement('div');
    elem.classList.add('Vertice');
    return elem;
  }

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
    // create main elem using static method
    this.elem = Vertice.createElem();
    this.input = document.createElement('input');
    this.elem.appendChild(this.input);
  }
}
