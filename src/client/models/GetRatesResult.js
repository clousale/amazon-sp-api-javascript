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
import ServiceRateList from './ServiceRateList';

/**
* The GetRatesResult model module.
* @module client/models/GetRatesResult
* @version v1
*/
export default class GetRatesResult {
    /**
    * Constructs a new <code>GetRatesResult</code>.
    * The payload schema for the getRates operation.
    * @alias module:client/models/GetRatesResult
    * @class
    * @param serviceRates {module:client/models/ServiceRateList} 
    */

    constructor(serviceRates) {
        
        
        this['serviceRates'] = serviceRates;
        
    }

    /**
    * Constructs a <code>GetRatesResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetRatesResult} obj Optional instance to populate.
    * @return {module:client/models/GetRatesResult} The populated <code>GetRatesResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRatesResult();
                        
            
            if (data.hasOwnProperty('serviceRates')) {
                obj['serviceRates'] = ServiceRateList.constructFromObject(data['serviceRates']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ServiceRateList} serviceRates
    */
    'serviceRates' = undefined;




}