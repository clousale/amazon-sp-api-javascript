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

/**
* The ProductInfoDetail model module.
* @module client/models/ProductInfoDetail
* @version v0
*/
export default class ProductInfoDetail {
    /**
    * Constructs a new <code>ProductInfoDetail</code>.
    * Product information on the number of items.
    * @alias module:client/models/ProductInfoDetail
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProductInfoDetail</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ProductInfoDetail} obj Optional instance to populate.
    * @return {module:client/models/ProductInfoDetail} The populated <code>ProductInfoDetail</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductInfoDetail();
                        
            
            if (data.hasOwnProperty('NumberOfItems')) {
                obj['NumberOfItems'] = ApiClient.convertToType(data['NumberOfItems'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The total number of items that are included in the ASIN.
    * @member {Number} NumberOfItems
    */
    'NumberOfItems' = undefined;




}
