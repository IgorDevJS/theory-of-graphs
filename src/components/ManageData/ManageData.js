import VerticePanel from '../VerticePanel/VerticePanel';

let instance = null;

export default class ManageData {
  constructor() {
    // construct a singleton
    if (instance) return instance;
    instance = this;

    // get instance of VerticePanel
    this.verticePanel = new VerticePanel();

    this.init();
  }

  init() {
    this.data = [];
  }

  // push vertice element into array data
  pushVerticeData(vertice) {
    this.data.push({
      name: '',
      vertice,
      value: vertice.value,
    });
  }

  // get Vertice data passing the Vertice instance
  getVerticeData(vertice) {
    return this.data.find((v) => {
      if (v.vertice === vertice) return v;
      return false;
    });
  }

  // show data of the Vertice passed in VerticePanel
  showDataVertice(vertice) {
    this.verticePanel.showData(this.getVerticeData(vertice));
  }

  // set Vertice data value passing the Vertice instance and value
  setVerticeData(vertice, value) {
    this.data.some((v) => {
      const v1 = v;
      if (v1.vertice === vertice) {
        v1.value = value;
        return true;
      }
      return false;
    });
  }
}
