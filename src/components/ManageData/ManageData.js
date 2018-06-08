import VerticePanel from '../VerticePanel/VerticePanel';
import Vertice from '../Vertice/Vertice';

let instance = null;

export default class ManageData {
  /**
   * Set currentZoom
   */
  set currentZoom(zoom) {
    this.data.zoom.currentZoom = zoom;
  }

  /**
   * Get currentZoom
   */
  get currentZoom() {
    return this.data.zoom.currentZoom;
  }

  constructor() {
    // construct a singleton
    if (instance) return instance;
    instance = this;

    // get instance of VerticePanel
    this.verticePanel = new VerticePanel();

    this.init();
  }

  /**
   * Init data
   */
  init() {
    this.data = {
      zoom: {
        currentZoom: 1,
      },
      vertices: [],
    };
  }

  /**
   * Push vertice element into array data
   * @param {Vertice} vertice
   * A instance of vertice
   */
  pushVerticeData(vertice) {
    this.data.vertices.push({
      name: '',
      vertice,
      value: vertice.value,
      isInitial: false,
      isFinal: false,
    });
  }

  /**
   * Get Vertice data passing the Vertice instance
   * @param {Vertice} vertice
   * A instance of vertice
   * @returns {(Object|Boolean)} Return data object or false
   */
  getVerticeData(vertice) {
    return this.data.vertices.find((v) => {
      if (v.vertice === vertice) return v;
      return false;
    });
  }

  /**
   * Show data of the Vertice passed in VerticePanel
   * @param {Vertice} vertice
   * A instance of vertice
   */
  showDataVertice(vertice) {
    this.verticePanel.showData(this.getVerticeData(vertice));
  }

  /**
   * Set Vertice data value passing the Vertice instance and value
   * @param {Vertice} vertice
   * A instance of vertice
   * @param {String} f
   * Name of field for change
   * @param {(String|Number)} value
   * Value to enter in the field
   * @param {Boolean} verticeCaller
   * True to indicate that it was the vertice that called the function
   */
  setVerticeData(vertice, f, value, verticeCaller) {
    const field = f || 'value';
    this.data.vertices.some((v) => {
      const v1 = v;
      if (v1.vertice === vertice) {
        v1[field] = value;
        // update data into verticePanel
        if (verticeCaller) this.verticePanel.showData(v1);
        else v1.vertice[field] = value;
        return true;
      }
      return false;
    });
  }
}
