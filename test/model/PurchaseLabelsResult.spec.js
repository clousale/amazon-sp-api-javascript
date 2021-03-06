/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
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
    factory(root.expect, root.SellingPartnerApiForShipping);
  }
}(this, function(expect, SellingPartnerApiForShipping) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForShipping.PurchaseLabelsResult();
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

  describe('PurchaseLabelsResult', function() {
    it('should create an instance of PurchaseLabelsResult', function() {
      // uncomment below and update the code to test PurchaseLabelsResult
      //var instane = new SellingPartnerApiForShipping.PurchaseLabelsResult();
      //expect(instance).to.be.a(SellingPartnerApiForShipping.PurchaseLabelsResult);
    });

    it('should have the property shipmentId (base name: "shipmentId")', function() {
      // uncomment below and update the code to test the property shipmentId
      //var instane = new SellingPartnerApiForShipping.PurchaseLabelsResult();
      //expect(instance).to.be();
    });

    it('should have the property clientReferenceId (base name: "clientReferenceId")', function() {
      // uncomment below and update the code to test the property clientReferenceId
      //var instane = new SellingPartnerApiForShipping.PurchaseLabelsResult();
      //expect(instance).to.be();
    });

    it('should have the property acceptedRate (base name: "acceptedRate")', function() {
      // uncomment below and update the code to test the property acceptedRate
      //var instane = new SellingPartnerApiForShipping.PurchaseLabelsResult();
      //expect(instance).to.be();
    });

    it('should have the property labelResults (base name: "labelResults")', function() {
      // uncomment below and update the code to test the property labelResults
      //var instane = new SellingPartnerApiForShipping.PurchaseLabelsResult();
      //expect(instance).to.be();
    });

  });

}));
