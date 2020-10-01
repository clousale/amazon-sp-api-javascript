# SellingPartnerApiForFulfillmentOutbound.FulfillmentOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerFulfillmentOrderId** | **String** | The fulfillment order identifier submitted with the createFulfillmentOrder operation. | 
**marketplaceId** | **String** | The identifier for the marketplace the fulfillment order is placed against. | 
**displayableOrderId** | **String** | A fulfillment order identifier submitted with the createFulfillmentOrder operation. Displays as the order identifier in recipient-facing materials such as the packing slip. | 
**displayableOrderDateTime** | [**Timestamp**](Timestamp.md) |  | 
**displayableOrderComment** | **String** | A text block submitted with the createFulfillmentOrder operation. Displays in recipient-facing materials such as the packing slip. | 
**shippingSpeedCategory** | [**ShippingSpeedCategory**](ShippingSpeedCategory.md) |  | 
**deliveryWindow** | [**DeliveryWindow**](DeliveryWindow.md) |  | [optional] 
**destinationAddress** | [**Address**](Address.md) |  | 
**fulfillmentAction** | [**FulfillmentAction**](FulfillmentAction.md) |  | [optional] 
**fulfillmentPolicy** | [**FulfillmentPolicy**](FulfillmentPolicy.md) |  | [optional] 
**fulfillmentMethod** | **String** | Indicates the intended recipient channel for the order. | [optional] 
**cODSettings** | [**CODSettings**](CODSettings.md) |  | [optional] 
**receivedDateTime** | [**Timestamp**](Timestamp.md) |  | 
**fulfillmentOrderStatus** | [**FulfillmentOrderStatus**](FulfillmentOrderStatus.md) |  | 
**statusUpdatedDateTime** | [**Timestamp**](Timestamp.md) |  | 
**notificationEmailList** | [**NotificationEmailList**](NotificationEmailList.md) |  | [optional] 
