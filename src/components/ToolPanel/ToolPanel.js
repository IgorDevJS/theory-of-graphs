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
        },

        // keep the edges inside the parent
        restrictEdges: {
          outer: 'parent',
          endOnly: true,
        },

        // minimum size
        restrictSize: {
          min: {
            width: 150,
            height: '100%',
          },
          max: {
            width: 300,
            height: '100%',
          },
        },

        inertia: true,
      })
      .on('resizemove', (event) => {
        const { target } = event;

        // update the element's style
        target.style.width = `${event.rect.width}px`;
      })
      .on('tap', () => {
        this.changeSide(this.inLeft ? 'right' : 'left');
      });
  }
}
