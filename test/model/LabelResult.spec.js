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
    instance = new SellingPartnerApiForShipping.LabelResult();
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

  describe('LabelResult', function() {
    it('should create an instance of LabelResult', function() {
      // uncomment below and update the code to test LabelResult
      //var instane = new SellingPartnerApiForShipping.LabelResult();
      //expect(instance).to.be.a(SellingPartnerApiForShipping.LabelResult);
    });

    it('should have the property containerReferenceId (base name: "containerReferenceId")', function() {
      // uncomment below and update the code to test the property containerReferenceId
      //var instane = new SellingPartnerApiForShipping.LabelResult();
      //expect(instance).to.be();
    });

    it('should have the property trackingId (base name: "trackingId")', function() {
      // uncomment below and update the code to test the property trackingId
      //var instane = new SellingPartnerApiForShipping.LabelResult();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new SellingPartnerApiForShipping.LabelResult();
      //expect(instance).to.be();
    });

  });

}));