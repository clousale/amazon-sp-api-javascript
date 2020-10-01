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
    instance = new SellingPartnerApiForPricing.CompetitivePricingType();
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

  describe('CompetitivePricingType', function() {
    it('should create an instance of CompetitivePricingType', function() {
      // uncomment below and update the code to test CompetitivePricingType
      //var instane = new SellingPartnerApiForPricing.CompetitivePricingType();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.CompetitivePricingType);
    });

    it('should have the property competitivePrices (base name: "CompetitivePrices")', function() {
      // uncomment below and update the code to test the property competitivePrices
      //var instane = new SellingPartnerApiForPricing.CompetitivePricingType();
      //expect(instance).to.be();
    });

    it('should have the property numberOfOfferListings (base name: "NumberOfOfferListings")', function() {
      // uncomment below and update the code to test the property numberOfOfferListings
      //var instane = new SellingPartnerApiForPricing.CompetitivePricingType();
      //expect(instance).to.be();
    });

    it('should have the property tradeInValue (base name: "TradeInValue")', function() {
      // uncomment below and update the code to test the property tradeInValue
      //var instane = new SellingPartnerApiForPricing.CompetitivePricingType();
      //expect(instance).to.be();
    });

  });

}));
