import { expect } from 'chai';
import 'jsdom-global/register';

import MainContainer from './../../src/components/MainContainer/MainContainer';
import GraphContainer from './../../src/components/GraphContainer/GraphContainer';
import ToolPanel from './../../src/components/ToolPanel/ToolPanel';

describe('MainContainer class test suit', () => {
  const mainContainer = new MainContainer();
  describe('Smoke tests', () => {
    it('should have init method', () => {
      expect(mainContainer.init).to.exist;
    });
  });
  describe('init method', () => {
    beforeEach(() => {
      mainContainer.init();
    });
    it('should have elem property', () => {
      expect(mainContainer.elem).to.exist;
    });
    it('should elem property be a div', () => {
      expect(mainContainer.elem.tagName).to.equal('DIV');
    });
    it('should render a GraphContainer instance', () => {
      const graphContainer = new GraphContainer();
      expect(mainContainer).contains(graphContainer.elem);
    });
    it('should render a ToolPanel instance', () => {
      const toolPanel = new ToolPanel();
      expect(mainContainer).contains(toolPanel.elem);
    });
  });
});
