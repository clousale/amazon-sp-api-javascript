/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
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
import City from './City';
import CountryCode from './CountryCode';
import PostalCode from './PostalCode';
import StateOrRegion from './StateOrRegion';

/**
* The Location model module.
* @module client/models/Location
* @version v1
*/
export default class Location {
    /**
    * Constructs a new <code>Location</code>.
    * The location where the person, business or institution is located.
    * @alias module:client/models/Location
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Location} obj Optional instance to populate.
    * @return {module:client/models/Location} The populated <code>Location</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Location();
                        
            
            if (data.hasOwnProperty('stateOrRegion')) {
                obj['stateOrRegion'] = StateOrRegion.constructFromObject(data['stateOrRegion']);
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = City.constructFromObject(data['city']);
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = CountryCode.constructFromObject(data['countryCode']);
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = PostalCode.constructFromObject(data['postalCode']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/StateOrRegion} stateOrRegion
    */
    'stateOrRegion' = undefined;
    /**
    * @member {module:client/models/City} city
    */
    'city' = undefined;
    /**
    * @member {module:client/models/CountryCode} countryCode
    */
    'countryCode' = undefined;
    /**
    * @member {module:client/models/PostalCode} postalCode
    */
    'postalCode' = undefined;




}
