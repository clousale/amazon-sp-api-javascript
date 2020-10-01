/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
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
import PaymentExecutionDetailItem from './PaymentExecutionDetailItem';

/**
* The PaymentExecutionDetailItemList model module.
* @module client/models/PaymentExecutionDetailItemList
* @version v0
*/
export default class PaymentExecutionDetailItemList extends Array {
    /**
    * Constructs a new <code>PaymentExecutionDetailItemList</code>.
    * A list of payment execution detail items.
    * @alias module:client/models/PaymentExecutionDetailItemList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>PaymentExecutionDetailItemList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PaymentExecutionDetailItemList} obj Optional instance to populate.
    * @return {module:client/models/PaymentExecutionDetailItemList} The populated <code>PaymentExecutionDetailItemList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentExecutionDetailItemList();
            ApiClient.constructFromObject(data, obj, 'PaymentExecutionDetailItem');
            
            
        }
        return obj;
    }





}