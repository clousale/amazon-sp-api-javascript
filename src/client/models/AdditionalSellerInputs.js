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
import AdditionalSellerInput from './AdditionalSellerInput';

/**
* The AdditionalSellerInputs model module.
* @module client/models/AdditionalSellerInputs
* @version v0
*/
export default class AdditionalSellerInputs {
    /**
    * Constructs a new <code>AdditionalSellerInputs</code>.
    * An additional set of seller inputs required to purchase shipping.
    * @alias module:client/models/AdditionalSellerInputs
    * @class
    * @param additionalInputFieldName {String} The name of the additional input field.
    * @param additionalSellerInput {module:client/models/AdditionalSellerInput} 
    */

    constructor(additionalInputFieldName, additionalSellerInput) {
        
        
        this['AdditionalInputFieldName'] = additionalInputFieldName;
        this['AdditionalSellerInput'] = additionalSellerInput;
        
    }

    /**
    * Constructs a <code>AdditionalSellerInputs</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/AdditionalSellerInputs} obj Optional instance to populate.
    * @return {module:client/models/AdditionalSellerInputs} The populated <code>AdditionalSellerInputs</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalSellerInputs();
                        
            
            if (data.hasOwnProperty('AdditionalInputFieldName')) {
                obj['AdditionalInputFieldName'] = ApiClient.convertToType(data['AdditionalInputFieldName'], 'String');
            }
            if (data.hasOwnProperty('AdditionalSellerInput')) {
                obj['AdditionalSellerInput'] = AdditionalSellerInput.constructFromObject(data['AdditionalSellerInput']);
            }
        }
        return obj;
    }

    /**
    * The name of the additional input field.
    * @member {String} AdditionalInputFieldName
    */
    'AdditionalInputFieldName' = undefined;
    /**
    * @member {module:client/models/AdditionalSellerInput} AdditionalSellerInput
    */
    'AdditionalSellerInput' = undefined;




}
