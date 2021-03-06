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

/**
* The CancelServiceJobByServiceJobIdResponse model module.
* @module client/models/CancelServiceJobByServiceJobIdResponse
* @version v1
*/
export default class CancelServiceJobByServiceJobIdResponse {
    /**
    * Constructs a new <code>CancelServiceJobByServiceJobIdResponse</code>.
    * Response schema for CancelServiceJobByServiceJobId operation.
    * @alias module:client/models/CancelServiceJobByServiceJobIdResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CancelServiceJobByServiceJobIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CancelServiceJobByServiceJobIdResponse} obj Optional instance to populate.
    * @return {module:client/models/CancelServiceJobByServiceJobIdResponse} The populated <code>CancelServiceJobByServiceJobIdResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CancelServiceJobByServiceJobIdResponse();
                        
            
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
