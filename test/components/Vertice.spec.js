import chai, { expect } from 'chai';
import 'jsdom-global/register';

import Vertice from './../../src/components/Vertice';

describe('Vertice', () => {
  const vertice = new Vertice();
  describe('Smoke tests', () => {
    it('should have init method', () => {
      expect(vertice.init).to.exist;
    });
  });
});
