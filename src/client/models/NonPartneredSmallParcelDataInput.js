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
import NonPartneredSmallParcelPackageInputList from './NonPartneredSmallParcelPackageInputList';

/**
* The NonPartneredSmallParcelDataInput model module.
* @module client/models/NonPartneredSmallParcelDataInput
* @version v0
*/
export default class NonPartneredSmallParcelDataInput {
    /**
    * Constructs a new <code>NonPartneredSmallParcelDataInput</code>.
    * Information that you provide to Amazon about a Small Parcel shipment shipped by a carrier that has not partnered with Amazon.
    * @alias module:client/models/NonPartneredSmallParcelDataInput
    * @class
    * @param carrierName {String} The carrier that you are using for the inbound shipment.
    * @param packageList {module:client/models/NonPartneredSmallParcelPackageInputList} 
    */

    constructor(carrierName, packageList) {
        
        
        this['CarrierName'] = carrierName;
        this['PackageList'] = packageList;
        
    }

    /**
    * Constructs a <code>NonPartneredSmallParcelDataInput</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/NonPartneredSmallParcelDataInput} obj Optional instance to populate.
    * @return {module:client/models/NonPartneredSmallParcelDataInput} The populated <code>NonPartneredSmallParcelDataInput</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NonPartneredSmallParcelDataInput();
                        
            
            if (data.hasOwnProperty('CarrierName')) {
                obj['CarrierName'] = ApiClient.convertToType(data['CarrierName'], 'String');
            }
            if (data.hasOwnProperty('PackageList')) {
                obj['PackageList'] = NonPartneredSmallParcelPackageInputList.constructFromObject(data['PackageList']);
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
    * @member {module:client/models/NonPartneredSmallParcelPackageInputList} PackageList
    */
    'PackageList' = undefined;




}