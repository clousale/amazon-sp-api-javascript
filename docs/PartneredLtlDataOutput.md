# SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**Contact**](Contact.md) |  | 
**boxCount** | [**UnsignedIntType**](UnsignedIntType.md) |  | 
**sellerFreightClass** | [**SellerFreightClass**](SellerFreightClass.md) |  | [optional] 
**freightReadyDate** | [**DateStringType**](DateStringType.md) |  | 
**palletList** | [**PalletList**](PalletList.md) |  | 
**totalWeight** | [**Weight**](Weight.md) |  | 
**sellerDeclaredValue** | [**Amount**](Amount.md) |  | [optional] 
**amazonCalculatedValue** | [**Amount**](Amount.md) |  | [optional] 
**previewPickupDate** | [**DateStringType**](DateStringType.md) |  | 
**previewDeliveryDate** | [**DateStringType**](DateStringType.md) |  | 
**previewFreightClass** | [**SellerFreightClass**](SellerFreightClass.md) |  | 
**amazonReferenceId** | **String** | A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment. | 
**isBillOfLadingAvailable** | **Boolean** | Indicates whether the bill of lading for the shipment is available. | 
**partneredEstimate** | [**PartneredEstimate**](PartneredEstimate.md) |  | [optional] 
**carrierName** | **String** | The carrier for the inbound shipment. | 
