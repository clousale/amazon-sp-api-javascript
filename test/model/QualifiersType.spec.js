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
    instance = new SellingPartnerApiForCatalogItems.QualifiersType();
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

  describe('QualifiersType', function() {
    it('should create an instance of QualifiersType', function() {
      // uncomment below and update the code to test QualifiersType
      //var instane = new SellingPartnerApiForCatalogItems.QualifiersType();
      //expect(instance).to.be.a(SellingPartnerApiForCatalogItems.QualifiersType);
    });

    it('should have the property itemCondition (base name: "ItemCondition")', function() {
      // uncomment below and update the code to test the property itemCondition
      //var instane = new SellingPartnerApiForCatalogItems.QualifiersType();
      //expect(instance).to.be();
    });

    it('should have the property itemSubcondition (base name: "ItemSubcondition")', function() {
      // uncomment below and update the code to test the property itemSubcondition
      //var instane = new SellingPartnerApiForCatalogItems.QualifiersType();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentChannel (base name: "FulfillmentChannel")', function() {
      // uncomment below and update the code to test the property fulfillmentChannel
      //var instane = new SellingPartnerApiForCatalogItems.QualifiersType();
      //expect(instance).to.be();
    });

    it('should have the property shipsDomestically (base name: "ShipsDomestically")', function() {
      // uncomment below and update the code to test the property shipsDomestically
      //var instane = new SellingPartnerApiForCatalogItems.QualifiersType();
      //expect(instance).to.be();
    });

    it('should have the property shippingTime (base name: "ShippingTime")', function() {
      // uncomment below and update the code to test the property shippingTime
      //var instane = new SellingPartnerApiForCatalogItems.QualifiersType();
      //expect(instance).to.be();
    });

    it('should have the property sellerPositiveFeedbackRating (base name: "SellerPositiveFeedbackRating")', function() {
      // uncomment below and update the code to test the property sellerPositiveFeedbackRating
      //var instane = new SellingPartnerApiForCatalogItems.QualifiersType();
      //expect(instance).to.be();
    });

  });

}));
