# SellingPartnerApiForFulfillmentInbound.InboundShipmentItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipmentId** | **String** | A shipment identifier originally returned by the createInboundShipmentPlan operation. | [optional] 
**sellerSKU** | **String** | The seller SKU of the item. | 
**fulfillmentNetworkSKU** | **String** | Amazon&#x27;s fulfillment network SKU of the item. | [optional] 
**quantityShipped** | [**Quantity**](Quantity.md) |  | 
**quantityReceived** | [**Quantity**](Quantity.md) |  | [optional] 
**quantityInCase** | [**Quantity**](Quantity.md) |  | [optional] 
**releaseDate** | [**DateStringType**](DateStringType.md) |  | [optional] 
**prepDetailsList** | [**PrepDetailsList**](PrepDetailsList.md) |  | [optional] 
