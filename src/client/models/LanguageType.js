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
* The LanguageType model module.
* @module client/models/LanguageType
* @version v0
*/
export default class LanguageType {
    /**
    * Constructs a new <code>LanguageType</code>.
    * The language type attribute of an item.
    * @alias module:client/models/LanguageType
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>LanguageType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/LanguageType} obj Optional instance to populate.
    * @return {module:client/models/LanguageType} The populated <code>LanguageType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LanguageType();
                        
            
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
            if (data.hasOwnProperty('AudioFormat')) {
                obj['AudioFormat'] = ApiClient.convertToType(data['AudioFormat'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name attribute of the item.
    * @member {String} Name
    */
    'Name' = undefined;
    /**
    * The type attribute of the item.
    * @member {String} Type
    */
    'Type' = undefined;
    /**
    * The audio format attribute of the item.
    * @member {String} AudioFormat
    */
    'AudioFormat' = undefined;




}