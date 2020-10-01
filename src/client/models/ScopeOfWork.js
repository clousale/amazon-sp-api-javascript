/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
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
* The ScopeOfWork model module.
* @module client/models/ScopeOfWork
* @version v1
*/
export default class ScopeOfWork {
    /**
    * Constructs a new <code>ScopeOfWork</code>.
    * The scope of work for the order.
    * @alias module:client/models/ScopeOfWork
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ScopeOfWork</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ScopeOfWork} obj Optional instance to populate.
    * @return {module:client/models/ScopeOfWork} The populated <code>ScopeOfWork</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScopeOfWork();
                        
            
            if (data.hasOwnProperty('asin')) {
                obj['asin'] = ApiClient.convertToType(data['asin'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('requiredSkills')) {
                obj['requiredSkills'] = ApiClient.convertToType(data['requiredSkills'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The Amazon Standard Identification Number (ASIN) of the service job.
    * @member {String} asin
    */
    'asin' = undefined;
    /**
    * The title of the service job.
    * @member {String} title
    */
    'title' = undefined;
    /**
    * The number of service jobs.
    * @member {Number} quantity
    */
    'quantity' = undefined;
    /**
    * A list of skills required to perform the job.
    * @member {Array.<String>} requiredSkills
    */
    'requiredSkills' = undefined;




}