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
import BuyBoxPriceType from './BuyBoxPriceType';

/**
* The BuyBoxPrices model module.
* @module client/models/BuyBoxPrices
* @version v0
*/
export default class BuyBoxPrices extends Array {
    /**
    * Constructs a new <code>BuyBoxPrices</code>.
    * @alias module:client/models/BuyBoxPrices
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>BuyBoxPrices</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/BuyBoxPrices} obj Optional instance to populate.
    * @return {module:client/models/BuyBoxPrices} The populated <code>BuyBoxPrices</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BuyBoxPrices();
            ApiClient.constructFromObject(data, obj, 'BuyBoxPriceType');
            
            
        }
        return obj;
    }





}