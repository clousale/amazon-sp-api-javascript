# SellingPartnerApiForServices.AssociatedItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**title** | **String** | The title of the item. | [optional] 
**quantity** | **Number** | The total number of items included in the order. | [optional] 
**orderId** | [**OrderId**](OrderId.md) |  | [optional] 
**itemStatus** | **String** | The status of the item. | [optional] 
**brandName** | **String** | The brand name of the item. | [optional] 
**itemDelivery** | [**ItemDelivery**](ItemDelivery.md) |  | [optional] 

<a name="ItemStatusEnum"></a>
## Enum: ItemStatusEnum

* `ACTIVE` (value: `"ACTIVE"`)
* `CANCELLED` (value: `"CANCELLED"`)
* `SHIPPED` (value: `"SHIPPED"`)
* `DELIVERED` (value: `"DELIVERED"`)

