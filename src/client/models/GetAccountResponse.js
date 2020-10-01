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
import Account from './Account';
import ErrorList from './ErrorList';

/**
* The GetAccountResponse model module.
* @module client/models/GetAccountResponse
* @version v1
*/
export default class GetAccountResponse {
    /**
    * Constructs a new <code>GetAccountResponse</code>.
    * The response schema for the getAccount operation.
    * @alias module:client/models/GetAccountResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetAccountResponse} obj Optional instance to populate.
    * @return {module:client/models/GetAccountResponse} The populated <code>GetAccountResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = Account.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/Account} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
