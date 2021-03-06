/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import Dimensions from './Dimensions';
import Weight from './Weight';

/**
* The Pallet model module.
* @module client/models/Pallet
* @version v0
*/
export default class Pallet {
    /**
    * Constructs a new <code>Pallet</code>.
    * Pallet information.
    * @alias module:client/models/Pallet
    * @class
    * @param dimensions {module:client/models/Dimensions} 
    * @param isStacked {Boolean} Indicates whether pallets will be stacked when carrier arrives for pick-up.
    */

    constructor(dimensions, isStacked) {
        
        
        this['Dimensions'] = dimensions;
        this['IsStacked'] = isStacked;
        
    }

    /**
    * Constructs a <code>Pallet</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Pallet} obj Optional instance to populate.
    * @return {module:client/models/Pallet} The populated <code>Pallet</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pallet();
                        
            
            if (data.hasOwnProperty('Dimensions')) {
                obj['Dimensions'] = Dimensions.constructFromObject(data['Dimensions']);
            }
            if (data.hasOwnProperty('Weight')) {
                obj['Weight'] = Weight.constructFromObject(data['Weight']);
            }
            if (data.hasOwnProperty('IsStacked')) {
                obj['IsStacked'] = ApiClient.convertToType(data['IsStacked'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/Dimensions} Dimensions
    */
    'Dimensions' = undefined;
    /**
    * @member {module:client/models/Weight} Weight
    */
    'Weight' = undefined;
    /**
    * Indicates whether pallets will be stacked when carrier arrives for pick-up.
    * @member {Boolean} IsStacked
    */
    'IsStacked' = undefined;




}
