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
import CreateReportScheduleResult from './CreateReportScheduleResult';
import ErrorList from './ErrorList';

/**
* The CreateReportScheduleResponse model module.
* @module client/models/CreateReportScheduleResponse
* @version 2020-09-04
*/
export default class CreateReportScheduleResponse {
    /**
    * Constructs a new <code>CreateReportScheduleResponse</code>.
    * The response for the createReportSchedule operation.
    * @alias module:client/models/CreateReportScheduleResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateReportScheduleResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateReportScheduleResponse} obj Optional instance to populate.
    * @return {module:client/models/CreateReportScheduleResponse} The populated <code>CreateReportScheduleResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateReportScheduleResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = CreateReportScheduleResult.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/CreateReportScheduleResult} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
