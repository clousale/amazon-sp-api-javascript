# SellingPartnerApiForFulfillmentOutbound.CreateFulfillmentOrderRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | The marketplace the fulfillment order is placed against. | [optional] 
**sellerFulfillmentOrderId** | **String** | A fulfillment order identifier that the seller creates to track their fulfillment order. The SellerFulfillmentOrderId must be unique for each fulfillment order that a seller creates. If the seller&#x27;s system already creates unique order identifiers, then these might be good values for them to use. | 
**displayableOrderId** | **String** | A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of DisplayableOrderId should match the order identifier that the seller provides to the recipient. The seller can use the SellerFulfillmentOrderId for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.  The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed. | 
**displayableOrderDateTime** | [**Timestamp**](Timestamp.md) |  | 
**displayableOrderComment** | **String** | Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip. | 
**shippingSpeedCategory** | [**ShippingSpeedCategory**](ShippingSpeedCategory.md) |  | 
**deliveryWindow** | [**DeliveryWindow**](DeliveryWindow.md) |  | [optional] 
**destinationAddress** | [**Address**](Address.md) |  | 
**fulfillmentAction** | [**FulfillmentAction**](FulfillmentAction.md) |  | [optional] 
**fulfillmentPolicy** | [**FulfillmentPolicy**](FulfillmentPolicy.md) |  | [optional] 
**fulfillmentMethod** | **String** | Indicates the intended recipient channel for the order. | [optional] 
**cODSettings** | [**CODSettings**](CODSettings.md) |  | [optional] 
**shipFromCountryCode** | **String** | The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format. | [optional] 
**notificationEmailList** | [**NotificationEmailList**](NotificationEmailList.md) |  | [optional] 
**items** | [**CreateFulfillmentOrderItemList**](CreateFulfillmentOrderItemList.md) |  | 
