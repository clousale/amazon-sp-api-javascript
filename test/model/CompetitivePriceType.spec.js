/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
    factory(root.expect, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, SellingPartnerApiForPricing) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForPricing.CompetitivePriceType();
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

  describe('CompetitivePriceType', function() {
    it('should create an instance of CompetitivePriceType', function() {
      // uncomment below and update the code to test CompetitivePriceType
      //var instane = new SellingPartnerApiForPricing.CompetitivePriceType();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.CompetitivePriceType);
    });

    it('should have the property competitivePriceId (base name: "CompetitivePriceId")', function() {
      // uncomment below and update the code to test the property competitivePriceId
      //var instane = new SellingPartnerApiForPricing.CompetitivePriceType();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "Price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new SellingPartnerApiForPricing.CompetitivePriceType();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instane = new SellingPartnerApiForPricing.CompetitivePriceType();
      //expect(instance).to.be();
    });

    it('should have the property subcondition (base name: "subcondition")', function() {
      // uncomment below and update the code to test the property subcondition
      //var instane = new SellingPartnerApiForPricing.CompetitivePriceType();
      //expect(instance).to.be();
    });

    it('should have the property belongsToRequester (base name: "belongsToRequester")', function() {
      // uncomment below and update the code to test the property belongsToRequester
      //var instane = new SellingPartnerApiForPricing.CompetitivePriceType();
      //expect(instance).to.be();
    });

  });

}));
