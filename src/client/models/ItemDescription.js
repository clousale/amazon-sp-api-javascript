/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
* The ItemDescription model module.
* @module client/models/ItemDescription
* @version v0
*/
export default class ItemDescription {
    /**
    * Constructs a new <code>ItemDescription</code>.
    * The description of the item.
    * @alias module:client/models/ItemDescription
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ItemDescription</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ItemDescription} obj Optional instance to populate.
    * @return {module:client/models/ItemDescription} The populated <code>ItemDescription</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemDescription();
                        
            
        }
        return obj;
    }





}
