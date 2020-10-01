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
import AdditionalInputsList from './AdditionalInputsList';

/**
* The ItemLevelFields model module.
* @module client/models/ItemLevelFields
* @version v0
*/
export default class ItemLevelFields {
    /**
    * Constructs a new <code>ItemLevelFields</code>.
    * @alias module:client/models/ItemLevelFields
    * @class
    * @param asin {String} The Amazon Standard Identification Number (ASIN) of the item.
    * @param additionalInputs {module:client/models/AdditionalInputsList} 
    */

    constructor(asin, additionalInputs) {
        
        
        this['Asin'] = asin;
        this['AdditionalInputs'] = additionalInputs;
        
    }

    /**
    * Constructs a <code>ItemLevelFields</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ItemLevelFields} obj Optional instance to populate.
    * @return {module:client/models/ItemLevelFields} The populated <code>ItemLevelFields</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemLevelFields();
                        
            
            if (data.hasOwnProperty('Asin')) {
                obj['Asin'] = ApiClient.convertToType(data['Asin'], 'String');
            }
            if (data.hasOwnProperty('AdditionalInputs')) {
                obj['AdditionalInputs'] = AdditionalInputsList.constructFromObject(data['AdditionalInputs']);
            }
        }
        return obj;
    }

    /**
    * The Amazon Standard Identification Number (ASIN) of the item.
    * @member {String} Asin
    */
    'Asin' = undefined;
    /**
    * @member {module:client/models/AdditionalInputsList} AdditionalInputs
    */
    'AdditionalInputs' = undefined;




}