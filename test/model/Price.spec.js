/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
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
    factory(root.expect, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, SellingPartnerApiForCatalogItems) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForCatalogItems.Price();
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

  describe('Price', function() {
    it('should create an instance of Price', function() {
      // uncomment below and update the code to test Price
      //var instane = new SellingPartnerApiForCatalogItems.Price();
      //expect(instance).to.be.a(SellingPartnerApiForCatalogItems.Price);
    });

    it('should have the property amount (base name: "Amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new SellingPartnerApiForCatalogItems.Price();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "CurrencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new SellingPartnerApiForCatalogItems.Price();
      //expect(instance).to.be();
    });

  });

}));
