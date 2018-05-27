import './MainContainer.scss';
import Component from '../Component/Component';
import GraphContainer from '../GraphContainer/GraphContainer';
import ToolPanel from '../ToolPanel/ToolPanel';
import VerticePanel from '../VerticePanel/VerticePanel';
import ManageData from '../ManageData/ManageData';

export default class MainContainer extends Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('MainContainer');

    // create new VerticePanel
    const verticePanel = new VerticePanel();
    verticePanel.render(this.elem);
    this.manageData = new ManageData();
    this.manageData.verticePanel = verticePanel;

    // create new GraphContainer
    const graphContainer = new GraphContainer();
    graphContainer.render(this.elem);

    // create new ToolPanel
    const toolPanel = new ToolPanel();
    toolPanel.render(this.elem);
  }
}
