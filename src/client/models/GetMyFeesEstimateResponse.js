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
import ErrorList from './ErrorList';
import GetMyFeesEstimateResult from './GetMyFeesEstimateResult';

/**
* The GetMyFeesEstimateResponse model module.
* @module client/models/GetMyFeesEstimateResponse
* @version v0
*/
export default class GetMyFeesEstimateResponse {
    /**
    * Constructs a new <code>GetMyFeesEstimateResponse</code>.
    * @alias module:client/models/GetMyFeesEstimateResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetMyFeesEstimateResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetMyFeesEstimateResponse} obj Optional instance to populate.
    * @return {module:client/models/GetMyFeesEstimateResponse} The populated <code>GetMyFeesEstimateResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetMyFeesEstimateResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = GetMyFeesEstimateResult.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/GetMyFeesEstimateResult} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
