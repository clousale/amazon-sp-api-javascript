# SellingPartnerApiForOrders.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonOrderId** | **String** | An Amazon-defined order identifier, in 3-7-7 format. | 
**sellerOrderId** | **String** | A seller-defined order identifier. | [optional] 
**purchaseDate** | **String** | The date when the order was created. | 
**lastUpdateDate** | **String** | The date when the order was last updated.  Note: LastUpdateDate is returned with an incorrect date for orders that were last updated before 2009-04-01. | 
**orderStatus** | **String** | The current order status. | 
**fulfillmentChannel** | **String** | Whether the order was fulfilled by Amazon (AFN) or by the seller (MFN). | [optional] 
**salesChannel** | **String** | The sales channel of the first item in the order. | [optional] 
**orderChannel** | **String** | The order channel of the first item in the order. | [optional] 
**shipServiceLevel** | **String** | The shipment service level of the order. | [optional] 
**orderTotal** | [**Money**](Money.md) |  | [optional] 
**numberOfItemsShipped** | **Number** | The number of items shipped. | [optional] 
**numberOfItemsUnshipped** | **Number** | The number of items unshipped. | [optional] 
**paymentExecutionDetail** | [**PaymentExecutionDetailItemList**](PaymentExecutionDetailItemList.md) |  | [optional] 
**paymentMethod** | **String** | The payment method for the order. This property is limited to Cash On Delivery (COD) and Convenience Store (CVS) payment methods. Unless you need the specific COD payment information provided by the PaymentExecutionDetailItem object, we recommend using the PaymentMethodDetails property to get payment method information. | [optional] 
**paymentMethodDetails** | [**PaymentMethodDetailItemList**](PaymentMethodDetailItemList.md) |  | [optional] 
**marketplaceId** | **String** | The identifier for the marketplace where the order was placed. | [optional] 
**shipmentServiceLevelCategory** | **String** | The shipment service level category of the order.  Possible values: Expedited, FreeEconomy, NextDay, SameDay, SecondDay, Scheduled, Standard. | [optional] 
**easyShipShipmentStatus** | **String** | The status of the Amazon Easy Ship order. This property is included only for Amazon Easy Ship orders.  Possible values: PendingPickUp, LabelCanceled, PickedUp, OutForDelivery, Damaged, Delivered, RejectedByBuyer, Undeliverable, ReturnedToSeller, ReturningToSeller. | [optional] 
**cbaDisplayableShippingLabel** | **String** | Custom ship label for Checkout by Amazon (CBA). | [optional] 
**orderType** | **String** | The type of the order. | [optional] 
**earliestShipDate** | **String** | The start of the time period within which you have committed to ship the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.  Note: EarliestShipDate might not be returned for orders placed before February 1, 2013. | [optional] 
**latestShipDate** | **String** | The end of the time period within which you have committed to ship the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.  Note: LatestShipDate might not be returned for orders placed before February 1, 2013. | [optional] 
**earliestDeliveryDate** | **String** | The start of the time period within which you have committed to fulfill the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders. | [optional] 
**latestDeliveryDate** | **String** | The end of the time period within which you have committed to fulfill the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders that do not have a PendingAvailability, Pending, or Canceled status. | [optional] 
**isBusinessOrder** | **Boolean** | When true, the order is an Amazon Business order. An Amazon Business order is an order where the buyer is a Verified Business Buyer. | [optional] 
**isPrime** | **Boolean** | When true, the order is a seller-fulfilled Amazon Prime order. | [optional] 
**isPremiumOrder** | **Boolean** | When true, the order has a Premium Shipping Service Level Agreement. For more information about Premium Shipping orders, see \&quot;Premium Shipping Options\&quot; in the Seller Central Help for your marketplace. | [optional] 
**isGlobalExpressEnabled** | **Boolean** | When true, the order is a GlobalExpress order. | [optional] 
**replacedOrderId** | **String** | The order ID value for the order that is being replaced. Returned only if IsReplacementOrder &#x3D; true. | [optional] 
**isReplacementOrder** | **Boolean** | When true, this is a replacement order. | [optional] 
**promiseResponseDueDate** | **String** | Indicates the date by which the seller must respond to the buyer with an estimated ship date. Returned only for Sourcing on Demand orders. | [optional] 
**isEstimatedShipDateSet** | **Boolean** | When true, the estimated ship date is set for the order. Returned only for Sourcing on Demand orders. | [optional] 
**isSoldByAB** | **Boolean** | When true, the item within this order was bought and re-sold by Amazon Business EU SARL (ABEU). By buying and instantly re-selling your items, ABEU becomes the seller of record, making your inventory available for sale to customers who would not otherwise purchase from a third-party seller. | [optional] 
**assignedShipFromLocationAddress** | [**Address**](Address.md) |  | [optional] 
**fulfillmentInstruction** | [**FulfillmentInstruction**](FulfillmentInstruction.md) |  | [optional] 

<a name="OrderStatusEnum"></a>
## Enum: OrderStatusEnum

* `Pending` (value: `"Pending"`)
* `Unshipped` (value: `"Unshipped"`)
* `PartiallyShipped` (value: `"PartiallyShipped"`)
* `Shipped` (value: `"Shipped"`)
* `Canceled` (value: `"Canceled"`)
* `Unfulfillable` (value: `"Unfulfillable"`)
* `InvoiceUnconfirmed` (value: `"InvoiceUnconfirmed"`)
* `PendingAvailability` (value: `"PendingAvailability"`)


<a name="FulfillmentChannelEnum"></a>
## Enum: FulfillmentChannelEnum

* `MFN` (value: `"MFN"`)
* `AFN` (value: `"AFN"`)


<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum

* `COD` (value: `"COD"`)
* `CVS` (value: `"CVS"`)
* `Other` (value: `"Other"`)


<a name="OrderTypeEnum"></a>
## Enum: OrderTypeEnum

* `StandardOrder` (value: `"StandardOrder"`)
* `LongLeadTimeOrder` (value: `"LongLeadTimeOrder"`)
* `Preorder` (value: `"Preorder"`)
* `BackOrder` (value: `"BackOrder"`)
* `SourcingOnDemandOrder` (value: `"SourcingOnDemandOrder"`)

