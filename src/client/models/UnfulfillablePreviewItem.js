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
import StringList from './StringList';

/**
* The UnfulfillablePreviewItem model module.
* @module client/models/UnfulfillablePreviewItem
* @version v0
*/
export default class UnfulfillablePreviewItem {
    /**
    * Constructs a new <code>UnfulfillablePreviewItem</code>.
    * Information about unfulfillable items in a fulfillment order preview.
    * @alias module:client/models/UnfulfillablePreviewItem
    * @class
    * @param sellerSKU {String} The seller SKU of the item.
    * @param quantity {module:client/models/Quantity} 
    * @param sellerFulfillmentOrderItemId {String} A fulfillment order item identifier created with a call to the getFulfillmentPreview operation.
    */

    constructor(sellerSKU, quantity, sellerFulfillmentOrderItemId) {
        
        
        this['SellerSKU'] = sellerSKU;
        this['Quantity'] = quantity;
        this['SellerFulfillmentOrderItemId'] = sellerFulfillmentOrderItemId;
        
    }

    /**
    * Constructs a <code>UnfulfillablePreviewItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/UnfulfillablePreviewItem} obj Optional instance to populate.
    * @return {module:client/models/UnfulfillablePreviewItem} The populated <code>UnfulfillablePreviewItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnfulfillablePreviewItem();
                        
            
            if (data.hasOwnProperty('SellerSKU')) {
                obj['SellerSKU'] = ApiClient.convertToType(data['SellerSKU'], 'String');
            }
            if (data.hasOwnProperty('Quantity')) {
                obj['Quantity'] = Quantity.constructFromObject(data['Quantity']);
            }
            if (data.hasOwnProperty('SellerFulfillmentOrderItemId')) {
                obj['SellerFulfillmentOrderItemId'] = ApiClient.convertToType(data['SellerFulfillmentOrderItemId'], 'String');
            }
            if (data.hasOwnProperty('ItemUnfulfillableReasons')) {
                obj['ItemUnfulfillableReasons'] = StringList.constructFromObject(data['ItemUnfulfillableReasons']);
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
    * @member {module:client/models/Quantity} Quantity
    */
    'Quantity' = undefined;
    /**
    * A fulfillment order item identifier created with a call to the getFulfillmentPreview operation.
    * @member {String} SellerFulfillmentOrderItemId
    */
    'SellerFulfillmentOrderItemId' = undefined;
    /**
    * @member {module:client/models/StringList} ItemUnfulfillableReasons
    */
    'ItemUnfulfillableReasons' = undefined;




}
