/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import ChargeComponentList from './ChargeComponentList';

/**
* The TaxWithheldComponent model module.
* @module client/models/TaxWithheldComponent
* @version v0
*/
export default class TaxWithheldComponent {
    /**
    * Constructs a new <code>TaxWithheldComponent</code>.
    * Information about the taxes withheld.
    * @alias module:client/models/TaxWithheldComponent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>TaxWithheldComponent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/TaxWithheldComponent} obj Optional instance to populate.
    * @return {module:client/models/TaxWithheldComponent} The populated <code>TaxWithheldComponent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxWithheldComponent();
                        
            
            if (data.hasOwnProperty('TaxCollectionModel')) {
                obj['TaxCollectionModel'] = ApiClient.convertToType(data['TaxCollectionModel'], 'String');
            }
            if (data.hasOwnProperty('TaxesWithheld')) {
                obj['TaxesWithheld'] = ChargeComponentList.constructFromObject(data['TaxesWithheld']);
            }
        }
        return obj;
    }

    /**
    * The tax collection model applied to the item.  Possible values:  * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.  * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
    * @member {String} TaxCollectionModel
    */
    'TaxCollectionModel' = undefined;
    /**
    * @member {module:client/models/ChargeComponentList} TaxesWithheld
    */
    'TaxesWithheld' = undefined;




}
