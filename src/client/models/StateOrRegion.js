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
* The StateOrRegion model module.
* @module client/models/StateOrRegion
* @version v1
*/
export default class StateOrRegion {
    /**
    * Constructs a new <code>StateOrRegion</code>.
    * The state or region where the person, business or institution is located.
    * @alias module:client/models/StateOrRegion
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>StateOrRegion</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/StateOrRegion} obj Optional instance to populate.
    * @return {module:client/models/StateOrRegion} The populated <code>StateOrRegion</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateOrRegion();
                        
            
        }
        return obj;
    }





}