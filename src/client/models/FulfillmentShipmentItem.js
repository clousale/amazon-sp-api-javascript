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
import Quantity from './Quantity';

/**
* The FulfillmentShipmentItem model module.
* @module client/models/FulfillmentShipmentItem
* @version v0
*/
export default class FulfillmentShipmentItem {
    /**
    * Constructs a new <code>FulfillmentShipmentItem</code>.
    * Item information for a shipment in a fulfillment order.
    * @alias module:client/models/FulfillmentShipmentItem
    * @class
    * @param sellerSKU {String} The seller SKU of the item.
    * @param sellerFulfillmentOrderItemId {String} The fulfillment order item identifier that the seller created and submitted with a call to the createFulfillmentOrder operation.
    * @param quantity {module:client/models/Quantity} 
    */

    constructor(sellerSKU, sellerFulfillmentOrderItemId, quantity) {
        
        
        this['SellerSKU'] = sellerSKU;
        this['SellerFulfillmentOrderItemId'] = sellerFulfillmentOrderItemId;
        this['Quantity'] = quantity;
        
    }

    /**
    * Constructs a <code>FulfillmentShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FulfillmentShipmentItem} obj Optional instance to populate.
    * @return {module:client/models/FulfillmentShipmentItem} The populated <code>FulfillmentShipmentItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentShipmentItem();
                        
            
            if (data.hasOwnProperty('SellerSKU')) {
                obj['SellerSKU'] = ApiClient.convertToType(data['SellerSKU'], 'String');
            }
            if (data.hasOwnProperty('SellerFulfillmentOrderItemId')) {
                obj['SellerFulfillmentOrderItemId'] = ApiClient.convertToType(data['SellerFulfillmentOrderItemId'], 'String');
            }
            if (data.hasOwnProperty('Quantity')) {
                obj['Quantity'] = Quantity.constructFromObject(data['Quantity']);
            }
            if (data.hasOwnProperty('PackageNumber')) {
                obj['PackageNumber'] = ApiClient.convertToType(data['PackageNumber'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The seller SKU of the item.
    * @member {String} SellerSKU
    */
    'SellerSKU' = undefined;
    /**
    * The fulfillment order item identifier that the seller created and submitted with a call to the createFulfillmentOrder operation.
    * @member {String} SellerFulfillmentOrderItemId
    */
    'SellerFulfillmentOrderItemId' = undefined;
    /**
    * @member {module:client/models/Quantity} Quantity
    */
    'Quantity' = undefined;
    /**
    * An identifier for the package that contains the item quantity.
    * @member {Number} PackageNumber
    */
    'PackageNumber' = undefined;




}