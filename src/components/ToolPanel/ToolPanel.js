import './ToolPanel.scss';
import Component from '../Component/Component';
import Vertice from '../Vertice/Vertice';

export default class ToolPanel extends Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    // create main element
    this.elem = document.createElement('div');
    this.elem.classList.add('ToolPanel');

    // create container for Components
    this.containerComponents = document.createElement('div');
    this.containerComponents.classList.add('container-components');

    // create Vertice to show on the panel
    this.verticeSample = Vertice.verticeSample();

    // append verticeSample
    this.containerComponents.appendChild(this.verticeSample);

    // append container of components
    this.elem.appendChild(this.containerComponents);

    // config component resizing
    super.configResizable();
  }

  changeSide(side) {
    this.inLeft = side === 'left';
    this.interactElem.options.resize.edges.left = !this.inLeft;
    this.interactElem.options.resize.edges.right = this.inLeft;
    if (this.inLeft) this.elem.classList.add('in-left');
    else this.elem.classList.remove('in-left');
  }
}
