export default class Vertice {
  constructor() {
    this.init();
  }
  // init component
  init() {
    this.elem = document.createElement('div');
  }

  // set componente value
  setValue(value) {
    this.elem.innerHTML = value;
  }

  render(container) {
    container.appendChild(this.elem);
  }
}
