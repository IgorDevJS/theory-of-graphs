import interact from 'interactjs';

import './ToolPanel.scss';
import Component from '../Component/Component';

export default class ToolPanel extends Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ToolPanel');
    // config component resizing
    this.configResizable();
  }

  changeSide(side) {
    this.inLeft = side === 'left';
    this.interactElem.options.resize.edges.left = !this.inLeft;
    this.interactElem.options.resize.edges.right = this.inLeft;
    if (this.inLeft) this.elem.classList.add('in-left');
    else this.elem.classList.remove('in-left');
  }

  configResizable() {
    this.interactElem = interact(this.elem)
      .resizable({
        // resize from all edges and corners
        edges: {
          left: true,
          right: false,
          bottom: false,
          top: false,
        },

        // keep the edges inside the parent
        restrictEdges: {
          outer: 'parent',
          endOnly: true,
        },

        // minimum size
        restrictSize: {
          min: {
            width: 300,
            height: '100%',
          },
        },

        inertia: true,
      })
      .on('resizemove', (event) => {
        const { target } = event;
        let x = (parseFloat(target.getAttribute('data-x')) || 0);

        // update the element's style
        target.style.width = `${event.rect.width}px`;

        // translate when resizing from top or left or rigth edges
        x += event.deltaRect[this.inLeft ? 'left' : 'right'];

        target.style.webkitTransform = `translate(${x}px,0px)`;
        target.style.transform = `translate(${x}px,0px)`;

        target.setAttribute('data-x', x);
      })
      .on('tap', () => {
        this.changeSide(this.inLeft ? 'right' : 'left');
      });
  }
}
