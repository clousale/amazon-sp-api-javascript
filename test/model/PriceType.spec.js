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
    instance = new SellingPartnerApiForPricing.PriceType();
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

  describe('PriceType', function() {
    it('should create an instance of PriceType', function() {
      // uncomment below and update the code to test PriceType
      //var instane = new SellingPartnerApiForPricing.PriceType();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.PriceType);
    });

    it('should have the property landedPrice (base name: "LandedPrice")', function() {
      // uncomment below and update the code to test the property landedPrice
      //var instane = new SellingPartnerApiForPricing.PriceType();
      //expect(instance).to.be();
    });

    it('should have the property listingPrice (base name: "ListingPrice")', function() {
      // uncomment below and update the code to test the property listingPrice
      //var instane = new SellingPartnerApiForPricing.PriceType();
      //expect(instance).to.be();
    });

    it('should have the property shipping (base name: "Shipping")', function() {
      // uncomment below and update the code to test the property shipping
      //var instane = new SellingPartnerApiForPricing.PriceType();
      //expect(instance).to.be();
    });

    it('should have the property points (base name: "Points")', function() {
      // uncomment below and update the code to test the property points
      //var instane = new SellingPartnerApiForPricing.PriceType();
      //expect(instance).to.be();
    });

  });

}));
