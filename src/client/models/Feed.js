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
* The Feed model module.
* @module client/models/Feed
* @version 2020-09-04
*/
export default class Feed {
    /**
    * Constructs a new <code>Feed</code>.
    * @alias module:client/models/Feed
    * @class
    * @param feedId {String} The identifier for the feed. This identifier is unique only in combination with a seller ID.
    * @param feedType {String} The feed type.
    * @param createdTime {Date} The date and time when the feed was created, in ISO 8601 date time format.
    * @param processingStatus {module:client/models/Feed.ProcessingStatusEnum} The processing status of the feed.
    */

    constructor(feedId, feedType, createdTime, processingStatus) {
        
        
        this['feedId'] = feedId;
        this['feedType'] = feedType;
        this['createdTime'] = createdTime;
        this['processingStatus'] = processingStatus;
        
    }

    /**
    * Constructs a <code>Feed</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Feed} obj Optional instance to populate.
    * @return {module:client/models/Feed} The populated <code>Feed</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Feed();
                        
            
            if (data.hasOwnProperty('feedId')) {
                obj['feedId'] = ApiClient.convertToType(data['feedId'], 'String');
            }
            if (data.hasOwnProperty('feedType')) {
                obj['feedType'] = ApiClient.convertToType(data['feedType'], 'String');
            }
            if (data.hasOwnProperty('marketplaceIds')) {
                obj['marketplaceIds'] = ApiClient.convertToType(data['marketplaceIds'], ['String']);
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('processingStatus')) {
                obj['processingStatus'] = ApiClient.convertToType(data['processingStatus'], 'String');
            }
            if (data.hasOwnProperty('processingStartTime')) {
                obj['processingStartTime'] = ApiClient.convertToType(data['processingStartTime'], 'Date');
            }
            if (data.hasOwnProperty('processingEndTime')) {
                obj['processingEndTime'] = ApiClient.convertToType(data['processingEndTime'], 'Date');
            }
            if (data.hasOwnProperty('resultFeedDocumentId')) {
                obj['resultFeedDocumentId'] = ApiClient.convertToType(data['resultFeedDocumentId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The identifier for the feed. This identifier is unique only in combination with a seller ID.
    * @member {String} feedId
    */
    'feedId' = undefined;
    /**
    * The feed type.
    * @member {String} feedType
    */
    'feedType' = undefined;
    /**
    * A list of identifiers for the marketplaces that the feed is applied to.
    * @member {Array.<String>} marketplaceIds
    */
    'marketplaceIds' = undefined;
    /**
    * The date and time when the feed was created, in ISO 8601 date time format.
    * @member {Date} createdTime
    */
    'createdTime' = undefined;
    /**
    * The processing status of the feed.
    * @member {module:client/models/Feed.ProcessingStatusEnum} processingStatus
    */
    'processingStatus' = undefined;
    /**
    * The date and time when feed processing started, in ISO 8601 date time format.
    * @member {Date} processingStartTime
    */
    'processingStartTime' = undefined;
    /**
    * The date and time when feed processing completed, in ISO 8601 date time format.
    * @member {Date} processingEndTime
    */
    'processingEndTime' = undefined;
    /**
    * The identifier for the feed document. This identifier is unique only in combination with a seller ID.
    * @member {String} resultFeedDocumentId
    */
    'resultFeedDocumentId' = undefined;



    /**
    * Allowed values for the <code>processingStatus</code> property.
    * @enum {String}
    * @readonly
    */
    static ProcessingStatusEnum = {
        /**
         * value: "CANCELLED"
         * @const
         */
        "CANCELLED": "CANCELLED",
        /**
         * value: "DONE"
         * @const
         */
        "DONE": "DONE",
        /**
         * value: "FATAL"
         * @const
         */
        "FATAL": "FATAL",
        /**
         * value: "IN_PROGRESS"
         * @const
         */
        "IN_PROGRESS": "IN_PROGRESS",
        /**
         * value: "IN_QUEUE"
         * @const
         */
        "IN_QUEUE": "IN_QUEUE"    };

}
