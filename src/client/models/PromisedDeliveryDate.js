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
* The PromisedDeliveryDate model module.
* @module client/models/PromisedDeliveryDate
* @version v1
*/
export default class PromisedDeliveryDate {
    /**
    * Constructs a new <code>PromisedDeliveryDate</code>.
    * The promised delivery date and time of a shipment.
    * @alias module:client/models/PromisedDeliveryDate
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PromisedDeliveryDate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PromisedDeliveryDate} obj Optional instance to populate.
    * @return {module:client/models/PromisedDeliveryDate} The populated <code>PromisedDeliveryDate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromisedDeliveryDate();
                        
            
        }
        return obj;
    }





}
