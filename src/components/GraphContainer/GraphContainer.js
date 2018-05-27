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
    this.manageData = new ManageData();
  }

  configDropZone() {
    interact(this.elem).dropzone({
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

          // reset vertice sample
          e.relatedTarget.style.transform = 'translate(0px, 0px)';
          e.relatedTarget.setAttribute('data-x', 0);
          e.relatedTarget.setAttribute('data-y', 0);

          // create new Vertice
          const v1 = new Vertice({ top: rect.top, left: rect.left });
          v1.value = '1';
          this.manageData.pushVerticeData(v1);
          v1.render(this.elem);
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
