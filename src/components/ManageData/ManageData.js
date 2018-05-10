let instance = null;

export default class ManageData {
  constructor() {
    // construct a singleton
    if (instance) return instance;
    instance = this;

    this.init();
  }

  init() {
    this.data = [];
    window.data = this.data;
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
}
