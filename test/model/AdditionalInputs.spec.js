/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForMerchantFulfillment.AdditionalInputs();
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

  describe('AdditionalInputs', function() {
    it('should create an instance of AdditionalInputs', function() {
      // uncomment below and update the code to test AdditionalInputs
      //var instane = new SellingPartnerApiForMerchantFulfillment.AdditionalInputs();
      //expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.AdditionalInputs);
    });

    it('should have the property additionalInputFieldName (base name: "AdditionalInputFieldName")', function() {
      // uncomment below and update the code to test the property additionalInputFieldName
      //var instane = new SellingPartnerApiForMerchantFulfillment.AdditionalInputs();
      //expect(instance).to.be();
    });

    it('should have the property sellerInputDefinition (base name: "SellerInputDefinition")', function() {
      // uncomment below and update the code to test the property sellerInputDefinition
      //var instane = new SellingPartnerApiForMerchantFulfillment.AdditionalInputs();
      //expect(instance).to.be();
    });

  });

}));
