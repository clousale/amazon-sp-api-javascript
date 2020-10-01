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
* The LabelStream model module.
* @module client/models/LabelStream
* @version v1
*/
export default class LabelStream {
    /**
    * Constructs a new <code>LabelStream</code>.
    * Contains binary image data encoded as a base-64 string.
    * @alias module:client/models/LabelStream
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>LabelStream</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/LabelStream} obj Optional instance to populate.
    * @return {module:client/models/LabelStream} The populated <code>LabelStream</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelStream();
                        
            
        }
        return obj;
    }





}
