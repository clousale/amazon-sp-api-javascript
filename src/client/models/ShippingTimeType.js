/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
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
* The ShippingTimeType model module.
* @module client/models/ShippingTimeType
* @version v0
*/
export default class ShippingTimeType {
    /**
    * Constructs a new <code>ShippingTimeType</code>.
    * @alias module:client/models/ShippingTimeType
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ShippingTimeType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ShippingTimeType} obj Optional instance to populate.
    * @return {module:client/models/ShippingTimeType} The populated <code>ShippingTimeType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingTimeType();
                        
            
            if (data.hasOwnProperty('Max')) {
                obj['Max'] = ApiClient.convertToType(data['Max'], 'String');
            }
        }
        return obj;
    }

    /**
    * (0-2 days, 3-7 days, 8-13 days, or 14 or more days) – Indicates the maximum time within which the item will likely be shipped once an order has been placed.
    * @member {String} Max
    */
    'Max' = undefined;




}
