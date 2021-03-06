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

/**
* The Error model module.
* @module client/models/Error
* @version v1
*/
export default class Error {
    /**
    * Constructs a new <code>Error</code>.
    * Error response returned when the request is unsuccessful.
    * @alias module:client/models/Error
    * @class
    * @param code {String} An error code that identifies the type of error that occurred.
    * @param message {String} A message that describes the error condition in a human-readable form.
    */

    constructor(code, message) {
        
        
        this['code'] = code;
        this['message'] = message;
        
    }

    /**
    * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Error} obj Optional instance to populate.
    * @return {module:client/models/Error} The populated <code>Error</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();
                        
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
        }
        return obj;
    }

    /**
    * An error code that identifies the type of error that occurred.
    * @member {String} code
    */
    'code' = undefined;
    /**
    * A message that describes the error condition in a human-readable form.
    * @member {String} message
    */
    'message' = undefined;
    /**
    * Additional details that can help the caller understand or fix the issue.
    * @member {String} details
    */
    'details' = undefined;




}
