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
import FeesEstimateRequest from './FeesEstimateRequest';

/**
* The GetMyFeesEstimateRequest model module.
* @module client/models/GetMyFeesEstimateRequest
* @version v0
*/
export default class GetMyFeesEstimateRequest {
    /**
    * Constructs a new <code>GetMyFeesEstimateRequest</code>.
    * Request schema.
    * @alias module:client/models/GetMyFeesEstimateRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetMyFeesEstimateRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetMyFeesEstimateRequest} obj Optional instance to populate.
    * @return {module:client/models/GetMyFeesEstimateRequest} The populated <code>GetMyFeesEstimateRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetMyFeesEstimateRequest();
                        
            
            if (data.hasOwnProperty('FeesEstimateRequest')) {
                obj['FeesEstimateRequest'] = FeesEstimateRequest.constructFromObject(data['FeesEstimateRequest']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/FeesEstimateRequest} FeesEstimateRequest
    */
    'FeesEstimateRequest' = undefined;




}
