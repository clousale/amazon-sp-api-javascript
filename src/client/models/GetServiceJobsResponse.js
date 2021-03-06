/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
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
import JobListing from './JobListing';

/**
* The GetServiceJobsResponse model module.
* @module client/models/GetServiceJobsResponse
* @version v1
*/
export default class GetServiceJobsResponse {
    /**
    * Constructs a new <code>GetServiceJobsResponse</code>.
    * Response schema for GetJobs operation.
    * @alias module:client/models/GetServiceJobsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetServiceJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetServiceJobsResponse} obj Optional instance to populate.
    * @return {module:client/models/GetServiceJobsResponse} The populated <code>GetServiceJobsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetServiceJobsResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = JobListing.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/JobListing} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
