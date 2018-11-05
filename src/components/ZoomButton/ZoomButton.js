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

    this.increaseButton = document.createElement('div');
    this.increaseButton.classList.add('increaseButton');

    this.elem.appendChild(this.decreaseButton);
    this.elem.appendChild(this.increaseButton);
  }
}
