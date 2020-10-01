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
* The TaxCollection model module.
* @module client/models/TaxCollection
* @version v0
*/
export default class TaxCollection {
    /**
    * Constructs a new <code>TaxCollection</code>.
    * Information about withheld taxes.
    * @alias module:client/models/TaxCollection
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>TaxCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/TaxCollection} obj Optional instance to populate.
    * @return {module:client/models/TaxCollection} The populated <code>TaxCollection</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxCollection();
                        
            
            if (data.hasOwnProperty('Model')) {
                obj['Model'] = ApiClient.convertToType(data['Model'], 'String');
            }
            if (data.hasOwnProperty('ResponsibleParty')) {
                obj['ResponsibleParty'] = ApiClient.convertToType(data['ResponsibleParty'], 'String');
            }
        }
        return obj;
    }

    /**
    * The tax collection model applied to the item.
    * @member {module:client/models/TaxCollection.ModelEnum} Model
    */
    'Model' = undefined;
    /**
    * The party responsible for withholding the taxes and remitting them to the taxing authority.
    * @member {module:client/models/TaxCollection.ResponsiblePartyEnum} ResponsibleParty
    */
    'ResponsibleParty' = undefined;



    /**
    * Allowed values for the <code>Model</code> property.
    * @enum {String}
    * @readonly
    */
    static ModelEnum = {
        /**
         * value: "MarketplaceFacilitator"
         * @const
         */
        "MarketplaceFacilitator": "MarketplaceFacilitator"    };
    /**
    * Allowed values for the <code>ResponsibleParty</code> property.
    * @enum {String}
    * @readonly
    */
    static ResponsiblePartyEnum = {
        /**
         * value: "Amazon Services, Inc."
         * @const
         */
        "Amazon Services, Inc.": "Amazon Services, Inc."    };

}
