/**
 * Selling Partner API for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
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
import CancelFulfillmentOrderResponse from '../models/CancelFulfillmentOrderResponse';
import CreateFulfillmentOrderRequest from '../models/CreateFulfillmentOrderRequest';
import CreateFulfillmentOrderResponse from '../models/CreateFulfillmentOrderResponse';
import CreateFulfillmentReturnRequest from '../models/CreateFulfillmentReturnRequest';
import CreateFulfillmentReturnResponse from '../models/CreateFulfillmentReturnResponse';
import GetFulfillmentOrderResponse from '../models/GetFulfillmentOrderResponse';
import GetFulfillmentPreviewRequest from '../models/GetFulfillmentPreviewRequest';
import GetFulfillmentPreviewResponse from '../models/GetFulfillmentPreviewResponse';
import GetPackageTrackingDetailsResponse from '../models/GetPackageTrackingDetailsResponse';
import ListAllFulfillmentOrdersResponse from '../models/ListAllFulfillmentOrdersResponse';
import ListReturnReasonCodesResponse from '../models/ListReturnReasonCodesResponse';
import UpdateFulfillmentOrderRequest from '../models/UpdateFulfillmentOrderRequest';
import UpdateFulfillmentOrderResponse from '../models/UpdateFulfillmentOrderResponse';

/**
* FbaOutbound service.
* @module client/apis/FbaOutboundApi
* @version v0
*/
export default class FbaOutboundApi {

    /**
    * Constructs a new FbaOutboundApi. 
    * @alias module:client/apis/FbaOutboundApi
    * @class
    * @param {module:client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the cancelFulfillmentOrder operation.
     * @callback module:client/apis/FbaOutboundApi~cancelFulfillmentOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CancelFulfillmentOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaOutboundApi~cancelFulfillmentOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CancelFulfillmentOrderResponse}
     */
    cancelFulfillmentOrder(sellerFulfillmentOrderId, callback) {
      let postBody = null;

      let pathParams = {
        'sellerFulfillmentOrderId': sellerFulfillmentOrderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CancelFulfillmentOrderResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/fulfillmentOrders/{sellerFulfillmentOrderId}/cancel', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createFulfillmentOrder operation.
     * @callback module:client/apis/FbaOutboundApi~createFulfillmentOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CreateFulfillmentOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Requests that Amazon ship items from the seller&#x27;s inventory in Amazon&#x27;s fulfillment network to a destination address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaOutboundApi~createFulfillmentOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CreateFulfillmentOrderResponse}
     */
    createFulfillmentOrder(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateFulfillmentOrderResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/fulfillmentOrders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createFulfillmentReturn operation.
     * @callback module:client/apis/FbaOutboundApi~createFulfillmentReturnCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CreateFulfillmentReturnResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a fulfillment return.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaOutboundApi~createFulfillmentReturnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CreateFulfillmentReturnResponse}
     */
    createFulfillmentReturn(body, sellerFulfillmentOrderId, callback) {
      let postBody = body;

      let pathParams = {
        'sellerFulfillmentOrderId': sellerFulfillmentOrderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateFulfillmentReturnResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/fulfillmentOrders/{sellerFulfillmentOrderId}/return', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getFulfillmentOrder operation.
     * @callback module:client/apis/FbaOutboundApi~getFulfillmentOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetFulfillmentOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaOutboundApi~getFulfillmentOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetFulfillmentOrderResponse}
     */
    getFulfillmentOrder(sellerFulfillmentOrderId, callback) {
      let postBody = null;

      let pathParams = {
        'sellerFulfillmentOrderId': sellerFulfillmentOrderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetFulfillmentOrderResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/fulfillmentOrders/{sellerFulfillmentOrderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getFulfillmentPreview operation.
     * @callback module:client/apis/FbaOutboundApi~getFulfillmentPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetFulfillmentPreviewResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of fulfillment order previews based on shipping criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaOutboundApi~getFulfillmentPreviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetFulfillmentPreviewResponse}
     */
    getFulfillmentPreview(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetFulfillmentPreviewResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/fulfillmentOrders/preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPackageTrackingDetails operation.
     * @callback module:client/apis/FbaOutboundApi~getPackageTrackingDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetPackageTrackingDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaOutboundApi~getPackageTrackingDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetPackageTrackingDetailsResponse}
     */
    getPackageTrackingDetails(packageNumber, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'packageNumber': packageNumber
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPackageTrackingDetailsResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/tracking', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listAllFulfillmentOrders operation.
     * @callback module:client/apis/FbaOutboundApi~listAllFulfillmentOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/ListAllFulfillmentOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the next token parameter.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/FbaOutboundApi~listAllFulfillmentOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/ListAllFulfillmentOrdersResponse}
     */
    listAllFulfillmentOrders(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'QueryStartDateTime': opts['queryStartDateTime'],
        'FulfillmentMethod': this.apiClient.buildCollectionParam(opts['fulfillmentMethod'], 'csv'),
        'NextToken': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListAllFulfillmentOrdersResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/fulfillmentOrders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listReturnReasonCodes operation.
     * @callback module:client/apis/FbaOutboundApi~listReturnReasonCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/ListReturnReasonCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of return reason codes for a seller SKU in a given marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/FbaOutboundApi~listReturnReasonCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/ListReturnReasonCodesResponse}
     */
    listReturnReasonCodes(sellerSKU, language, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'SellerSKU': sellerSKU,
        'MarketplaceId': opts['marketplaceId'],
        'SellerFulfillmentOrderId': opts['sellerFulfillmentOrderId'],
        'Language': language
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListReturnReasonCodesResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/returnReasonCodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateFulfillmentOrder operation.
     * @callback module:client/apis/FbaOutboundApi~updateFulfillmentOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/UpdateFulfillmentOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates and/or requests shipment for a fulfillment order with an order hold on it.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaOutboundApi~updateFulfillmentOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/UpdateFulfillmentOrderResponse}
     */
    updateFulfillmentOrder(body, sellerFulfillmentOrderId, callback) {
      let postBody = body;

      let pathParams = {
        'sellerFulfillmentOrderId': sellerFulfillmentOrderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpdateFulfillmentOrderResponse;

      return this.apiClient.callApi(
        '/fba/outbound/v0/fulfillmentOrders/{sellerFulfillmentOrderId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}