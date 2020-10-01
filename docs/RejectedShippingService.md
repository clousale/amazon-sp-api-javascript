# SellingPartnerApiForMerchantFulfillment.RejectedShippingService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrierName** | **String** | The rejected shipping carrier name. e.g. USPS | 
**shippingServiceName** | **String** | The rejected shipping service localized name. e.g. FedEx Standard Overnight | 
**shippingServiceId** | [**ShippingServiceIdentifier**](ShippingServiceIdentifier.md) |  | 
**rejectionReasonCode** | **String** | A reason code meant to be consumed programatically. e.g. CARRIER_CANNOT_SHIP_TO_POBOX | 
**rejectionReasonMessage** | **String** | A localized human readable description of the rejected reason. | [optional] 
