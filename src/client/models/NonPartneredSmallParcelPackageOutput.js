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
import PackageStatus from './PackageStatus';
import TrackingId from './TrackingId';

/**
* The NonPartneredSmallParcelPackageOutput model module.
* @module client/models/NonPartneredSmallParcelPackageOutput
* @version v0
*/
export default class NonPartneredSmallParcelPackageOutput {
    /**
    * Constructs a new <code>NonPartneredSmallParcelPackageOutput</code>.
    * Carrier, tracking number, and status information for the package.
    * @alias module:client/models/NonPartneredSmallParcelPackageOutput
    * @class
    * @param carrierName {String} The carrier that you are using for the inbound shipment.
    * @param trackingId {module:client/models/TrackingId} 
    * @param packageStatus {module:client/models/PackageStatus} 
    */

    constructor(carrierName, trackingId, packageStatus) {
        
        
        this['CarrierName'] = carrierName;
        this['TrackingId'] = trackingId;
        this['PackageStatus'] = packageStatus;
        
    }

    /**
    * Constructs a <code>NonPartneredSmallParcelPackageOutput</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/NonPartneredSmallParcelPackageOutput} obj Optional instance to populate.
    * @return {module:client/models/NonPartneredSmallParcelPackageOutput} The populated <code>NonPartneredSmallParcelPackageOutput</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NonPartneredSmallParcelPackageOutput();
                        
            
            if (data.hasOwnProperty('CarrierName')) {
                obj['CarrierName'] = ApiClient.convertToType(data['CarrierName'], 'String');
            }
            if (data.hasOwnProperty('TrackingId')) {
                obj['TrackingId'] = TrackingId.constructFromObject(data['TrackingId']);
            }
            if (data.hasOwnProperty('PackageStatus')) {
                obj['PackageStatus'] = PackageStatus.constructFromObject(data['PackageStatus']);
            }
        }
        return obj;
    }

    /**
    * The carrier that you are using for the inbound shipment.
    * @member {String} CarrierName
    */
    'CarrierName' = undefined;
    /**
    * @member {module:client/models/TrackingId} TrackingId
    */
    'TrackingId' = undefined;
    /**
    * @member {module:client/models/PackageStatus} PackageStatus
    */
    'PackageStatus' = undefined;




}
