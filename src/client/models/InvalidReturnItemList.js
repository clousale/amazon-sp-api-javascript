/**
 * Selling Partner API for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
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
import InvalidReturnItem from './InvalidReturnItem';

/**
* The InvalidReturnItemList model module.
* @module client/models/InvalidReturnItemList
* @version v0
*/
export default class InvalidReturnItemList extends Array {
    /**
    * Constructs a new <code>InvalidReturnItemList</code>.
    * A list of invalid return item information.
    * @alias module:client/models/InvalidReturnItemList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>InvalidReturnItemList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InvalidReturnItemList} obj Optional instance to populate.
    * @return {module:client/models/InvalidReturnItemList} The populated <code>InvalidReturnItemList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvalidReturnItemList();
            ApiClient.constructFromObject(data, obj, 'InvalidReturnItem');
            
            
        }
        return obj;
    }





}