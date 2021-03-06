/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import SalesRankType from './SalesRankType';

/**
* The SalesRankList model module.
* @module client/models/SalesRankList
* @version v0
*/
export default class SalesRankList extends Array {
    /**
    * Constructs a new <code>SalesRankList</code>.
    * A list of sales rank information for the item, by category.
    * @alias module:client/models/SalesRankList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>SalesRankList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/SalesRankList} obj Optional instance to populate.
    * @return {module:client/models/SalesRankList} The populated <code>SalesRankList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SalesRankList();
            ApiClient.constructFromObject(data, obj, 'SalesRankType');
            
            
        }
        return obj;
    }





}
