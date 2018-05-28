import { expect } from 'chai';
import 'jsdom-global/register';

import ToolPanel from './../../src/components/ToolPanel/ToolPanel';

describe('ToolPanel class test suit', () => {
  const toolPanel = new ToolPanel();
  describe('Smoke tests', () => {
    it('should have init method', () => {
      expect(toolPanel.init).to.exist;
    });
  });
  describe('init method', () => {
    beforeEach(() => {
      toolPanel.init();
    });
    it('should have elem property', () => {
      expect(toolPanel.elem).to.exist;
    });
    it('should elem property be a div', () => {
      expect(toolPanel.elem.tagName).to.equal('DIV');
    });
    it('should have containerComponents property', () => {
      expect(toolPanel.containerComponents).to.exist;
    });
    it('should containerComponents property be a div', () => {
      expect(toolPanel.containerComponents.tagName).to.equal('DIV');
    });
    it('should have verticeSample property', () => {
      expect(toolPanel.verticeSample).to.exist;
    });
    it('should verticeSample property be a div', () => {
      expect(toolPanel.verticeSample.tagName).to.equal('DIV');
    });
    it('should containerComponents property has verticeSample as a child', () => {
      expect(toolPanel.containerComponents.children[0]).to.equal(toolPanel.verticeSample);
    });
    it('should elem property have containerComponents as a child', () => {
      expect(toolPanel.elem.children[0]).to.equal(toolPanel.containerComponents);
    });
    it('should have interactElem property', () => {
      expect(toolPanel.interactElem).to.exist;
    });
  });
});
