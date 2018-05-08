import MainContainer from './src/components/MainContainer/MainContainer';

const mainContainer = new MainContainer();

function init() {
  mainContainer.render(document.body);
}

document.addEventListener('DOMContentLoaded', init);
