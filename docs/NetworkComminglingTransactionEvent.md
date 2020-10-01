# SellingPartnerApiForFinances.NetworkComminglingTransactionEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionType** | **String** | The type of network item swap.  Possible values:  * NetCo - A Fulfillment by Amazon inventory pooling transaction. Available only in the India marketplace.  * ComminglingVAT - A commingling VAT transaction. Available only in the UK, Spain, France, Germany, and Italy marketplaces. | [optional] 
**postedDate** | [**ModelDate**](ModelDate.md) |  | [optional] 
**netCoTransactionID** | **String** | The identifier for the network item swap. | [optional] 
**swapReason** | **String** | The reason for the network item swap. | [optional] 
**ASIN** | **String** | The Amazon Standard Identification Number (ASIN) of the swapped item. | [optional] 
**marketplaceId** | **String** | The marketplace in which the event took place. | [optional] 
**taxExclusiveAmount** | [**Currency**](Currency.md) |  | [optional] 
**taxAmount** | [**Currency**](Currency.md) |  | [optional] 
