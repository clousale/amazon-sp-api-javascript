/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ErrorList from './ErrorList';
import PurchaseLabelsResult from './PurchaseLabelsResult';

/**
* The PurchaseLabelsResponse model module.
* @module client/models/PurchaseLabelsResponse
* @version v1
*/
export default class PurchaseLabelsResponse {
    /**
    * Constructs a new <code>PurchaseLabelsResponse</code>.
    * The response schema for the purchaseLabels operation.
    * @alias module:client/models/PurchaseLabelsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PurchaseLabelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PurchaseLabelsResponse} obj Optional instance to populate.
    * @return {module:client/models/PurchaseLabelsResponse} The populated <code>PurchaseLabelsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseLabelsResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = PurchaseLabelsResult.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/PurchaseLabelsResult} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
