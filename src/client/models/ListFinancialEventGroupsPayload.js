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
import FinancialEventGroupList from './FinancialEventGroupList';

/**
* The ListFinancialEventGroupsPayload model module.
* @module client/models/ListFinancialEventGroupsPayload
* @version v0
*/
export default class ListFinancialEventGroupsPayload {
    /**
    * Constructs a new <code>ListFinancialEventGroupsPayload</code>.
    * The payload for the listFinancialEventGroups operation.
    * @alias module:client/models/ListFinancialEventGroupsPayload
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ListFinancialEventGroupsPayload</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ListFinancialEventGroupsPayload} obj Optional instance to populate.
    * @return {module:client/models/ListFinancialEventGroupsPayload} The populated <code>ListFinancialEventGroupsPayload</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListFinancialEventGroupsPayload();
                        
            
            if (data.hasOwnProperty('NextToken')) {
                obj['NextToken'] = ApiClient.convertToType(data['NextToken'], 'String');
            }
            if (data.hasOwnProperty('FinancialEventGroupList')) {
                obj['FinancialEventGroupList'] = FinancialEventGroupList.constructFromObject(data['FinancialEventGroupList']);
            }
        }
        return obj;
    }

    /**
    * When present and not empty, pass this string token in the next request to return the next response page.
    * @member {String} NextToken
    */
    'NextToken' = undefined;
    /**
    * @member {module:client/models/FinancialEventGroupList} FinancialEventGroupList
    */
    'FinancialEventGroupList' = undefined;




}
