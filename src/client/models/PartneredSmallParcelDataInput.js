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
import PartneredSmallParcelPackageInputList from './PartneredSmallParcelPackageInputList';

/**
* The PartneredSmallParcelDataInput model module.
* @module client/models/PartneredSmallParcelDataInput
* @version v0
*/
export default class PartneredSmallParcelDataInput {
    /**
    * Constructs a new <code>PartneredSmallParcelDataInput</code>.
    * Information that is required by an Amazon-partnered carrier to ship a Small Parcel inbound shipment.
    * @alias module:client/models/PartneredSmallParcelDataInput
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PartneredSmallParcelDataInput</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PartneredSmallParcelDataInput} obj Optional instance to populate.
    * @return {module:client/models/PartneredSmallParcelDataInput} The populated <code>PartneredSmallParcelDataInput</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartneredSmallParcelDataInput();
                        
            
            if (data.hasOwnProperty('PackageList')) {
                obj['PackageList'] = PartneredSmallParcelPackageInputList.constructFromObject(data['PackageList']);
            }
            if (data.hasOwnProperty('CarrierName')) {
                obj['CarrierName'] = ApiClient.convertToType(data['CarrierName'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/PartneredSmallParcelPackageInputList} PackageList
    */
    'PackageList' = undefined;
    /**
    * The Amazon-partnered carrier to use for the inbound shipment.
    * @member {String} CarrierName
    */
    'CarrierName' = undefined;




}
