/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import ErrorList from './ErrorList';

/**
* The CreateProductReviewAndSellerFeedbackSolicitationResponse model module.
* @module client/models/CreateProductReviewAndSellerFeedbackSolicitationResponse
* @version v1
*/
export default class CreateProductReviewAndSellerFeedbackSolicitationResponse {
    /**
    * Constructs a new <code>CreateProductReviewAndSellerFeedbackSolicitationResponse</code>.
    * The response schema for the createProductReviewAndSellerFeedbackSolicitation operation.
    * @alias module:client/models/CreateProductReviewAndSellerFeedbackSolicitationResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateProductReviewAndSellerFeedbackSolicitationResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateProductReviewAndSellerFeedbackSolicitationResponse} obj Optional instance to populate.
    * @return {module:client/models/CreateProductReviewAndSellerFeedbackSolicitationResponse} The populated <code>CreateProductReviewAndSellerFeedbackSolicitationResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProductReviewAndSellerFeedbackSolicitationResponse();
                        
            
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
