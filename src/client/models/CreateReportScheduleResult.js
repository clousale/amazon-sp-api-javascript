/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The CreateReportScheduleResult model module.
* @module client/models/CreateReportScheduleResult
* @version 2020-09-04
*/
export default class CreateReportScheduleResult {
    /**
    * Constructs a new <code>CreateReportScheduleResult</code>.
    * @alias module:client/models/CreateReportScheduleResult
    * @class
    * @param reportScheduleId {String} The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
    */

    constructor(reportScheduleId) {
        
        
        this['reportScheduleId'] = reportScheduleId;
        
    }

    /**
    * Constructs a <code>CreateReportScheduleResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateReportScheduleResult} obj Optional instance to populate.
    * @return {module:client/models/CreateReportScheduleResult} The populated <code>CreateReportScheduleResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateReportScheduleResult();
                        
            
            if (data.hasOwnProperty('reportScheduleId')) {
                obj['reportScheduleId'] = ApiClient.convertToType(data['reportScheduleId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
    * @member {String} reportScheduleId
    */
    'reportScheduleId' = undefined;




}