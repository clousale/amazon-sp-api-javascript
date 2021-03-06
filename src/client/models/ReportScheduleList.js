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
import ReportSchedule from './ReportSchedule';

/**
* The ReportScheduleList model module.
* @module client/models/ReportScheduleList
* @version 2020-09-04
*/
export default class ReportScheduleList extends Array {
    /**
    * Constructs a new <code>ReportScheduleList</code>.
    * @alias module:client/models/ReportScheduleList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>ReportScheduleList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ReportScheduleList} obj Optional instance to populate.
    * @return {module:client/models/ReportScheduleList} The populated <code>ReportScheduleList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportScheduleList();
            ApiClient.constructFromObject(data, obj, 'ReportSchedule');
            
            
        }
        return obj;
    }





}
