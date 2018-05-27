import './VerticePanel.scss';
import Component from '../Component/Component';

let instance = null;

export default class VerticePanel extends Component {
  constructor() {
    super();

    // construct a singleton
    if (instance) return instance;
    instance = this;

    this.init();
  }

  init() {
    // create main element
    this.elem = document.createElement('div');
    this.elem.classList.add('VerticePanel');

    this.dataContainer = document.createElement('div');
    this.dataContainer.classList.add('data-container');

    // create name container
    this.nameContainer = document.createElement('div');
    this.nameContainer.classList.add('sub-container');
    this.nameContainer.innerHTML = '<p>Nome: </p>';
    this.nameInput = document.createElement('input');
    this.nameContainer.appendChild(this.nameInput);
    this.dataContainer.appendChild(this.nameContainer);

    // create value container
    this.valueContainer = document.createElement('div');
    this.valueContainer.classList.add('sub-container');
    this.valueContainer.innerHTML = '<p>Valor: </p>';
    this.valueInput = document.createElement('input');
    this.valueContainer.appendChild(this.valueInput);
    this.dataContainer.appendChild(this.valueContainer);

    this.elem.appendChild(this.dataContainer);

    // element init hidden
    this.hidden();

    // config component resizing
    super.configResizable({ right: true, minWidth: 100, maxWidth: 150 });
  }

  showData(data) {
    this.dataVertice = data;
    this.valueInput.value = this.dataVertice.value;
    console.log(this.dataVertice);

    this.show();
  }

  show() {
    if (this.elem.classList.contains('hidden')) this.elem.classList.remove('hidden');
  }

  hidden() {
    if (!this.elem.classList.contains('hidden')) this.elem.classList.add('hidden');
  }
}
