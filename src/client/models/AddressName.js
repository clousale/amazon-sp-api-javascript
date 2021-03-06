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
* The AddressName model module.
* @module client/models/AddressName
* @version v0
*/
export default class AddressName {
    /**
    * Constructs a new <code>AddressName</code>.
    * The name of the addressee, or business name.
    * @alias module:client/models/AddressName
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AddressName</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/AddressName} obj Optional instance to populate.
    * @return {module:client/models/AddressName} The populated <code>AddressName</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressName();
                        
            
        }
        return obj;
    }





}
