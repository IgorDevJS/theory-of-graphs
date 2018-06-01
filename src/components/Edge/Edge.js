import './Edge.scss';
import Component from '../Component/Component';

export default class Edge extends Component {
  constructor(context) {
    super();
    this.context = context;
    this.init();
  }

  get edgeWeight() {
    return this.edgeWeight;
  }

  set edgeWeight(weight) {
    this.edgeWeight = weight;
  }

  setEgdeInitialPosition(x, y) {
    this.context.beginPath();
    this.context.moveTo(x, y);
  }

  setEgdeFinalPosition(x, y) {
    this.context.lineTo(x, y);
  }


  init() {
    this.edgeWeight = 0;
  }

  draw(verticeA, verticeB) {
    this.setEgdeInitialPosition(verticeA.opts.left, verticeA.opts.top);
    this.setEgdeFinalPosition(verticeB.opts.left, verticeB.opts.top);
    this.context.strokeStyle = 'red';
    this.context.stroke();
  }
}
