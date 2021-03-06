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
import TrackingId from './TrackingId';

/**
* The NonPartneredSmallParcelPackageInput model module.
* @module client/models/NonPartneredSmallParcelPackageInput
* @version v0
*/
export default class NonPartneredSmallParcelPackageInput {
    /**
    * Constructs a new <code>NonPartneredSmallParcelPackageInput</code>.
    * The tracking number of the package, provided by the carrier.
    * @alias module:client/models/NonPartneredSmallParcelPackageInput
    * @class
    * @param trackingId {module:client/models/TrackingId} 
    */

    constructor(trackingId) {
        
        
        this['TrackingId'] = trackingId;
        
    }

    /**
    * Constructs a <code>NonPartneredSmallParcelPackageInput</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/NonPartneredSmallParcelPackageInput} obj Optional instance to populate.
    * @return {module:client/models/NonPartneredSmallParcelPackageInput} The populated <code>NonPartneredSmallParcelPackageInput</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NonPartneredSmallParcelPackageInput();
                        
            
            if (data.hasOwnProperty('TrackingId')) {
                obj['TrackingId'] = TrackingId.constructFromObject(data['TrackingId']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/TrackingId} TrackingId
    */
    'TrackingId' = undefined;




}
