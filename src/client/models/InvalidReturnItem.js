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
import InvalidItemReason from './InvalidItemReason';

/**
* The InvalidReturnItem model module.
* @module client/models/InvalidReturnItem
* @version v0
*/
export default class InvalidReturnItem {
    /**
    * Constructs a new <code>InvalidReturnItem</code>.
    * An item that is invalid for return.
    * @alias module:client/models/InvalidReturnItem
    * @class
    * @param sellerReturnItemId {String} An identifier assigned by the seller to the return item.
    * @param sellerFulfillmentOrderItemId {String} The identifier assigned to the item by the seller when the fulfillment order was created.
    * @param invalidItemReason {module:client/models/InvalidItemReason} 
    */

    constructor(sellerReturnItemId, sellerFulfillmentOrderItemId, invalidItemReason) {
        
        
        this['SellerReturnItemId'] = sellerReturnItemId;
        this['SellerFulfillmentOrderItemId'] = sellerFulfillmentOrderItemId;
        this['InvalidItemReason'] = invalidItemReason;
        
    }

    /**
    * Constructs a <code>InvalidReturnItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InvalidReturnItem} obj Optional instance to populate.
    * @return {module:client/models/InvalidReturnItem} The populated <code>InvalidReturnItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvalidReturnItem();
                        
            
            if (data.hasOwnProperty('SellerReturnItemId')) {
                obj['SellerReturnItemId'] = ApiClient.convertToType(data['SellerReturnItemId'], 'String');
            }
            if (data.hasOwnProperty('SellerFulfillmentOrderItemId')) {
                obj['SellerFulfillmentOrderItemId'] = ApiClient.convertToType(data['SellerFulfillmentOrderItemId'], 'String');
            }
            if (data.hasOwnProperty('InvalidItemReason')) {
                obj['InvalidItemReason'] = InvalidItemReason.constructFromObject(data['InvalidItemReason']);
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
    * @member {module:client/models/InvalidItemReason} InvalidItemReason
    */
    'InvalidItemReason' = undefined;




}