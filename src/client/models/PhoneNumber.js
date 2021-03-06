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
* The PhoneNumber model module.
* @module client/models/PhoneNumber
* @version v0
*/
export default class PhoneNumber {
    /**
    * Constructs a new <code>PhoneNumber</code>.
    * The phone number.
    * @alias module:client/models/PhoneNumber
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PhoneNumber} obj Optional instance to populate.
    * @return {module:client/models/PhoneNumber} The populated <code>PhoneNumber</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhoneNumber();
                        
            
        }
        return obj;
    }





}
