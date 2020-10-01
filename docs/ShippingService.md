# SellingPartnerApiForMerchantFulfillment.ShippingService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingServiceName** | **String** | A plain text representation of a carrier&#x27;s shipping service. For example, \&quot;UPS Ground\&quot; or \&quot;FedEx Standard Overnight\&quot;.  | 
**carrierName** | **String** | The name of the carrier. | 
**shippingServiceId** | [**ShippingServiceIdentifier**](ShippingServiceIdentifier.md) |  | 
**shippingServiceOfferId** | **String** | An Amazon-defined shipping service offer identifier. | 
**shipDate** | [**Timestamp**](Timestamp.md) |  | 
**earliestEstimatedDeliveryDate** | [**Timestamp**](Timestamp.md) |  | [optional] 
**latestEstimatedDeliveryDate** | [**Timestamp**](Timestamp.md) |  | [optional] 
**rate** | [**CurrencyAmount**](CurrencyAmount.md) |  | 
**shippingServiceOptions** | [**ShippingServiceOptions**](ShippingServiceOptions.md) |  | 
**availableShippingServiceOptions** | [**AvailableShippingServiceOptions**](AvailableShippingServiceOptions.md) |  | [optional] 
**availableLabelFormats** | [**LabelFormatList**](LabelFormatList.md) |  | [optional] 
**availableFormatOptionsForLabel** | [**AvailableFormatOptionsForLabelList**](AvailableFormatOptionsForLabelList.md) |  | [optional] 
**requiresAdditionalSellerInputs** | **Boolean** | When true, additional seller inputs are required. | 
