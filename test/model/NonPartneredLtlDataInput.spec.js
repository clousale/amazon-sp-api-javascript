/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
 *
 * OpenAPI spec version: v0
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
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFulfillmentInbound.NonPartneredLtlDataInput();
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

  describe('NonPartneredLtlDataInput', function() {
    it('should create an instance of NonPartneredLtlDataInput', function() {
      // uncomment below and update the code to test NonPartneredLtlDataInput
      //var instane = new SellingPartnerApiForFulfillmentInbound.NonPartneredLtlDataInput();
      //expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.NonPartneredLtlDataInput);
    });

    it('should have the property carrierName (base name: "CarrierName")', function() {
      // uncomment below and update the code to test the property carrierName
      //var instane = new SellingPartnerApiForFulfillmentInbound.NonPartneredLtlDataInput();
      //expect(instance).to.be();
    });

    it('should have the property proNumber (base name: "ProNumber")', function() {
      // uncomment below and update the code to test the property proNumber
      //var instane = new SellingPartnerApiForFulfillmentInbound.NonPartneredLtlDataInput();
      //expect(instance).to.be();
    });

  });

}));
