# SellingPartnerApiForFulfillmentOutbound.FulfillmentShipment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonShipmentId** | **String** | A shipment identifier assigned by Amazon. | 
**fulfillmentCenterId** | **String** | An identifier for the fulfillment center that the shipment will be sent from. | 
**fulfillmentShipmentStatus** | **String** | The current status of the shipment. | 
**shippingDateTime** | [**Timestamp**](Timestamp.md) |  | [optional] 
**estimatedArrivalDateTime** | [**Timestamp**](Timestamp.md) |  | [optional] 
**fulfillmentShipmentItem** | [**FulfillmentShipmentItemList**](FulfillmentShipmentItemList.md) |  | 
**fulfillmentShipmentPackage** | [**FulfillmentShipmentPackageList**](FulfillmentShipmentPackageList.md) |  | [optional] 

<a name="FulfillmentShipmentStatusEnum"></a>
## Enum: FulfillmentShipmentStatusEnum

* `PENDING` (value: `"PENDING"`)
* `SHIPPED` (value: `"SHIPPED"`)
* `CANCELLED_BY_FULFILLER` (value: `"CANCELLED_BY_FULFILLER"`)
* `CANCELLED_BY_SELLER` (value: `"CANCELLED_BY_SELLER"`)

