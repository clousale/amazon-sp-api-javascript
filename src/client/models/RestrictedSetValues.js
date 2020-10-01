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
* The RestrictedSetValues model module.
* @module client/models/RestrictedSetValues
* @version v0
*/
export default class RestrictedSetValues extends Array {
    /**
    * Constructs a new <code>RestrictedSetValues</code>.
    * The set of fixed values in an additional seller input.
    * @alias module:client/models/RestrictedSetValues
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>RestrictedSetValues</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/RestrictedSetValues} obj Optional instance to populate.
    * @return {module:client/models/RestrictedSetValues} The populated <code>RestrictedSetValues</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestrictedSetValues();
            ApiClient.constructFromObject(data, obj, 'String');
            
            
        }
        return obj;
    }





}
