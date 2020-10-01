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

/**
* The SellerFeedbackType model module.
* @module client/models/SellerFeedbackType
* @version v0
*/
export default class SellerFeedbackType {
    /**
    * Constructs a new <code>SellerFeedbackType</code>.
    * Information about the seller&#x27;s feedback, including the percentage of positive feedback, and the total number of ratings received.
    * @alias module:client/models/SellerFeedbackType
    * @class
    * @param feedbackCount {Number} The number of ratings received about the seller.
    */

    constructor(feedbackCount) {
        
        
        this['FeedbackCount'] = feedbackCount;
        
    }

    /**
    * Constructs a <code>SellerFeedbackType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/SellerFeedbackType} obj Optional instance to populate.
    * @return {module:client/models/SellerFeedbackType} The populated <code>SellerFeedbackType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SellerFeedbackType();
                        
            
            if (data.hasOwnProperty('SellerPositiveFeedbackRating')) {
                obj['SellerPositiveFeedbackRating'] = ApiClient.convertToType(data['SellerPositiveFeedbackRating'], 'Number');
            }
            if (data.hasOwnProperty('FeedbackCount')) {
                obj['FeedbackCount'] = ApiClient.convertToType(data['FeedbackCount'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The percentage of positive feedback for the seller in the past 365 days.
    * @member {Number} SellerPositiveFeedbackRating
    */
    'SellerPositiveFeedbackRating' = undefined;
    /**
    * The number of ratings received about the seller.
    * @member {Number} FeedbackCount
    */
    'FeedbackCount' = undefined;




}