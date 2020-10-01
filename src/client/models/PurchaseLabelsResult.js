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
import AcceptedRate from './AcceptedRate';
import ClientReferenceId from './ClientReferenceId';
import LabelResultList from './LabelResultList';
import ShipmentId from './ShipmentId';

/**
* The PurchaseLabelsResult model module.
* @module client/models/PurchaseLabelsResult
* @version v1
*/
export default class PurchaseLabelsResult {
    /**
    * Constructs a new <code>PurchaseLabelsResult</code>.
    * The payload schema for the purchaseLabels operation.
    * @alias module:client/models/PurchaseLabelsResult
    * @class
    * @param shipmentId {module:client/models/ShipmentId} 
    * @param acceptedRate {module:client/models/AcceptedRate} 
    * @param labelResults {module:client/models/LabelResultList} 
    */

    constructor(shipmentId, acceptedRate, labelResults) {
        
        
        this['shipmentId'] = shipmentId;
        this['acceptedRate'] = acceptedRate;
        this['labelResults'] = labelResults;
        
    }

    /**
    * Constructs a <code>PurchaseLabelsResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PurchaseLabelsResult} obj Optional instance to populate.
    * @return {module:client/models/PurchaseLabelsResult} The populated <code>PurchaseLabelsResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseLabelsResult();
                        
            
            if (data.hasOwnProperty('shipmentId')) {
                obj['shipmentId'] = ShipmentId.constructFromObject(data['shipmentId']);
            }
            if (data.hasOwnProperty('clientReferenceId')) {
                obj['clientReferenceId'] = ClientReferenceId.constructFromObject(data['clientReferenceId']);
            }
            if (data.hasOwnProperty('acceptedRate')) {
                obj['acceptedRate'] = AcceptedRate.constructFromObject(data['acceptedRate']);
            }
            if (data.hasOwnProperty('labelResults')) {
                obj['labelResults'] = LabelResultList.constructFromObject(data['labelResults']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ShipmentId} shipmentId
    */
    'shipmentId' = undefined;
    /**
    * @member {module:client/models/ClientReferenceId} clientReferenceId
    */
    'clientReferenceId' = undefined;
    /**
    * @member {module:client/models/AcceptedRate} acceptedRate
    */
    'acceptedRate' = undefined;
    /**
    * @member {module:client/models/LabelResultList} labelResults
    */
    'labelResults' = undefined;




}