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
import ReturnItem from './ReturnItem';

/**
* The ReturnItemList model module.
* @module client/models/ReturnItemList
* @version v0
*/
export default class ReturnItemList extends Array {
    /**
    * Constructs a new <code>ReturnItemList</code>.
    * A list of items that Amazon accepted for return. Returns empty if no items were accepted for return.
    * @alias module:client/models/ReturnItemList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>ReturnItemList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ReturnItemList} obj Optional instance to populate.
    * @return {module:client/models/ReturnItemList} The populated <code>ReturnItemList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnItemList();
            ApiClient.constructFromObject(data, obj, 'ReturnItem');
            
            
        }
        return obj;
    }





}