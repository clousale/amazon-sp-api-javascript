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
import Fee from './Fee';

/**
* The FeeList model module.
* @module client/models/FeeList
* @version v0
*/
export default class FeeList extends Array {
    /**
    * Constructs a new <code>FeeList</code>.
    * A list of fee type and cost pairs.
    * @alias module:client/models/FeeList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>FeeList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FeeList} obj Optional instance to populate.
    * @return {module:client/models/FeeList} The populated <code>FeeList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeeList();
            ApiClient.constructFromObject(data, obj, 'Fee');
            
            
        }
        return obj;
    }





}
