import './SwitchButton.scss';
import Component from '../Component/Component';

export default class SwitchButton extends Component {
  constructor(opts) {
    super();

    this.opts = opts || {};
    // get dynamic id
    if (!this.opts.id) this.opts.id = this.opts.title || 'shadow';

    this.init();
  }

  get checked() {
    return this.input.checked;
  }

  set checked(value) {
    this.input.checked = value;
  }

  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('SwitchButton');

    // create title if passed param
    if (this.opts && this.opts.title) {
      this.title = document.createElement('p');
      this.title.innerText = this.opts.title;
      this.elem.appendChild(this.title);
    }

    // create element input
    this.input = document.createElement('input');
    this.input.id = `switch-${this.opts.id}`;
    this.input.classList.add('switch');
    this.input.classList.add('switch--shadow');
    this.input.type = 'checkbox';
    this.elem.appendChild(this.input);

    // create element label
    this.label = document.createElement('label');
    this.label.htmlFor = `switch-${this.opts.id}`;
    this.elem.appendChild(this.label);
  }
}
