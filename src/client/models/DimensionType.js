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
* The DimensionType model module.
* @module client/models/DimensionType
* @version v0
*/
export default class DimensionType {
    /**
    * Constructs a new <code>DimensionType</code>.
    * The dimension type attribute of an item.
    * @alias module:client/models/DimensionType
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>DimensionType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/DimensionType} obj Optional instance to populate.
    * @return {module:client/models/DimensionType} The populated <code>DimensionType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DimensionType();
                        
            
            if (data.hasOwnProperty('Height')) {
                obj['Height'] = DecimalWithUnits.constructFromObject(data['Height']);
            }
            if (data.hasOwnProperty('Length')) {
                obj['Length'] = DecimalWithUnits.constructFromObject(data['Length']);
            }
            if (data.hasOwnProperty('Width')) {
                obj['Width'] = DecimalWithUnits.constructFromObject(data['Width']);
            }
            if (data.hasOwnProperty('Weight')) {
                obj['Weight'] = DecimalWithUnits.constructFromObject(data['Weight']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/DecimalWithUnits} Height
    */
    'Height' = undefined;
    /**
    * @member {module:client/models/DecimalWithUnits} Length
    */
    'Length' = undefined;
    /**
    * @member {module:client/models/DecimalWithUnits} Width
    */
    'Width' = undefined;
    /**
    * @member {module:client/models/DecimalWithUnits} Weight
    */
    'Weight' = undefined;




}