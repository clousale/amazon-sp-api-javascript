# SellingPartnerApiForFulfillmentOutbound.CreateFulfillmentOrderItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSKU** | **String** | The seller SKU of the item. | 
**sellerFulfillmentOrderItemId** | **String** | A fulfillment order item identifier that the seller creates to track fulfillment order items. Used to disambiguate multiple fulfillment items that have the same seller SKU. For example, the seller might assign different SellerFulfillmentOrderItemId values to two items in a fulfillment order that share the same seller SKU but have different GiftMessage values. | 
**quantity** | [**Quantity**](Quantity.md) |  | 
**giftMessage** | **String** | A message to the gift recipient, if applicable. | [optional] 
**displayableComment** | **String** | Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**fulfillmentNetworkSKU** | **String** | Amazon&#x27;s fulfillment network SKU of the item. | [optional] 
**perUnitDeclaredValue** | [**Currency**](Currency.md) |  | [optional] 
**perUnitPrice** | [**Currency**](Currency.md) |  | [optional] 
**perUnitTax** | [**Currency**](Currency.md) |  | [optional] 
