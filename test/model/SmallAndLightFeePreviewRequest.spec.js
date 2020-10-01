/**
 * Selling Partner API for FBA Small And Light
 * The Selling Partner API for FBA Small and Light lets you help sellers manage their listings in the Small and Light program. The program reduces the cost of fulfilling orders for small and lightweight FBA inventory. You can enroll or remove items from the program and check item eligibility and enrollment status. You can also preview the estimated program fees charged to a seller for items sold while enrolled in the program.
 *
 * OpenAPI spec version: v1
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
    factory(root.expect, root.SellingPartnerApiForFbaSmallAndLight);
  }
}(this, function(expect, SellingPartnerApiForFbaSmallAndLight) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightFeePreviewRequest();
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

  describe('SmallAndLightFeePreviewRequest', function() {
    it('should create an instance of SmallAndLightFeePreviewRequest', function() {
      // uncomment below and update the code to test SmallAndLightFeePreviewRequest
      //var instane = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightFeePreviewRequest();
      //expect(instance).to.be.a(SellingPartnerApiForFbaSmallAndLight.SmallAndLightFeePreviewRequest);
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instane = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightFeePreviewRequest();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightFeePreviewRequest();
      //expect(instance).to.be();
    });

  });

}));
