import interact from 'interactjs';

import './Vertice.scss';
import Component from '../Component/Component';
import ManageData from '../ManageData/ManageData';

export default class Vertice extends Component {
  // create elem to show in the panel to listener hold event
  // call callback on hold event to create new component
  static verticeSample() {
    const container = document.createElement('div');
    container.classList.add('container-vertice-sample');
    const elem = Vertice.createElem();
    elem.classList.add('Vertice-Sample');
    elem.setAttribute('is-sample', 1);
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
    Vertice.configDrag(elem);
    return elem;
  }

  static configDrag(elem) {
    // target elements with the "draggable" class
    interact(elem)
      .draggable({
        // enable inertial throwing
        inertia: false,
        // keep the element within the area of it's parent
        restrict: {
          endOnly: true,
          elementRect: {
            top: 0,
            left: 0,
            bottom: 1,
            right: 1,
          },
        },
        // disable autoScroll
        autoScroll: false,

        // call this function on every dragmove event
        onmove(event) {
          const { target } = event;
          // keep the dragged position in the data-x/data-y attributes
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          // translate the element
          target.style.webkitTransform = `translate(${x}px, ${y}px)`;
          target.style.transform = `translate(${x}px, ${y}px)`;

          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        },
        // call this function on every dragend event
        onend(event) {
          const textEl = event.target.querySelector('p');

          if (textEl) {
            textEl.textContent = `moved a distance of ${(Math.sqrt(((event.pageX - event.x0) ** 2) + ((event.pageY - event.y0) ** 2))).toFixed(2)}px`;
          }
        },
      });
  }

  constructor(opts) {
    super();
    this.opts = opts;
    this.init();
  }

  get value() {
    return this.input.value;
  }

  // set componente value
  set value(value) {
    let v = value;
    if (!v || typeof v !== 'string') v = '';
    this.input.value = v;
  }

  configTap() {
    interact(this.elem)
      .on('tap', () => {
        console.log(this.manageData.getVerticeData(this));
      });
  }

  // init component
  init() {
    // create main elem using static method
    this.elem = Vertice.createElem();
    if (!this.opts.top) this.opts.top = 0;
    if (!this.opts.left) this.opts.left = 0;
    this.elem.style.top = `${this.opts.top}px`;
    this.elem.style.left = `${this.opts.left}px`;
    this.input = document.createElement('input');
    this.elem.appendChild(this.input);
    this.manageData = new ManageData();
    this.configTap();
    this.bindEvents();
  }

  // bind events
  bindEvents() {
    this.input.addEventListener('input', (e) => {
      // set new value in array of data
      this.manageData.setVerticeData(this, e.target.value);
    });
  }
}
