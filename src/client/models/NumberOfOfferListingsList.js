/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import OfferListingCountType from './OfferListingCountType';

/**
* The NumberOfOfferListingsList model module.
* @module client/models/NumberOfOfferListingsList
* @version v0
*/
export default class NumberOfOfferListingsList extends Array {
    /**
    * Constructs a new <code>NumberOfOfferListingsList</code>.
    * The number of active offer listings for the item that was submitted. The listing count is returned by condition, one for each listing condition value that is returned.
    * @alias module:client/models/NumberOfOfferListingsList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>NumberOfOfferListingsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/NumberOfOfferListingsList} obj Optional instance to populate.
    * @return {module:client/models/NumberOfOfferListingsList} The populated <code>NumberOfOfferListingsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NumberOfOfferListingsList();
            ApiClient.constructFromObject(data, obj, 'OfferListingCountType');
            
            
        }
        return obj;
    }





}