# SellingPartnerApiForFulfillmentOutbound.FulfillmentOrderItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSKU** | **String** | The seller SKU of the item. | 
**sellerFulfillmentOrderItemId** | **String** | A fulfillment order item identifier submitted with a call to the createFulfillmentOrder operation. | 
**quantity** | [**Quantity**](Quantity.md) |  | 
**giftMessage** | **String** | A message to the gift recipient, if applicable. | [optional] 
**displayableComment** | **String** | Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**fulfillmentNetworkSKU** | **String** | Amazon&#x27;s fulfillment network SKU of the item. | [optional] 
**orderItemDisposition** | **String** | Indicates whether the item is sellable or unsellable. | [optional] 
**cancelledQuantity** | [**Quantity**](Quantity.md) |  | 
**unfulfillableQuantity** | [**Quantity**](Quantity.md) |  | 
**estimatedShipDateTime** | [**Timestamp**](Timestamp.md) |  | [optional] 
**estimatedArrivalDateTime** | [**Timestamp**](Timestamp.md) |  | [optional] 
**perUnitPrice** | [**Currency**](Currency.md) |  | [optional] 
**perUnitTax** | [**Currency**](Currency.md) |  | [optional] 
**perUnitDeclaredValue** | [**Currency**](Currency.md) |  | [optional] 
