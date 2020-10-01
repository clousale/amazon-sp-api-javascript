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
    instance = new SellingPartnerApiForShipping.TrackingInformation();
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

  describe('TrackingInformation', function() {
    it('should create an instance of TrackingInformation', function() {
      // uncomment below and update the code to test TrackingInformation
      //var instane = new SellingPartnerApiForShipping.TrackingInformation();
      //expect(instance).to.be.a(SellingPartnerApiForShipping.TrackingInformation);
    });

    it('should have the property trackingId (base name: "trackingId")', function() {
      // uncomment below and update the code to test the property trackingId
      //var instane = new SellingPartnerApiForShipping.TrackingInformation();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new SellingPartnerApiForShipping.TrackingInformation();
      //expect(instance).to.be();
    });

    it('should have the property promisedDeliveryDate (base name: "promisedDeliveryDate")', function() {
      // uncomment below and update the code to test the property promisedDeliveryDate
      //var instane = new SellingPartnerApiForShipping.TrackingInformation();
      //expect(instance).to.be();
    });

    it('should have the property eventHistory (base name: "eventHistory")', function() {
      // uncomment below and update the code to test the property eventHistory
      //var instane = new SellingPartnerApiForShipping.TrackingInformation();
      //expect(instance).to.be();
    });

  });

}));