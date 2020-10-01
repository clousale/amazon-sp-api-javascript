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
import GetSolicitationActionResponseEmbedded from './GetSolicitationActionResponseEmbedded';
import GetSolicitationActionResponseLinks from './GetSolicitationActionResponseLinks';
import SolicitationsAction from './SolicitationsAction';

/**
* The GetSolicitationActionResponse model module.
* @module client/models/GetSolicitationActionResponse
* @version v1
*/
export default class GetSolicitationActionResponse {
    /**
    * Constructs a new <code>GetSolicitationActionResponse</code>.
    * Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.
    * @alias module:client/models/GetSolicitationActionResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetSolicitationActionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetSolicitationActionResponse} obj Optional instance to populate.
    * @return {module:client/models/GetSolicitationActionResponse} The populated <code>GetSolicitationActionResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSolicitationActionResponse();
                        
            
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = GetSolicitationActionResponseLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = GetSolicitationActionResponseEmbedded.constructFromObject(data['_embedded']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = SolicitationsAction.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/GetSolicitationActionResponseLinks} _links
    */
    '_links' = undefined;
    /**
    * @member {module:client/models/GetSolicitationActionResponseEmbedded} _embedded
    */
    '_embedded' = undefined;
    /**
    * @member {module:client/models/SolicitationsAction} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}