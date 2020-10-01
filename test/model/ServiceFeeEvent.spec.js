/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFinances.ServiceFeeEvent();
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

  describe('ServiceFeeEvent', function() {
    it('should create an instance of ServiceFeeEvent', function() {
      // uncomment below and update the code to test ServiceFeeEvent
      //var instane = new SellingPartnerApiForFinances.ServiceFeeEvent();
      //expect(instance).to.be.a(SellingPartnerApiForFinances.ServiceFeeEvent);
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // uncomment below and update the code to test the property amazonOrderId
      //var instane = new SellingPartnerApiForFinances.ServiceFeeEvent();
      //expect(instance).to.be();
    });

    it('should have the property feeReason (base name: "FeeReason")', function() {
      // uncomment below and update the code to test the property feeReason
      //var instane = new SellingPartnerApiForFinances.ServiceFeeEvent();
      //expect(instance).to.be();
    });

    it('should have the property feeList (base name: "FeeList")', function() {
      // uncomment below and update the code to test the property feeList
      //var instane = new SellingPartnerApiForFinances.ServiceFeeEvent();
      //expect(instance).to.be();
    });

    it('should have the property sellerSKU (base name: "SellerSKU")', function() {
      // uncomment below and update the code to test the property sellerSKU
      //var instane = new SellingPartnerApiForFinances.ServiceFeeEvent();
      //expect(instance).to.be();
    });

    it('should have the property fnSKU (base name: "FnSKU")', function() {
      // uncomment below and update the code to test the property fnSKU
      //var instane = new SellingPartnerApiForFinances.ServiceFeeEvent();
      //expect(instance).to.be();
    });

    it('should have the property feeDescription (base name: "FeeDescription")', function() {
      // uncomment below and update the code to test the property feeDescription
      //var instane = new SellingPartnerApiForFinances.ServiceFeeEvent();
      //expect(instance).to.be();
    });

    it('should have the property ASIN (base name: "ASIN")', function() {
      // uncomment below and update the code to test the property ASIN
      //var instane = new SellingPartnerApiForFinances.ServiceFeeEvent();
      //expect(instance).to.be();
    });

  });

}));
