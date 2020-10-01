/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
    factory(root.expect, root.SellingPartnerApiForProductFees);
  }
}(this, function(expect, SellingPartnerApiForProductFees) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForProductFees.FeeDetail();
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

  describe('FeeDetail', function() {
    it('should create an instance of FeeDetail', function() {
      // uncomment below and update the code to test FeeDetail
      //var instane = new SellingPartnerApiForProductFees.FeeDetail();
      //expect(instance).to.be.a(SellingPartnerApiForProductFees.FeeDetail);
    });

    it('should have the property feeType (base name: "FeeType")', function() {
      // uncomment below and update the code to test the property feeType
      //var instane = new SellingPartnerApiForProductFees.FeeDetail();
      //expect(instance).to.be();
    });

    it('should have the property feeAmount (base name: "FeeAmount")', function() {
      // uncomment below and update the code to test the property feeAmount
      //var instane = new SellingPartnerApiForProductFees.FeeDetail();
      //expect(instance).to.be();
    });

    it('should have the property feePromotion (base name: "FeePromotion")', function() {
      // uncomment below and update the code to test the property feePromotion
      //var instane = new SellingPartnerApiForProductFees.FeeDetail();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "TaxAmount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instane = new SellingPartnerApiForProductFees.FeeDetail();
      //expect(instance).to.be();
    });

    it('should have the property finalFee (base name: "FinalFee")', function() {
      // uncomment below and update the code to test the property finalFee
      //var instane = new SellingPartnerApiForProductFees.FeeDetail();
      //expect(instance).to.be();
    });

    it('should have the property includedFeeDetailList (base name: "IncludedFeeDetailList")', function() {
      // uncomment below and update the code to test the property includedFeeDetailList
      //var instane = new SellingPartnerApiForProductFees.FeeDetail();
      //expect(instance).to.be();
    });

  });

}));