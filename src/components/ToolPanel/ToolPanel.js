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

  configResizable() {
    interact(this.elem)
      .draggable({
        onmove: window.dragMoveListener,
        restrict: {
          restriction: 'parent',
          elementRect: {
            top: 0,
            left: 0,
            bottom: 1,
            right: 1,
          },
        },
      })
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
        let y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width = `${event.rect.width}px`;
        target.style.height = `${event.rect.height}px`;

        // translate when resizing from top or left edges
        x += event.deltaRect.right;
        y += event.deltaRect.top;

        target.style.webkitTransform = `translate(${x}px,${y}px)`;
        target.style.transform = `translate(${x}px,${y}px)`;

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      });
  }
}
