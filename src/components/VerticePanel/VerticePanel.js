import './VerticePanel.scss';
import Component from '../Component/Component';

export default class VerticePanel extends Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    // create main element
    this.elem = document.createElement('div');
    this.elem.classList.add('VerticePanel');
    // element init hidden
    this.hidden();

    // config component resizing
    super.configResizable({ right: true, minWidth: 100, maxWidth: 150 });
  }

  show() {
    this.elem.classList.remove('hidden');
  }

  hidden() {
    this.elem.classList.add('hidden');
  }
}
