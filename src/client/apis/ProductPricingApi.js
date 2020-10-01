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

import ApiClient from "../ApiClient";
import GetOffersResponse from '../models/GetOffersResponse';
import GetPricingResponse from '../models/GetPricingResponse';

/**
* ProductPricing service.
* @module client/apis/ProductPricingApi
* @version v0
*/
export default class ProductPricingApi {

    /**
    * Constructs a new ProductPricingApi. 
    * @alias module:client/apis/ProductPricingApi
    * @class
    * @param {module:client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getCompetitivePricing operation.
     * @callback module:client/apis/ProductPricingApi~getCompetitivePricingCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetPricingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns competitive pricing information for a seller&#x27;s offer listings based on seller SKU or ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/ProductPricingApi~getCompetitivePricingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetPricingResponse}
     */
    getCompetitivePricing(marketplaceId, itemType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'MarketplaceId': marketplaceId,
        'Asins': this.apiClient.buildCollectionParam(opts['asins'], 'csv'),
        'Skus': this.apiClient.buildCollectionParam(opts['skus'], 'csv'),
        'ItemType': itemType
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPricingResponse;

      return this.apiClient.callApi(
        '/products/pricing/v0/competitivePrice', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getItemOffers operation.
     * @callback module:client/apis/ProductPricingApi~getItemOffersCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetOffersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the lowest priced offers for a single item based on ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ProductPricingApi~getItemOffersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetOffersResponse}
     */
    getItemOffers(marketplaceId, itemCondition, asin, callback) {
      let postBody = null;

      let pathParams = {
        'Asin': asin
      };
      let queryParams = {
        'MarketplaceId': marketplaceId,
        'ItemCondition': itemCondition
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetOffersResponse;

      return this.apiClient.callApi(
        '/products/pricing/v0/items/{Asin}/offers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getListingOffers operation.
     * @callback module:client/apis/ProductPricingApi~getListingOffersCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetOffersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the lowest priced offers for a single SKU listing.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ProductPricingApi~getListingOffersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetOffersResponse}
     */
    getListingOffers(marketplaceId, itemCondition, sellerSKU, callback) {
      let postBody = null;

      let pathParams = {
        'SellerSKU': sellerSKU
      };
      let queryParams = {
        'MarketplaceId': marketplaceId,
        'ItemCondition': itemCondition
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetOffersResponse;

      return this.apiClient.callApi(
        '/products/pricing/v0/listings/{SellerSKU}/offers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPricing operation.
     * @callback module:client/apis/ProductPricingApi~getPricingCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetPricingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns pricing information for a seller&#x27;s offer listings based on seller SKU or ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/ProductPricingApi~getPricingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetPricingResponse}
     */
    getPricing(marketplaceId, itemType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'MarketplaceId': marketplaceId,
        'Asins': this.apiClient.buildCollectionParam(opts['asins'], 'csv'),
        'Skus': this.apiClient.buildCollectionParam(opts['skus'], 'csv'),
        'ItemType': itemType,
        'ItemCondition': opts['itemCondition']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPricingResponse;

      return this.apiClient.callApi(
        '/products/pricing/v0/price', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}