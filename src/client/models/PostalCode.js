/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The PostalCode model module.
* @module client/models/PostalCode
* @version v1
*/
export default class PostalCode {
    /**
    * Constructs a new <code>PostalCode</code>.
    * The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
    * @alias module:client/models/PostalCode
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PostalCode</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PostalCode} obj Optional instance to populate.
    * @return {module:client/models/PostalCode} The populated <code>PostalCode</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostalCode();
                        
            
        }
        return obj;
    }





}
