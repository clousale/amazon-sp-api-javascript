# SellingPartnerApiForOrders.OrdersV0Api

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrder**](OrdersV0Api.md#getOrder) | **GET** /orders/v0/orders/{orderId} | 
[**getOrderAddress**](OrdersV0Api.md#getOrderAddress) | **GET** /orders/v0/orders/{orderId}/address | 
[**getOrderBuyerInfo**](OrdersV0Api.md#getOrderBuyerInfo) | **GET** /orders/v0/orders/{orderId}/buyerInfo | 
[**getOrderItems**](OrdersV0Api.md#getOrderItems) | **GET** /orders/v0/orders/{orderId}/orderItems | 
[**getOrderItemsBuyerInfo**](OrdersV0Api.md#getOrderItemsBuyerInfo) | **GET** /orders/v0/orders/{orderId}/orderItems/buyerInfo | 
[**getOrders**](OrdersV0Api.md#getOrders) | **GET** /orders/v0/orders | 

<a name="getOrder"></a>
# **getOrder**
> GetOrderResponse getOrder(orderId)



Returns the order indicated by the specified order ID.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0055 | 20 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.

apiInstance.getOrder(orderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 

### Return type

[**GetOrderResponse**](GetOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderAddress"></a>
# **getOrderAddress**
> GetOrderAddressResponse getOrderAddress(orderId)



Returns the shipping address for the order indicated by the specified order ID.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0055 | 20 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An orderId is an Amazon-defined order identifier, in 3-7-7 format.

apiInstance.getOrderAddress(orderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An orderId is an Amazon-defined order identifier, in 3-7-7 format. | 

### Return type

[**GetOrderAddressResponse**](GetOrderAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderBuyerInfo"></a>
# **getOrderBuyerInfo**
> GetOrderBuyerInfoResponse getOrderBuyerInfo(orderId)



Returns buyer information for the order indicated by the specified order ID.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0055 | 20 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An orderId is an Amazon-defined order identifier, in 3-7-7 format.

apiInstance.getOrderBuyerInfo(orderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An orderId is an Amazon-defined order identifier, in 3-7-7 format. | 

### Return type

[**GetOrderBuyerInfoResponse**](GetOrderBuyerInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderItems"></a>
# **getOrderItems**
> GetOrderItemsResponse getOrderItems(orderId, opts)



Returns detailed order item information for the order indicated by the specified order ID. If NextToken is provided, it&#x27;s used to retrieve the next page of order items.  Note: When an order is in the Pending state (the order has been placed but payment has not been authorized), the getOrderItems operation does not return information about pricing, taxes, shipping charges, gift status or promotions for the order items in the order. After an order leaves the Pending state (this occurs when payment has been authorized) and enters the Unshipped, Partially Shipped, or Shipped state, the getOrderItems operation returns information about pricing, taxes, shipping charges, gift status and promotions for the order items in the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0055 | 20 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
let opts = { 
  'nextToken': "nextToken_example" // String | A string token returned in the response of your previous request.
};
apiInstance.getOrderItems(orderId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**GetOrderItemsResponse**](GetOrderItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderItemsBuyerInfo"></a>
# **getOrderItemsBuyerInfo**
> GetOrderItemsBuyerInfoResponse getOrderItemsBuyerInfo(orderId, opts)



Returns buyer information in the order items of the order indicated by the specified order ID.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0055 | 20 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
let opts = { 
  'nextToken': "nextToken_example" // String | A string token returned in the response of your previous request.
};
apiInstance.getOrderItemsBuyerInfo(orderId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**GetOrderItemsBuyerInfoResponse**](GetOrderItemsBuyerInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrders"></a>
# **getOrders**
> GetOrdersResponse getOrders(marketplaceIds, opts)



Returns orders created or updated during the time frame indicated by the specified parameters. You can also apply a range of filtering criteria to narrow the list of orders returned. If NextToken is present, that will be used to retrieve the orders instead of other criteria.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0055 | 20 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let marketplaceIds = ["marketplaceIds_example"]; // [String] | A list of MarketplaceId values. Used to select orders that were placed in the specified marketplaces.
let opts = { 
  'createdAfter': "createdAfter_example", // String | A date used for selecting orders created after (or at) a specified time. Only orders placed after the specified time are returned. Either the CreatedAfter parameter or the LastUpdatedAfter parameter is required. Both cannot be empty. The date must be in ISO 8601 format.
  'createdBefore': "createdBefore_example", // String | A date used for selecting orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in ISO 8601 format.
  'lastUpdatedAfter': "lastUpdatedAfter_example", // String | A date used for selecting orders that were last updated after (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in ISO 8601 format.
  'lastUpdatedBefore': "lastUpdatedBefore_example", // String | A date used for selecting orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in ISO 8601 format.
  'orderStatuses': ["orderStatuses_example"], // [String] | A list of OrderStatus values used to filter the results. Possible values: PendingAvailability (This status is available for pre-orders only. The order has been placed, payment has not been authorized, and the release date of the item is in the future.); Pending (The order has been placed but payment has not been authorized); Unshipped (Payment has been authorized and the order is ready for shipment, but no items in the order have been shipped); PartiallyShipped (One or more, but not all, items in the order have been shipped); Shipped (All items in the order have been shipped); InvoiceUnconfirmed (All items in the order have been shipped. The seller has not yet given confirmation to Amazon that the invoice has been shipped to the buyer.); Canceled (The order has been canceled); and Unfulfillable (The order cannot be fulfilled. This state applies only to Multi-Channel Fulfillment orders.).
  'fulfillmentChannels': ["fulfillmentChannels_example"], // [String] | A list that indicates how an order was fulfilled. Filters the results by fulfillment channel. Possible values: FBA (Fulfillment by Amazon); SellerFulfilled (Fulfilled by the seller).
  'paymentMethods': ["paymentMethods_example"], // [String] | A list of payment method values. Used to select orders paid using the specified payment methods. Possible values: COD (Cash on delivery); CVS (Convenience store payment); Other (Any payment method other than COD or CVS).
  'buyerEmail': "buyerEmail_example", // String | The email address of a buyer. Used to select orders that contain the specified email address.
  'sellerOrderId': "sellerOrderId_example", // String | An order identifier that is specified by the seller. Used to select only the orders that match the order identifier. If SellerOrderId is specified, then FulfillmentChannels, OrderStatuses, PaymentMethod, LastUpdatedAfter, LastUpdatedBefore, and BuyerEmail cannot be specified.
  'maxResultsPerPage': 56, // Number | A number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100.
  'easyShipShipmentStatuses': ["easyShipShipmentStatuses_example"], // [String] | A list of EasyShipShipmentStatus values. Used to select Easy Ship orders with statuses that match the specified  values. If EasyShipShipmentStatus is specified, only Amazon Easy Ship orders are returned.Possible values: PendingPickUp (Amazon has not yet picked up the package from the seller). LabelCanceled (The seller canceled the pickup). PickedUp (Amazon has picked up the package from the seller). AtOriginFC (The packaged is at the origin fulfillment center). AtDestinationFC (The package is at the destination fulfillment center). OutForDelivery (The package is out for delivery). Damaged (The package was damaged by the carrier). Delivered (The package has been delivered to the buyer). RejectedByBuyer (The package has been rejected by the buyer). Undeliverable (The package cannot be delivered). ReturnedToSeller (The package was not delivered to the buyer and was returned to the seller). ReturningToSeller (The package was not delivered to the buyer and is being returned to the seller).
  'nextToken': "nextToken_example", // String | A string token returned in the response of your previous request.
  'amazonOrderIds': ["amazonOrderIds_example"] // [String] | A list of AmazonOrderId values. An AmazonOrderId is an Amazon-defined order identifier, in 3-7-7 format.
};
apiInstance.getOrders(marketplaceIds, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**[String]**](String.md)| A list of MarketplaceId values. Used to select orders that were placed in the specified marketplaces. | 
 **createdAfter** | **String**| A date used for selecting orders created after (or at) a specified time. Only orders placed after the specified time are returned. Either the CreatedAfter parameter or the LastUpdatedAfter parameter is required. Both cannot be empty. The date must be in ISO 8601 format. | [optional] 
 **createdBefore** | **String**| A date used for selecting orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in ISO 8601 format. | [optional] 
 **lastUpdatedAfter** | **String**| A date used for selecting orders that were last updated after (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in ISO 8601 format. | [optional] 
 **lastUpdatedBefore** | **String**| A date used for selecting orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in ISO 8601 format. | [optional] 
 **orderStatuses** | [**[String]**](String.md)| A list of OrderStatus values used to filter the results. Possible values: PendingAvailability (This status is available for pre-orders only. The order has been placed, payment has not been authorized, and the release date of the item is in the future.); Pending (The order has been placed but payment has not been authorized); Unshipped (Payment has been authorized and the order is ready for shipment, but no items in the order have been shipped); PartiallyShipped (One or more, but not all, items in the order have been shipped); Shipped (All items in the order have been shipped); InvoiceUnconfirmed (All items in the order have been shipped. The seller has not yet given confirmation to Amazon that the invoice has been shipped to the buyer.); Canceled (The order has been canceled); and Unfulfillable (The order cannot be fulfilled. This state applies only to Multi-Channel Fulfillment orders.). | [optional] 
 **fulfillmentChannels** | [**[String]**](String.md)| A list that indicates how an order was fulfilled. Filters the results by fulfillment channel. Possible values: FBA (Fulfillment by Amazon); SellerFulfilled (Fulfilled by the seller). | [optional] 
 **paymentMethods** | [**[String]**](String.md)| A list of payment method values. Used to select orders paid using the specified payment methods. Possible values: COD (Cash on delivery); CVS (Convenience store payment); Other (Any payment method other than COD or CVS). | [optional] 
 **buyerEmail** | **String**| The email address of a buyer. Used to select orders that contain the specified email address. | [optional] 
 **sellerOrderId** | **String**| An order identifier that is specified by the seller. Used to select only the orders that match the order identifier. If SellerOrderId is specified, then FulfillmentChannels, OrderStatuses, PaymentMethod, LastUpdatedAfter, LastUpdatedBefore, and BuyerEmail cannot be specified. | [optional] 
 **maxResultsPerPage** | **Number**| A number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100. | [optional] 
 **easyShipShipmentStatuses** | [**[String]**](String.md)| A list of EasyShipShipmentStatus values. Used to select Easy Ship orders with statuses that match the specified  values. If EasyShipShipmentStatus is specified, only Amazon Easy Ship orders are returned.Possible values: PendingPickUp (Amazon has not yet picked up the package from the seller). LabelCanceled (The seller canceled the pickup). PickedUp (Amazon has picked up the package from the seller). AtOriginFC (The packaged is at the origin fulfillment center). AtDestinationFC (The package is at the destination fulfillment center). OutForDelivery (The package is out for delivery). Damaged (The package was damaged by the carrier). Delivered (The package has been delivered to the buyer). RejectedByBuyer (The package has been rejected by the buyer). Undeliverable (The package cannot be delivered). ReturnedToSeller (The package was not delivered to the buyer and was returned to the seller). ReturningToSeller (The package was not delivered to the buyer and is being returned to the seller). | [optional] 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 
 **amazonOrderIds** | [**[String]**](String.md)| A list of AmazonOrderId values. An AmazonOrderId is an Amazon-defined order identifier, in 3-7-7 format. | [optional] 

### Return type

[**GetOrdersResponse**](GetOrdersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

