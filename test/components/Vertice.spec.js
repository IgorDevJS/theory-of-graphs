import chai, { expect } from 'chai';
import 'jsdom-global/register';

import Vertice from './../../src/components/Vertice/Vertice';

describe('Vertice class test suit', () => {
  const vertice = new Vertice();
  describe('Smoke tests', () => {
    it('should have init method', () => {
      expect(vertice.init).to.exist;
    });
  });
  
  describe('init method', () => {
    beforeEach(() => {
      vertice.init();
    });
    it('should have elem property when init method is called', () => {
      expect(vertice.elem).to.exist;
    });
    it('should elem property be a div', () => {
      expect(vertice.elem.tagName).to.equal("DIV");
    });
    it('should elem property have an input child', () => {
      expect(vertice.elem.children[0].tagName).to.equal("INPUT");
    });
  });
});  


