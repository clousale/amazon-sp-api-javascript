# SellingPartnerApiForFulfillmentOutbound.FulfillmentPreviewItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSKU** | **String** | The seller SKU of the item. | 
**quantity** | [**Quantity**](Quantity.md) |  | 
**sellerFulfillmentOrderItemId** | **String** | A fulfillment order item identifier that the seller created with a call to the createFulfillmentOrder operation. | 
**estimatedShippingWeight** | [**Weight**](Weight.md) |  | [optional] 
**shippingWeightCalculationMethod** | **String** | The method used to calculate EstimatedShippingWeight. | [optional] 

<a name="ShippingWeightCalculationMethodEnum"></a>
## Enum: ShippingWeightCalculationMethodEnum

* `Package` (value: `"Package"`)
* `Dimensional` (value: `"Dimensional"`)

