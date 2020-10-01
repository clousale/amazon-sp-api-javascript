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
    instance = new SellingPartnerApiForPricing.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instane = new SellingPartnerApiForPricing.Product();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.Product);
    });

    it('should have the property identifiers (base name: "Identifiers")', function() {
      // uncomment below and update the code to test the property identifiers
      //var instane = new SellingPartnerApiForPricing.Product();
      //expect(instance).to.be();
    });

    it('should have the property attributeSets (base name: "AttributeSets")', function() {
      // uncomment below and update the code to test the property attributeSets
      //var instane = new SellingPartnerApiForPricing.Product();
      //expect(instance).to.be();
    });

    it('should have the property relationships (base name: "Relationships")', function() {
      // uncomment below and update the code to test the property relationships
      //var instane = new SellingPartnerApiForPricing.Product();
      //expect(instance).to.be();
    });

    it('should have the property competitivePricing (base name: "CompetitivePricing")', function() {
      // uncomment below and update the code to test the property competitivePricing
      //var instane = new SellingPartnerApiForPricing.Product();
      //expect(instance).to.be();
    });

    it('should have the property salesRankings (base name: "SalesRankings")', function() {
      // uncomment below and update the code to test the property salesRankings
      //var instane = new SellingPartnerApiForPricing.Product();
      //expect(instance).to.be();
    });

    it('should have the property offers (base name: "Offers")', function() {
      // uncomment below and update the code to test the property offers
      //var instane = new SellingPartnerApiForPricing.Product();
      //expect(instance).to.be();
    });

  });

}));
