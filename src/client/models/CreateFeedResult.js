/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * OpenAPI spec version: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The CreateFeedResult model module.
* @module client/models/CreateFeedResult
* @version 2020-09-04
*/
export default class CreateFeedResult {
    /**
    * Constructs a new <code>CreateFeedResult</code>.
    * @alias module:client/models/CreateFeedResult
    * @class
    * @param feedId {String} The identifier for the feed. This identifier is unique only in combination with a seller ID.
    */

    constructor(feedId) {
        
        
        this['feedId'] = feedId;
        
    }

    /**
    * Constructs a <code>CreateFeedResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateFeedResult} obj Optional instance to populate.
    * @return {module:client/models/CreateFeedResult} The populated <code>CreateFeedResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFeedResult();
                        
            
            if (data.hasOwnProperty('feedId')) {
                obj['feedId'] = ApiClient.convertToType(data['feedId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The identifier for the feed. This identifier is unique only in combination with a seller ID.
    * @member {String} feedId
    */
    'feedId' = undefined;




}
