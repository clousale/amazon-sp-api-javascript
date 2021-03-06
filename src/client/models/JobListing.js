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
import ServiceJob from './ServiceJob';

/**
* The JobListing model module.
* @module client/models/JobListing
* @version v1
*/
export default class JobListing {
    /**
    * Constructs a new <code>JobListing</code>.
    * The payload for the GetJobs operation.
    * @alias module:client/models/JobListing
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>JobListing</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/JobListing} obj Optional instance to populate.
    * @return {module:client/models/JobListing} The populated <code>JobListing</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobListing();
                        
            
            if (data.hasOwnProperty('totalResultSize')) {
                obj['totalResultSize'] = ApiClient.convertToType(data['totalResultSize'], 'Number');
            }
            if (data.hasOwnProperty('nextPageToken')) {
                obj['nextPageToken'] = ApiClient.convertToType(data['nextPageToken'], 'String');
            }
            if (data.hasOwnProperty('previousPageToken')) {
                obj['previousPageToken'] = ApiClient.convertToType(data['previousPageToken'], 'String');
            }
            if (data.hasOwnProperty('jobs')) {
                obj['jobs'] = ApiClient.convertToType(data['jobs'], [ServiceJob]);
            }
        }
        return obj;
    }

    /**
    * Total result size of the query result.
    * @member {Number} totalResultSize
    */
    'totalResultSize' = undefined;
    /**
    * A generated string used to pass information to your next request.If nextPageToken is returned, pass the value of nextPageToken to the pageToken to get next results.
    * @member {String} nextPageToken
    */
    'nextPageToken' = undefined;
    /**
    * A generated string used to pass information to your next request.If previousPageToken is returned, pass the value of previousPageToken to the pageToken to get previous page results.
    * @member {String} previousPageToken
    */
    'previousPageToken' = undefined;
    /**
    * List of job details for the given input.
    * @member {Array.<module:client/models/ServiceJob>} jobs
    */
    'jobs' = undefined;




}
