/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import FeesEstimateErrorDetail from './FeesEstimateErrorDetail';

/**
* The FeesEstimateError model module.
* @module client/models/FeesEstimateError
* @version v0
*/
export default class FeesEstimateError {
    /**
    * Constructs a new <code>FeesEstimateError</code>.
    * An unexpected error occurred during this operation.
    * @alias module:client/models/FeesEstimateError
    * @class
    * @param type {String} An error type, identifying either the receiver or the sender as the originator of the error.
    * @param code {String} An error code that identifies the type of error that occurred.
    * @param message {String} A message that describes the error condition in a human-readable form.
    * @param detail {module:client/models/FeesEstimateErrorDetail} 
    */

    constructor(type, code, message, detail) {
        
        
        this['Type'] = type;
        this['Code'] = code;
        this['Message'] = message;
        this['Detail'] = detail;
        
    }

    /**
    * Constructs a <code>FeesEstimateError</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FeesEstimateError} obj Optional instance to populate.
    * @return {module:client/models/FeesEstimateError} The populated <code>FeesEstimateError</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeesEstimateError();
                        
            
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
            }
            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
            if (data.hasOwnProperty('Detail')) {
                obj['Detail'] = FeesEstimateErrorDetail.constructFromObject(data['Detail']);
            }
        }
        return obj;
    }

    /**
    * An error type, identifying either the receiver or the sender as the originator of the error.
    * @member {String} Type
    */
    'Type' = undefined;
    /**
    * An error code that identifies the type of error that occurred.
    * @member {String} Code
    */
    'Code' = undefined;
    /**
    * A message that describes the error condition in a human-readable form.
    * @member {String} Message
    */
    'Message' = undefined;
    /**
    * @member {module:client/models/FeesEstimateErrorDetail} Detail
    */
    'Detail' = undefined;




}