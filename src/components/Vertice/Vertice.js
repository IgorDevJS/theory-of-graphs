import './Vertice.scss';

export default class Vertice {
  constructor() {
    this.init();
  }

  // init component
  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('Vertice');
    this.input = document.createElement('input');
    this.elem.appendChild(this.input);
  }

  // set componente value
  setValue(value) {
    this.input.value = value;
  }

  // render element in container received as param
  render(container) {
    container.appendChild(this.elem);
  }
}
