import { expect } from 'chai';
import 'jsdom-global/register';

import ManageData from './../../src/components/ManageData/ManageData';
import Vertice from './../../src/components/Vertice/Vertice';

describe('ManageData class test suit', () => {
  const manageData = new ManageData();
  describe('Smoke tests', () => {
    it('should have init method', () => {
      expect(manageData.init).to.exist;
    });
  });
  describe('init method', () => {
    beforeEach(() => {
      manageData.init();
    });
    it('should have data property', () => {
      expect(manageData.data).to.exist;
    });
    it('should data property be an array', () => {
      expect(manageData.data).to.be.an('Array');
    });
  });

  describe('pushVerticeData method', () => {
    it('should have pushVerticeData method', () => {
      expect(manageData.pushVerticeData).to.exist;
    });
    it('should push an object in data property', () => {
      const vertice = new Vertice();
      const dataMock = {
        name: '',
        vertice,
        value: vertice.value,
      };
      manageData.pushVerticeData(dataMock);
      expect(manageData.data).to.be.an('Array');
      expect(manageData.data).length.greaterThan(0);
      expect(manageData.data[0].vertice).to.equal(dataMock);
    });
  });
});
