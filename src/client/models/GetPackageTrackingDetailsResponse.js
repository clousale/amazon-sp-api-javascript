/**
 * Selling Partner API for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
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
import PackageTrackingDetails from './PackageTrackingDetails';

/**
* The GetPackageTrackingDetailsResponse model module.
* @module client/models/GetPackageTrackingDetailsResponse
* @version v0
*/
export default class GetPackageTrackingDetailsResponse {
    /**
    * Constructs a new <code>GetPackageTrackingDetailsResponse</code>.
    * The response schema for the getPackageTrackingDetails operation.
    * @alias module:client/models/GetPackageTrackingDetailsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetPackageTrackingDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetPackageTrackingDetailsResponse} obj Optional instance to populate.
    * @return {module:client/models/GetPackageTrackingDetailsResponse} The populated <code>GetPackageTrackingDetailsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPackageTrackingDetailsResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = PackageTrackingDetails.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/PackageTrackingDetails} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}