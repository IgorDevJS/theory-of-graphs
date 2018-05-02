import Vertice from './src/components/Vertice/Vertice';

const v1 = new Vertice();
v1.setValue('1');

function init() {
  v1.render(document.body);
}

document.addEventListener('DOMContentLoaded', init);
