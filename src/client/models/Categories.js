/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
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
* The Categories model module.
* @module client/models/Categories
* @version v0
*/
export default class Categories {
    /**
    * Constructs a new <code>Categories</code>.
    * @alias module:client/models/Categories
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Categories</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Categories} obj Optional instance to populate.
    * @return {module:client/models/Categories} The populated <code>Categories</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Categories();
                        
            
            if (data.hasOwnProperty('ProductCategoryId')) {
                obj['ProductCategoryId'] = ApiClient.convertToType(data['ProductCategoryId'], 'String');
            }
            if (data.hasOwnProperty('ProductCategoryName')) {
                obj['ProductCategoryName'] = ApiClient.convertToType(data['ProductCategoryName'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], Object);
            }
        }
        return obj;
    }

    /**
    * The identifier for the product category (or browse node).
    * @member {String} ProductCategoryId
    */
    'ProductCategoryId' = undefined;
    /**
    * The name of the product category (or browse node).
    * @member {String} ProductCategoryName
    */
    'ProductCategoryName' = undefined;
    /**
    * The parent product category.
    * @member {Object} parent
    */
    'parent' = undefined;




}
