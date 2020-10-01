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
import FeesEstimate from './FeesEstimate';
import FeesEstimateError from './FeesEstimateError';
import FeesEstimateIdentifier from './FeesEstimateIdentifier';

/**
* The FeesEstimateResult model module.
* @module client/models/FeesEstimateResult
* @version v0
*/
export default class FeesEstimateResult {
    /**
    * Constructs a new <code>FeesEstimateResult</code>.
    * An item identifier and the estimated fees for the item.
    * @alias module:client/models/FeesEstimateResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>FeesEstimateResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FeesEstimateResult} obj Optional instance to populate.
    * @return {module:client/models/FeesEstimateResult} The populated <code>FeesEstimateResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeesEstimateResult();
                        
            
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('FeesEstimateIdentifier')) {
                obj['FeesEstimateIdentifier'] = FeesEstimateIdentifier.constructFromObject(data['FeesEstimateIdentifier']);
            }
            if (data.hasOwnProperty('FeesEstimate')) {
                obj['FeesEstimate'] = FeesEstimate.constructFromObject(data['FeesEstimate']);
            }
            if (data.hasOwnProperty('Error')) {
                obj['Error'] = FeesEstimateError.constructFromObject(data['Error']);
            }
        }
        return obj;
    }

    /**
    * The status of the fee request. Possible values: Success, ClientError, ServiceError.
    * @member {String} Status
    */
    'Status' = undefined;
    /**
    * @member {module:client/models/FeesEstimateIdentifier} FeesEstimateIdentifier
    */
    'FeesEstimateIdentifier' = undefined;
    /**
    * @member {module:client/models/FeesEstimate} FeesEstimate
    */
    'FeesEstimate' = undefined;
    /**
    * @member {module:client/models/FeesEstimateError} Error
    */
    'Error' = undefined;




}