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
import FeesEstimateResult from './FeesEstimateResult';

/**
* The GetMyFeesEstimateResult model module.
* @module client/models/GetMyFeesEstimateResult
* @version v0
*/
export default class GetMyFeesEstimateResult {
    /**
    * Constructs a new <code>GetMyFeesEstimateResult</code>.
    * Response schema.
    * @alias module:client/models/GetMyFeesEstimateResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetMyFeesEstimateResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetMyFeesEstimateResult} obj Optional instance to populate.
    * @return {module:client/models/GetMyFeesEstimateResult} The populated <code>GetMyFeesEstimateResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetMyFeesEstimateResult();
                        
            
            if (data.hasOwnProperty('FeesEstimateResult')) {
                obj['FeesEstimateResult'] = FeesEstimateResult.constructFromObject(data['FeesEstimateResult']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/FeesEstimateResult} FeesEstimateResult
    */
    'FeesEstimateResult' = undefined;




}
