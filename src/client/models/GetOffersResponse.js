/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import GetOffersResult from './GetOffersResult';

/**
* The GetOffersResponse model module.
* @module client/models/GetOffersResponse
* @version v0
*/
export default class GetOffersResponse {
    /**
    * Constructs a new <code>GetOffersResponse</code>.
    * The response schema for the getListingOffers and getItemOffers operations.
    * @alias module:client/models/GetOffersResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetOffersResponse} obj Optional instance to populate.
    * @return {module:client/models/GetOffersResponse} The populated <code>GetOffersResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetOffersResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = GetOffersResult.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/GetOffersResult} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}