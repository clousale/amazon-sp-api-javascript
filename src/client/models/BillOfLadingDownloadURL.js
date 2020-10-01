/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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

/**
* The BillOfLadingDownloadURL model module.
* @module client/models/BillOfLadingDownloadURL
* @version v0
*/
export default class BillOfLadingDownloadURL {
    /**
    * Constructs a new <code>BillOfLadingDownloadURL</code>.
    * @alias module:client/models/BillOfLadingDownloadURL
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>BillOfLadingDownloadURL</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/BillOfLadingDownloadURL} obj Optional instance to populate.
    * @return {module:client/models/BillOfLadingDownloadURL} The populated <code>BillOfLadingDownloadURL</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillOfLadingDownloadURL();
                        
            
            if (data.hasOwnProperty('DownloadURL')) {
                obj['DownloadURL'] = ApiClient.convertToType(data['DownloadURL'], 'String');
            }
        }
        return obj;
    }

    /**
    * URL to download the bill of lading for the package. Note: The URL will only be valid for 15 seconds
    * @member {String} DownloadURL
    */
    'DownloadURL' = undefined;




}
