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

import ApiClient from '../ApiClient';
import Currency from './Currency';

/**
* The AdjustmentItem model module.
* @module client/models/AdjustmentItem
* @version v0
*/
export default class AdjustmentItem {
    /**
    * Constructs a new <code>AdjustmentItem</code>.
    * An item in an adjustment to the seller&#x27;s account.
    * @alias module:client/models/AdjustmentItem
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AdjustmentItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/AdjustmentItem} obj Optional instance to populate.
    * @return {module:client/models/AdjustmentItem} The populated <code>AdjustmentItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdjustmentItem();
                        
            
            if (data.hasOwnProperty('Quantity')) {
                obj['Quantity'] = ApiClient.convertToType(data['Quantity'], 'String');
            }
            if (data.hasOwnProperty('PerUnitAmount')) {
                obj['PerUnitAmount'] = Currency.constructFromObject(data['PerUnitAmount']);
            }
            if (data.hasOwnProperty('TotalAmount')) {
                obj['TotalAmount'] = Currency.constructFromObject(data['TotalAmount']);
            }
            if (data.hasOwnProperty('SellerSKU')) {
                obj['SellerSKU'] = ApiClient.convertToType(data['SellerSKU'], 'String');
            }
            if (data.hasOwnProperty('FnSKU')) {
                obj['FnSKU'] = ApiClient.convertToType(data['FnSKU'], 'String');
            }
            if (data.hasOwnProperty('ProductDescription')) {
                obj['ProductDescription'] = ApiClient.convertToType(data['ProductDescription'], 'String');
            }
            if (data.hasOwnProperty('ASIN')) {
                obj['ASIN'] = ApiClient.convertToType(data['ASIN'], 'String');
            }
        }
        return obj;
    }

    /**
    * Represents the number of units in the seller's inventory when the AdustmentType is FBAInventoryReimbursement.
    * @member {String} Quantity
    */
    'Quantity' = undefined;
    /**
    * @member {module:client/models/Currency} PerUnitAmount
    */
    'PerUnitAmount' = undefined;
    /**
    * @member {module:client/models/Currency} TotalAmount
    */
    'TotalAmount' = undefined;
    /**
    * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
    * @member {String} SellerSKU
    */
    'SellerSKU' = undefined;
    /**
    * A unique identifier assigned to products stored in and fulfilled from a fulfillment center.
    * @member {String} FnSKU
    */
    'FnSKU' = undefined;
    /**
    * A short description of the item.
    * @member {String} ProductDescription
    */
    'ProductDescription' = undefined;
    /**
    * The Amazon Standard Identification Number (ASIN) of the item.
    * @member {String} ASIN
    */
    'ASIN' = undefined;




}
