/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import ConfirmPreorderResponse from '../models/ConfirmPreorderResponse';
import ConfirmTransportResponse from '../models/ConfirmTransportResponse';
import CreateInboundShipmentPlanRequest from '../models/CreateInboundShipmentPlanRequest';
import CreateInboundShipmentPlanResponse from '../models/CreateInboundShipmentPlanResponse';
import EstimateTransportResponse from '../models/EstimateTransportResponse';
import GetBillOfLadingResponse from '../models/GetBillOfLadingResponse';
import GetInboundGuidanceResponse from '../models/GetInboundGuidanceResponse';
import GetLabelsResponse from '../models/GetLabelsResponse';
import GetPreorderInfoResponse from '../models/GetPreorderInfoResponse';
import GetPrepInstructionsResponse from '../models/GetPrepInstructionsResponse';
import GetShipmentItemsResponse from '../models/GetShipmentItemsResponse';
import GetShipmentsResponse from '../models/GetShipmentsResponse';
import GetTransportDetailsResponse from '../models/GetTransportDetailsResponse';
import InboundShipmentRequest from '../models/InboundShipmentRequest';
import InboundShipmentResponse from '../models/InboundShipmentResponse';
import PutTransportDetailsRequest from '../models/PutTransportDetailsRequest';
import PutTransportDetailsResponse from '../models/PutTransportDetailsResponse';
import VoidTransportResponse from '../models/VoidTransportResponse';

/**
* FbaInbound service.
* @module client/apis/FbaInboundApi
* @version v0
*/
export default class FbaInboundApi {

