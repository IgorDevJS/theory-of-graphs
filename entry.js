import Vertice from './src/components/Vertice/Vertice';
import ToolPanel from './src/components/ToolPanel/ToolPanel';

// create new Vertice
const v1 = new Vertice();
v1.setValue('1');

// create new ToolPanel
const toolPanel = new ToolPanel();

function init() {
  v1.render(document.body);
  toolPanel.render(document.body);
}

document.addEventListener('DOMContentLoaded', init);
