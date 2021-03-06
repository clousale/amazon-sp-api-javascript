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
import ServiceRate from './ServiceRate';

/**
* The ServiceRateList model module.
* @module client/models/ServiceRateList
* @version v1
*/
export default class ServiceRateList extends Array {
    /**
    * Constructs a new <code>ServiceRateList</code>.
    * A list of service rates.
    * @alias module:client/models/ServiceRateList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>ServiceRateList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ServiceRateList} obj Optional instance to populate.
    * @return {module:client/models/ServiceRateList} The populated <code>ServiceRateList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceRateList();
            ApiClient.constructFromObject(data, obj, 'ServiceRate');
            
            
        }
        return obj;
    }





}
