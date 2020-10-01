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
* The PackageDimension model module.
* @module client/models/PackageDimension
* @version v0
*/
export default class PackageDimension {
    /**
    * Constructs a new <code>PackageDimension</code>.
    * @alias module:client/models/PackageDimension
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PackageDimension</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PackageDimension} obj Optional instance to populate.
    * @return {module:client/models/PackageDimension} The populated <code>PackageDimension</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PackageDimension();
                        
            
        }
        return obj;
    }





}