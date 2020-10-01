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

import ApiClient from '../ApiClient';

/**
* The CreateReturnItem model module.
* @module client/models/CreateReturnItem
* @version v0
*/
export default class CreateReturnItem {
    /**
    * Constructs a new <code>CreateReturnItem</code>.
    * An item that Amazon accepted for return.
    * @alias module:client/models/CreateReturnItem
    * @class
    * @param sellerReturnItemId {String} An identifier assigned by the seller to the return item.
    * @param sellerFulfillmentOrderItemId {String} The identifier assigned to the item by the seller when the fulfillment order was created.
    * @param amazonShipmentId {String} The identifier for the shipment that is associated with the return item.
    * @param returnReasonCode {String} The return reason code assigned to the return item by the seller.
    */

    constructor(sellerReturnItemId, sellerFulfillmentOrderItemId, amazonShipmentId, returnReasonCode) {
        
        
        this['SellerReturnItemId'] = sellerReturnItemId;
        this['SellerFulfillmentOrderItemId'] = sellerFulfillmentOrderItemId;
        this['AmazonShipmentId'] = amazonShipmentId;
        this['ReturnReasonCode'] = returnReasonCode;
        
    }

    /**
    * Constructs a <code>CreateReturnItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateReturnItem} obj Optional instance to populate.
    * @return {module:client/models/CreateReturnItem} The populated <code>CreateReturnItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateReturnItem();
                        
            
            if (data.hasOwnProperty('SellerReturnItemId')) {
                obj['SellerReturnItemId'] = ApiClient.convertToType(data['SellerReturnItemId'], 'String');
            }
            if (data.hasOwnProperty('SellerFulfillmentOrderItemId')) {
                obj['SellerFulfillmentOrderItemId'] = ApiClient.convertToType(data['SellerFulfillmentOrderItemId'], 'String');
            }
            if (data.hasOwnProperty('AmazonShipmentId')) {
                obj['AmazonShipmentId'] = ApiClient.convertToType(data['AmazonShipmentId'], 'String');
            }
            if (data.hasOwnProperty('ReturnReasonCode')) {
                obj['ReturnReasonCode'] = ApiClient.convertToType(data['ReturnReasonCode'], 'String');
            }
            if (data.hasOwnProperty('ReturnComment')) {
                obj['ReturnComment'] = ApiClient.convertToType(data['ReturnComment'], 'String');
            }
        }
        return obj;
    }

    /**
    * An identifier assigned by the seller to the return item.
    * @member {String} SellerReturnItemId
    */
    'SellerReturnItemId' = undefined;
    /**
    * The identifier assigned to the item by the seller when the fulfillment order was created.
    * @member {String} SellerFulfillmentOrderItemId
    */
    'SellerFulfillmentOrderItemId' = undefined;
    /**
    * The identifier for the shipment that is associated with the return item.
    * @member {String} AmazonShipmentId
    */
    'AmazonShipmentId' = undefined;
    /**
    * The return reason code assigned to the return item by the seller.
    * @member {String} ReturnReasonCode
    */
    'ReturnReasonCode' = undefined;
    /**
    * An optional comment about the return item.
    * @member {String} ReturnComment
    */
    'ReturnComment' = undefined;




}