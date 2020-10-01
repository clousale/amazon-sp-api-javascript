/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
import PackageDimension from './PackageDimension';
import PredefinedPackageDimensions from './PredefinedPackageDimensions';
import UnitOfLength from './UnitOfLength';

/**
* The PackageDimensions model module.
* @module client/models/PackageDimensions
* @version v0
*/
export default class PackageDimensions {
    /**
    * Constructs a new <code>PackageDimensions</code>.
    * The dimensions of a package contained in a shipment.
    * @alias module:client/models/PackageDimensions
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PackageDimensions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PackageDimensions} obj Optional instance to populate.
    * @return {module:client/models/PackageDimensions} The populated <code>PackageDimensions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PackageDimensions();
                        
            
            if (data.hasOwnProperty('Length')) {
                obj['Length'] = PackageDimension.constructFromObject(data['Length']);
            }
            if (data.hasOwnProperty('Width')) {
                obj['Width'] = PackageDimension.constructFromObject(data['Width']);
            }
            if (data.hasOwnProperty('Height')) {
                obj['Height'] = PackageDimension.constructFromObject(data['Height']);
            }
            if (data.hasOwnProperty('Unit')) {
                obj['Unit'] = UnitOfLength.constructFromObject(data['Unit']);
            }
            if (data.hasOwnProperty('PredefinedPackageDimensions')) {
                obj['PredefinedPackageDimensions'] = PredefinedPackageDimensions.constructFromObject(data['PredefinedPackageDimensions']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/PackageDimension} Length
    */
    'Length' = undefined;
    /**
    * @member {module:client/models/PackageDimension} Width
    */
    'Width' = undefined;
    /**
    * @member {module:client/models/PackageDimension} Height
    */
    'Height' = undefined;
    /**
    * @member {module:client/models/UnitOfLength} Unit
    */
    'Unit' = undefined;
    /**
    * @member {module:client/models/PredefinedPackageDimensions} PredefinedPackageDimensions
    */
    'PredefinedPackageDimensions' = undefined;




}
