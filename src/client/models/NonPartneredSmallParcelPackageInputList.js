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
import NonPartneredSmallParcelPackageInput from './NonPartneredSmallParcelPackageInput';

/**
* The NonPartneredSmallParcelPackageInputList model module.
* @module client/models/NonPartneredSmallParcelPackageInputList
* @version v0
*/
export default class NonPartneredSmallParcelPackageInputList extends Array {
    /**
    * Constructs a new <code>NonPartneredSmallParcelPackageInputList</code>.
    * A list of package tracking information.
    * @alias module:client/models/NonPartneredSmallParcelPackageInputList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>NonPartneredSmallParcelPackageInputList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/NonPartneredSmallParcelPackageInputList} obj Optional instance to populate.
    * @return {module:client/models/NonPartneredSmallParcelPackageInputList} The populated <code>NonPartneredSmallParcelPackageInputList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NonPartneredSmallParcelPackageInputList();
            ApiClient.constructFromObject(data, obj, 'NonPartneredSmallParcelPackageInput');
            
            
        }
        return obj;
    }





}