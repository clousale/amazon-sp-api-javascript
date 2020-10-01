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
    instance = new SellingPartnerApiForFinances.FinancialEventGroup();
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

  describe('FinancialEventGroup', function() {
    it('should create an instance of FinancialEventGroup', function() {
      // uncomment below and update the code to test FinancialEventGroup
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be.a(SellingPartnerApiForFinances.FinancialEventGroup);
    });

    it('should have the property financialEventGroupId (base name: "FinancialEventGroupId")', function() {
      // uncomment below and update the code to test the property financialEventGroupId
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property processingStatus (base name: "ProcessingStatus")', function() {
      // uncomment below and update the code to test the property processingStatus
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property fundTransferStatus (base name: "FundTransferStatus")', function() {
      // uncomment below and update the code to test the property fundTransferStatus
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property originalTotal (base name: "OriginalTotal")', function() {
      // uncomment below and update the code to test the property originalTotal
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property convertedTotal (base name: "ConvertedTotal")', function() {
      // uncomment below and update the code to test the property convertedTotal
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property fundTransferDate (base name: "FundTransferDate")', function() {
      // uncomment below and update the code to test the property fundTransferDate
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property traceId (base name: "TraceId")', function() {
      // uncomment below and update the code to test the property traceId
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property accountTail (base name: "AccountTail")', function() {
      // uncomment below and update the code to test the property accountTail
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property beginningBalance (base name: "BeginningBalance")', function() {
      // uncomment below and update the code to test the property beginningBalance
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property financialEventGroupStart (base name: "FinancialEventGroupStart")', function() {
      // uncomment below and update the code to test the property financialEventGroupStart
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

    it('should have the property financialEventGroupEnd (base name: "FinancialEventGroupEnd")', function() {
      // uncomment below and update the code to test the property financialEventGroupEnd
      //var instane = new SellingPartnerApiForFinances.FinancialEventGroup();
      //expect(instance).to.be();
    });

  });

}));