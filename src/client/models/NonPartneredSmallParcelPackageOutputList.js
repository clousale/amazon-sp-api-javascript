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
import NonPartneredSmallParcelPackageOutput from './NonPartneredSmallParcelPackageOutput';

/**
* The NonPartneredSmallParcelPackageOutputList model module.
* @module client/models/NonPartneredSmallParcelPackageOutputList
* @version v0
*/
export default class NonPartneredSmallParcelPackageOutputList extends Array {
    /**
    * Constructs a new <code>NonPartneredSmallParcelPackageOutputList</code>.
    * A list of packages, including carrier, tracking number, and status information for each package.
    * @alias module:client/models/NonPartneredSmallParcelPackageOutputList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>NonPartneredSmallParcelPackageOutputList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/NonPartneredSmallParcelPackageOutputList} obj Optional instance to populate.
    * @return {module:client/models/NonPartneredSmallParcelPackageOutputList} The populated <code>NonPartneredSmallParcelPackageOutputList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NonPartneredSmallParcelPackageOutputList();
            ApiClient.constructFromObject(data, obj, 'NonPartneredSmallParcelPackageOutput');
            
            
        }
        return obj;
    }





}