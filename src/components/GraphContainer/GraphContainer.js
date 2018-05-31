import interact from 'interactjs';

import './GraphContainer.scss';
import Component from '../Component/Component';
import Vertice from '../Vertice/Vertice';
import ManageData from '../ManageData/ManageData';

export default class GraphContainer extends Component {
  constructor() {
    super();
    this.init();
    this.configDropZone();
  }

  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('GraphContainer');

    this.content = document.createElement('div');
    this.content.classList.add('content');
    this.elem.appendChild(this.content);

    this.manageData = new ManageData();
  }

  configDropZone() {
    interact(this.content).dropzone({
      // only accept elements matching this CSS selector
      accept: '.Vertice, .Aresta',
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75,

      // listen for drop related events:

      ondropactivate(event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
        event.relatedTarget.classList.add('drop-active');
      },
      ondragenter(event) {
        const draggableElement = event.relatedTarget;
        const dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
      },
      ondragleave(event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
      },
      ondrop: (event) => {
        const e = event;
        // case sample
        if (e.relatedTarget.getAttribute('is-sample')) {
          // get dimension of vertice sample
          const rect = e.relatedTarget.getBoundingClientRect();

          const rectContent = this.content.getBoundingClientRect();

          // create new Vertice
          const vertice = new Vertice({
            top: rect.top - rectContent.top,
            left: rect.left - rectContent.left,
          });
          this.manageData.pushVerticeData(vertice);
          vertice.render(this.content);
          vertice.focus();
        }
      },
      ondropdeactivate(event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('drop-active');
      },
    });
  }
}
