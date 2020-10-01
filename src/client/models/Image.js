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
import DecimalWithUnits from './DecimalWithUnits';

/**
* The Image model module.
* @module client/models/Image
* @version v0
*/
export default class Image {
    /**
    * Constructs a new <code>Image</code>.
    * The image attribute of the item.
    * @alias module:client/models/Image
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Image} obj Optional instance to populate.
    * @return {module:client/models/Image} The populated <code>Image</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();
                        
            
            if (data.hasOwnProperty('URL')) {
                obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
            }
            if (data.hasOwnProperty('Height')) {
                obj['Height'] = DecimalWithUnits.constructFromObject(data['Height']);
            }
            if (data.hasOwnProperty('Width')) {
                obj['Width'] = DecimalWithUnits.constructFromObject(data['Width']);
            }
        }
        return obj;
    }

    /**
    * The image URL attribute of the item.
    * @member {String} URL
    */
    'URL' = undefined;
    /**
    * @member {module:client/models/DecimalWithUnits} Height
    */
    'Height' = undefined;
    /**
    * @member {module:client/models/DecimalWithUnits} Width
    */
    'Width' = undefined;




}