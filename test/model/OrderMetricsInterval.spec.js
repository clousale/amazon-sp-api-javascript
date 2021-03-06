/**
 * Selling Partner API for Sales
 * The Selling Partner API for Sales provides APIs related to sales performance.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForSales);
  }
}(this, function(expect, SellingPartnerApiForSales) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForSales.OrderMetricsInterval();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrderMetricsInterval', function() {
    it('should create an instance of OrderMetricsInterval', function() {
      // uncomment below and update the code to test OrderMetricsInterval
      //var instane = new SellingPartnerApiForSales.OrderMetricsInterval();
      //expect(instance).to.be.a(SellingPartnerApiForSales.OrderMetricsInterval);
    });

    it('should have the property interval (base name: "interval")', function() {
      // uncomment below and update the code to test the property interval
      //var instane = new SellingPartnerApiForSales.OrderMetricsInterval();
      //expect(instance).to.be();
    });

    it('should have the property unitCount (base name: "unitCount")', function() {
      // uncomment below and update the code to test the property unitCount
      //var instane = new SellingPartnerApiForSales.OrderMetricsInterval();
      //expect(instance).to.be();
    });

    it('should have the property orderItemCount (base name: "orderItemCount")', function() {
      // uncomment below and update the code to test the property orderItemCount
      //var instane = new SellingPartnerApiForSales.OrderMetricsInterval();
      //expect(instance).to.be();
    });

    it('should have the property orderCount (base name: "orderCount")', function() {
      // uncomment below and update the code to test the property orderCount
      //var instane = new SellingPartnerApiForSales.OrderMetricsInterval();
      //expect(instance).to.be();
    });

    it('should have the property averageUnitPrice (base name: "averageUnitPrice")', function() {
      // uncomment below and update the code to test the property averageUnitPrice
      //var instane = new SellingPartnerApiForSales.OrderMetricsInterval();
      //expect(instance).to.be();
    });

    it('should have the property totalSales (base name: "totalSales")', function() {
      // uncomment below and update the code to test the property totalSales
      //var instane = new SellingPartnerApiForSales.OrderMetricsInterval();
      //expect(instance).to.be();
    });

  });

}));
