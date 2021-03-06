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
import Categories from './Categories';

/**
* The ListOfCategories model module.
* @module client/models/ListOfCategories
* @version v0
*/
export default class ListOfCategories extends Array {
    /**
    * Constructs a new <code>ListOfCategories</code>.
    * @alias module:client/models/ListOfCategories
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>ListOfCategories</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ListOfCategories} obj Optional instance to populate.
    * @return {module:client/models/ListOfCategories} The populated <code>ListOfCategories</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListOfCategories();
            ApiClient.constructFromObject(data, obj, 'Categories');
            
            
        }
        return obj;
    }





}
