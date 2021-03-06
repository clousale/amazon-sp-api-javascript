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
import LowestPriceType from './LowestPriceType';

/**
* The LowestPrices model module.
* @module client/models/LowestPrices
* @version v0
*/
export default class LowestPrices extends Array {
    /**
    * Constructs a new <code>LowestPrices</code>.
    * @alias module:client/models/LowestPrices
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>LowestPrices</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/LowestPrices} obj Optional instance to populate.
    * @return {module:client/models/LowestPrices} The populated <code>LowestPrices</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LowestPrices();
            ApiClient.constructFromObject(data, obj, 'LowestPriceType');
            
            
        }
        return obj;
    }





}
