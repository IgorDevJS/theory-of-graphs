import './ZoomButton.scss';

import Component from '../Component/Component';

export default class ZoomButton extends Component {
  constructor(opts) {
    super();
    this.opts = typeof opts === 'undefined' ? {} : opts;
    this.init();
  }

  // init component
  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ZoomButton');

    this.decreaseButton = document.createElement('div');
    this.decreaseButton.classList.add('decreaseButton');
    this.decreaseButton.innerHTML = '<div class="iconZoom"><span class="zoom-inner"></span></div>';

    this.increaseButton = document.createElement('div');
    this.increaseButton.classList.add('increaseButton');
    this.increaseButton.innerHTML = '<div class="iconZoom"><span class="zoom-inner"></span></div>';

    this.bindEvents();

    this.elem.appendChild(this.decreaseButton);
    this.elem.appendChild(this.increaseButton);
  }

  bindEvents() {
    this.decreaseButton.addEventListener('click', () => {
      if (this.opts.callback) this.opts.callback(false);
    });
    this.increaseButton.addEventListener('click', () => {
      if (this.opts.callback) this.opts.callback(true);
    });

    // register dblclick event to stop propagation into elements
    function dblclickFunction(e) {
      e.stopPropagation();
      return false;
    }
    this.decreaseButton.addEventListener('dblclick', dblclickFunction);
    this.increaseButton.addEventListener('dblclick', dblclickFunction);
  }
}
