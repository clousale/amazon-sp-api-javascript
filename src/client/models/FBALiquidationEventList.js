/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import FBALiquidationEvent from './FBALiquidationEvent';

/**
* The FBALiquidationEventList model module.
* @module client/models/FBALiquidationEventList
* @version v0
*/
export default class FBALiquidationEventList extends Array {
    /**
    * Constructs a new <code>FBALiquidationEventList</code>.
    * A list of FBA inventory liquidation payment events.
    * @alias module:client/models/FBALiquidationEventList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>FBALiquidationEventList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FBALiquidationEventList} obj Optional instance to populate.
    * @return {module:client/models/FBALiquidationEventList} The populated <code>FBALiquidationEventList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FBALiquidationEventList();
            ApiClient.constructFromObject(data, obj, 'FBALiquidationEvent');
            
            
        }
        return obj;
    }





}