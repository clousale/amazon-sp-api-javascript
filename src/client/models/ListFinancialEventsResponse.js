/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import ListFinancialEventsPayload from './ListFinancialEventsPayload';

/**
* The ListFinancialEventsResponse model module.
* @module client/models/ListFinancialEventsResponse
* @version v0
*/
export default class ListFinancialEventsResponse {
    /**
    * Constructs a new <code>ListFinancialEventsResponse</code>.
    * The response schema for the listFinancialEvents operation.
    * @alias module:client/models/ListFinancialEventsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ListFinancialEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ListFinancialEventsResponse} obj Optional instance to populate.
    * @return {module:client/models/ListFinancialEventsResponse} The populated <code>ListFinancialEventsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListFinancialEventsResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ListFinancialEventsPayload.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ListFinancialEventsPayload} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
