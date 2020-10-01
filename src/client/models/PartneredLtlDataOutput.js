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
import Amount from './Amount';
import Contact from './Contact';
import DateStringType from './DateStringType';
import PalletList from './PalletList';
import PartneredEstimate from './PartneredEstimate';
import SellerFreightClass from './SellerFreightClass';
import UnsignedIntType from './UnsignedIntType';
import Weight from './Weight';

/**
* The PartneredLtlDataOutput model module.
* @module client/models/PartneredLtlDataOutput
* @version v0
*/
export default class PartneredLtlDataOutput {
    /**
    * Constructs a new <code>PartneredLtlDataOutput</code>.
    * Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by an Amazon-partnered carrier.
    * @alias module:client/models/PartneredLtlDataOutput
    * @class
    * @param contact {module:client/models/Contact} 
    * @param boxCount {module:client/models/UnsignedIntType} 
    * @param freightReadyDate {module:client/models/DateStringType} 
    * @param palletList {module:client/models/PalletList} 
    * @param totalWeight {module:client/models/Weight} 
    * @param previewPickupDate {module:client/models/DateStringType} 
    * @param previewDeliveryDate {module:client/models/DateStringType} 
    * @param previewFreightClass {module:client/models/SellerFreightClass} 
    * @param amazonReferenceId {String} A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment.
    * @param isBillOfLadingAvailable {Boolean} Indicates whether the bill of lading for the shipment is available.
    * @param carrierName {String} The carrier for the inbound shipment.
    */

    constructor(contact, boxCount, freightReadyDate, palletList, totalWeight, previewPickupDate, previewDeliveryDate, previewFreightClass, amazonReferenceId, isBillOfLadingAvailable, carrierName) {
        
        
        this['Contact'] = contact;
        this['BoxCount'] = boxCount;
        this['FreightReadyDate'] = freightReadyDate;
        this['PalletList'] = palletList;
        this['TotalWeight'] = totalWeight;
        this['PreviewPickupDate'] = previewPickupDate;
        this['PreviewDeliveryDate'] = previewDeliveryDate;
        this['PreviewFreightClass'] = previewFreightClass;
        this['AmazonReferenceId'] = amazonReferenceId;
        this['IsBillOfLadingAvailable'] = isBillOfLadingAvailable;
        this['CarrierName'] = carrierName;
        
    }

    /**
    * Constructs a <code>PartneredLtlDataOutput</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PartneredLtlDataOutput} obj Optional instance to populate.
    * @return {module:client/models/PartneredLtlDataOutput} The populated <code>PartneredLtlDataOutput</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartneredLtlDataOutput();
                        
            
            if (data.hasOwnProperty('Contact')) {
                obj['Contact'] = Contact.constructFromObject(data['Contact']);
            }
            if (data.hasOwnProperty('BoxCount')) {
                obj['BoxCount'] = UnsignedIntType.constructFromObject(data['BoxCount']);
            }
            if (data.hasOwnProperty('SellerFreightClass')) {
                obj['SellerFreightClass'] = SellerFreightClass.constructFromObject(data['SellerFreightClass']);
            }
            if (data.hasOwnProperty('FreightReadyDate')) {
                obj['FreightReadyDate'] = DateStringType.constructFromObject(data['FreightReadyDate']);
            }
            if (data.hasOwnProperty('PalletList')) {
                obj['PalletList'] = PalletList.constructFromObject(data['PalletList']);
            }
            if (data.hasOwnProperty('TotalWeight')) {
                obj['TotalWeight'] = Weight.constructFromObject(data['TotalWeight']);
            }
            if (data.hasOwnProperty('SellerDeclaredValue')) {
                obj['SellerDeclaredValue'] = Amount.constructFromObject(data['SellerDeclaredValue']);
            }
            if (data.hasOwnProperty('AmazonCalculatedValue')) {
                obj['AmazonCalculatedValue'] = Amount.constructFromObject(data['AmazonCalculatedValue']);
            }
            if (data.hasOwnProperty('PreviewPickupDate')) {
                obj['PreviewPickupDate'] = DateStringType.constructFromObject(data['PreviewPickupDate']);
            }
            if (data.hasOwnProperty('PreviewDeliveryDate')) {
                obj['PreviewDeliveryDate'] = DateStringType.constructFromObject(data['PreviewDeliveryDate']);
            }
            if (data.hasOwnProperty('PreviewFreightClass')) {
                obj['PreviewFreightClass'] = SellerFreightClass.constructFromObject(data['PreviewFreightClass']);
            }
            if (data.hasOwnProperty('AmazonReferenceId')) {
                obj['AmazonReferenceId'] = ApiClient.convertToType(data['AmazonReferenceId'], 'String');
            }
            if (data.hasOwnProperty('IsBillOfLadingAvailable')) {
                obj['IsBillOfLadingAvailable'] = ApiClient.convertToType(data['IsBillOfLadingAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('PartneredEstimate')) {
                obj['PartneredEstimate'] = PartneredEstimate.constructFromObject(data['PartneredEstimate']);
            }
            if (data.hasOwnProperty('CarrierName')) {
                obj['CarrierName'] = ApiClient.convertToType(data['CarrierName'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/Contact} Contact
    */
    'Contact' = undefined;
    /**
    * @member {module:client/models/UnsignedIntType} BoxCount
    */
    'BoxCount' = undefined;
    /**
    * @member {module:client/models/SellerFreightClass} SellerFreightClass
    */
    'SellerFreightClass' = undefined;
    /**
    * @member {module:client/models/DateStringType} FreightReadyDate
    */
    'FreightReadyDate' = undefined;
    /**
    * @member {module:client/models/PalletList} PalletList
    */
    'PalletList' = undefined;
    /**
    * @member {module:client/models/Weight} TotalWeight
    */
    'TotalWeight' = undefined;
    /**
    * @member {module:client/models/Amount} SellerDeclaredValue
    */
    'SellerDeclaredValue' = undefined;
    /**
    * @member {module:client/models/Amount} AmazonCalculatedValue
    */
    'AmazonCalculatedValue' = undefined;
    /**
    * @member {module:client/models/DateStringType} PreviewPickupDate
    */
    'PreviewPickupDate' = undefined;
    /**
    * @member {module:client/models/DateStringType} PreviewDeliveryDate
    */
    'PreviewDeliveryDate' = undefined;
    /**
    * @member {module:client/models/SellerFreightClass} PreviewFreightClass
    */
    'PreviewFreightClass' = undefined;
    /**
    * A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment.
    * @member {String} AmazonReferenceId
    */
    'AmazonReferenceId' = undefined;
    /**
    * Indicates whether the bill of lading for the shipment is available.
    * @member {Boolean} IsBillOfLadingAvailable
    */
    'IsBillOfLadingAvailable' = undefined;
    /**
    * @member {module:client/models/PartneredEstimate} PartneredEstimate
    */
    'PartneredEstimate' = undefined;
    /**
    * The carrier for the inbound shipment.
    * @member {String} CarrierName
    */
    'CarrierName' = undefined;




}