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
import Constraints from './Constraints';
import InputTargetType from './InputTargetType';
import RestrictedSetValues from './RestrictedSetValues';

/**
* The SellerInputDefinition model module.
* @module client/models/SellerInputDefinition
* @version v0
*/
export default class SellerInputDefinition {
    /**
    * Constructs a new <code>SellerInputDefinition</code>.
    * Specifies characteristics that apply to a seller input.
    * @alias module:client/models/SellerInputDefinition
    * @class
    * @param isRequired {Boolean} When true, the additional input field is required.
    * @param dataType {String} The data type of the additional input field.
    * @param constraints {module:client/models/Constraints} 
    * @param inputDisplayText {String} The display text for the additional input field.
    * @param storedValue {module:client/models/AdditionalSellerInput} 
    */

    constructor(isRequired, dataType, constraints, inputDisplayText, storedValue) {
        
        
        this['IsRequired'] = isRequired;
        this['DataType'] = dataType;
        this['Constraints'] = constraints;
        this['InputDisplayText'] = inputDisplayText;
        this['StoredValue'] = storedValue;
        
    }

    /**
    * Constructs a <code>SellerInputDefinition</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/SellerInputDefinition} obj Optional instance to populate.
    * @return {module:client/models/SellerInputDefinition} The populated <code>SellerInputDefinition</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SellerInputDefinition();
                        
            
            if (data.hasOwnProperty('IsRequired')) {
                obj['IsRequired'] = ApiClient.convertToType(data['IsRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('DataType')) {
                obj['DataType'] = ApiClient.convertToType(data['DataType'], 'String');
            }
            if (data.hasOwnProperty('Constraints')) {
                obj['Constraints'] = Constraints.constructFromObject(data['Constraints']);
            }
            if (data.hasOwnProperty('InputDisplayText')) {
                obj['InputDisplayText'] = ApiClient.convertToType(data['InputDisplayText'], 'String');
            }
            if (data.hasOwnProperty('InputTarget')) {
                obj['InputTarget'] = InputTargetType.constructFromObject(data['InputTarget']);
            }
            if (data.hasOwnProperty('StoredValue')) {
                obj['StoredValue'] = AdditionalSellerInput.constructFromObject(data['StoredValue']);
            }
            if (data.hasOwnProperty('RestrictedSetValues')) {
                obj['RestrictedSetValues'] = RestrictedSetValues.constructFromObject(data['RestrictedSetValues']);
            }
        }
        return obj;
    }

    /**
    * When true, the additional input field is required.
    * @member {Boolean} IsRequired
    */
    'IsRequired' = undefined;
    /**
    * The data type of the additional input field.
    * @member {String} DataType
    */
    'DataType' = undefined;
    /**
    * @member {module:client/models/Constraints} Constraints
    */
    'Constraints' = undefined;
    /**
    * The display text for the additional input field.
    * @member {String} InputDisplayText
    */
    'InputDisplayText' = undefined;
    /**
    * @member {module:client/models/InputTargetType} InputTarget
    */
    'InputTarget' = undefined;
    /**
    * @member {module:client/models/AdditionalSellerInput} StoredValue
    */
    'StoredValue' = undefined;
    /**
    * @member {module:client/models/RestrictedSetValues} RestrictedSetValues
    */
    'RestrictedSetValues' = undefined;




}