    /**
    * Constructs a new FbaInboundApi. 
    * @alias module:client/apis/FbaInboundApi
    * @class
    * @param {module:client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the confirmPreorder operation.
     * @callback module:client/apis/FbaInboundApi~confirmPreorderCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/ConfirmPreorderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information needed to confirm a shipment for pre-order. Call this operation after calling the getPreorderInfo operation to get the NeedByDate value and other pre-order information about the shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~confirmPreorderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/ConfirmPreorderResponse}
     */
    confirmPreorder(shipmentId, needByDate, marketplaceId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
      };
      let queryParams = {
        'NeedByDate': needByDate,
        'MarketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConfirmPreorderResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/preorder/confirm', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the confirmTransport operation.
     * @callback module:client/apis/FbaInboundApi~confirmTransportCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/ConfirmTransportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirms that the seller accepts the Amazon-partnered shipping estimate, agrees to allow Amazon to charge their account for the shipping cost, and requests that the Amazon-partnered carrier ship the inbound shipment.  Prior to calling the confirmTransport operation, you should call the getTransportDetails operation to get the Amazon-partnered shipping estimate.  Important: After confirming the transportation request, if the seller decides that they do not want the Amazon-partnered carrier to ship the inbound shipment, you can call the voidTransport operation to cancel the transportation request. Note that for a Small Parcel shipment, the seller has 24 hours after confirming a transportation request to void the transportation request. For a Less Than Truckload/Full Truckload (LTL/FTL) shipment, the seller has one hour after confirming a transportation request to void it. After the grace period has expired the seller&#x27;s account will be charged for the shipping cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~confirmTransportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/ConfirmTransportResponse}
     */
    confirmTransport(shipmentId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
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
      let returnType = ConfirmTransportResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/transport/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createInboundShipment operation.
     * @callback module:client/apis/FbaInboundApi~createInboundShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/InboundShipmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a new inbound shipment based on the specified shipmentId that was returned by the createInboundShipmentPlan operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~createInboundShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/InboundShipmentResponse}
     */
    createInboundShipment(body, shipmentId, callback) {
      let postBody = body;

      let pathParams = {
        'shipmentId': shipmentId
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
      let returnType = InboundShipmentResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createInboundShipmentPlan operation.
     * @callback module:client/apis/FbaInboundApi~createInboundShipmentPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CreateInboundShipmentPlanResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns one or more inbound shipment plans, which provide the information you need to create one or more inbound shipments for a set of items that you specify. Multiple inbound shipment plans might be required so that items can be optimally placed in Amazon&#x27;s fulfillment network—for example, positioning inventory closer to the customer. Alternatively, two inbound shipment plans might be created with the same Amazon fulfillment center destination if the two shipment plans require different processing—for example, items that require labels must be shipped separately from stickerless, commingled inventory.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~createInboundShipmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CreateInboundShipmentPlanResponse}
     */
    createInboundShipmentPlan(body, callback) {
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
      let returnType = CreateInboundShipmentPlanResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/plans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the estimateTransport operation.
     * @callback module:client/apis/FbaInboundApi~estimateTransportCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/EstimateTransportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiates the process of estimating the shipping cost for an inbound shipment by an Amazon-partnered carrier.  Prior to calling the estimateTransport operation, you must call the putTransportDetails operation to provide Amazon with the transportation information for the inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~estimateTransportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/EstimateTransportResponse}
     */
    estimateTransport(shipmentId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
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
      let returnType = EstimateTransportResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/transport/estimate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBillOfLading operation.
     * @callback module:client/apis/FbaInboundApi~getBillOfLadingCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetBillOfLadingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a bill of lading for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. The getBillOfLading operation returns PDF document data for printing a bill of lading for an Amazon-partnered Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~getBillOfLadingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetBillOfLadingResponse}
     */
    getBillOfLading(shipmentId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
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
      let returnType = GetBillOfLadingResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/billOfLading', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getInboundGuidance operation.
     * @callback module:client/apis/FbaInboundApi~getInboundGuidanceCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetInboundGuidanceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information that lets a seller know if Amazon recommends sending an item to a given marketplace. In some cases, Amazon provides guidance for why a given SellerSKU or ASIN is not recommended for shipment to Amazon&#x27;s fulfillment network. Sellers may still ship items that are not recommended, at their discretion.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/FbaInboundApi~getInboundGuidanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetInboundGuidanceResponse}
     */
    getInboundGuidance(marketplaceId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'MarketplaceId': marketplaceId,
        'SellerSKUList': this.apiClient.buildCollectionParam(opts['sellerSKUList'], 'csv'),
        'ASINList': this.apiClient.buildCollectionParam(opts['aSINList'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetInboundGuidanceResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/itemsGuidance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getLabels operation.
     * @callback module:client/apis/FbaInboundApi~getLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetLabelsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns package/pallet labels for faster and more accurate shipment processing at the Amazon fulfillment center.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/FbaInboundApi~getLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetLabelsResponse}
     */
    getLabels(shipmentId, pageType, labelType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
      };
      let queryParams = {
        'PageType': pageType,
        'LabelType': labelType,
        'NumberOfPackages': opts['numberOfPackages'],
        'PackageLabelsToPrint': this.apiClient.buildCollectionParam(opts['packageLabelsToPrint'], 'csv'),
        'NumberOfPallets': opts['numberOfPallets']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLabelsResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/labels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPreorderInfo operation.
     * @callback module:client/apis/FbaInboundApi~getPreorderInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetPreorderInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns pre-order information, including dates, that a seller needs before confirming a shipment for pre-order.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~getPreorderInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetPreorderInfoResponse}
     */
    getPreorderInfo(shipmentId, marketplaceId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
      };
      let queryParams = {
        'MarketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPreorderInfoResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/preorder', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPrepInstructions operation.
     * @callback module:client/apis/FbaInboundApi~getPrepInstructionsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetPrepInstructionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns labeling requirements and item preparation instructions to help prepare items for shipment to Amazon&#x27;s fulfillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/FbaInboundApi~getPrepInstructionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetPrepInstructionsResponse}
     */
    getPrepInstructions(shipToCountryCode, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ShipToCountryCode': shipToCountryCode,
        'SellerSKUList': this.apiClient.buildCollectionParam(opts['sellerSKUList'], 'csv'),
        'ASINList': this.apiClient.buildCollectionParam(opts['aSINList'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPrepInstructionsResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/prepInstructions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getShipmentItems operation.
     * @callback module:client/apis/FbaInboundApi~getShipmentItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetShipmentItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of items in a specified inbound shipment, or a list of items that were updated within a specified time frame.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/FbaInboundApi~getShipmentItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetShipmentItemsResponse}
     */
    getShipmentItems(queryType, marketplaceId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'LastUpdatedAfter': opts['lastUpdatedAfter'],
        'LastUpdatedBefore': opts['lastUpdatedBefore'],
        'QueryType': queryType,
        'NextToken': opts['nextToken'],
        'MarketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetShipmentItemsResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipmentItems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getShipmentItemsByShipmentId operation.
     * @callback module:client/apis/FbaInboundApi~getShipmentItemsByShipmentIdCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetShipmentItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of items in a specified inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~getShipmentItemsByShipmentIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetShipmentItemsResponse}
     */
    getShipmentItemsByShipmentId(shipmentId, marketplaceId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
      };
      let queryParams = {
        'MarketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetShipmentItemsResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getShipments operation.
     * @callback module:client/apis/FbaInboundApi~getShipmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetShipmentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of inbound shipments based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/FbaInboundApi~getShipmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetShipmentsResponse}
     */
    getShipments(queryType, marketplaceId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ShipmentStatusList': this.apiClient.buildCollectionParam(opts['shipmentStatusList'], 'csv'),
        'ShipmentIdList': this.apiClient.buildCollectionParam(opts['shipmentIdList'], 'csv'),
        'LastUpdatedAfter': opts['lastUpdatedAfter'],
        'LastUpdatedBefore': opts['lastUpdatedBefore'],
        'QueryType': queryType,
        'NextToken': opts['nextToken'],
        'MarketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetShipmentsResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTransportDetails operation.
     * @callback module:client/apis/FbaInboundApi~getTransportDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetTransportDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns current transportation information about an inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~getTransportDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetTransportDetailsResponse}
     */
    getTransportDetails(shipmentId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
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
      let returnType = GetTransportDetailsResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/transport', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the putTransportDetails operation.
     * @callback module:client/apis/FbaInboundApi~putTransportDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/PutTransportDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sends transportation information to Amazon about an inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~putTransportDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/PutTransportDetailsResponse}
     */
    putTransportDetails(body, shipmentId, callback) {
      let postBody = body;

      let pathParams = {
        'shipmentId': shipmentId
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
      let returnType = PutTransportDetailsResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/transport', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateInboundShipment operation.
     * @callback module:client/apis/FbaInboundApi~updateInboundShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/InboundShipmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds, updates, or removes items from the inbound shipment identified by the specified shipment identifier.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~updateInboundShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/InboundShipmentResponse}
     */
    updateInboundShipment(body, shipmentId, callback) {
      let postBody = body;

      let pathParams = {
        'shipmentId': shipmentId
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
      let returnType = InboundShipmentResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the voidTransport operation.
     * @callback module:client/apis/FbaInboundApi~voidTransportCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/VoidTransportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancels a previously-confirmed request to ship an inbound shipment using an Amazon-partnered carrier.  To be successful, you must call this operation before the VoidDeadline date that is returned by the getTransportDetails operation.  Important: The VoidDeadline date is 24 hours after you confirm a Small Parcel shipment transportation request or one hour after you confirm a Less Than Truckload/Full Truckload (LTL/FTL) shipment transportation request. After the void deadline passes, your account will be charged for the shipping cost.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/FbaInboundApi~voidTransportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/VoidTransportResponse}
     */
    voidTransport(shipmentId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
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
      let returnType = VoidTransportResponse;

      return this.apiClient.callApi(
        '/fba/inbound/v0/shipments/{shipmentId}/transport/void', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
