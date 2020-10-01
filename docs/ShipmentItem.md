# SellingPartnerApiForFinances.ShipmentItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSKU** | **String** | The seller SKU of the item. The seller SKU is qualified by the seller&#x27;s seller ID, which is included with every call to the Selling Partner API. | [optional] 
**orderItemId** | **String** | An Amazon-defined order item identifier. | [optional] 
**orderAdjustmentItemId** | **String** | An Amazon-defined order adjustment identifier defined for refunds, guarantee claims, and chargeback events. | [optional] 
**quantityShipped** | **Number** | The number of items shipped. | [optional] 
**itemChargeList** | [**ChargeComponentList**](ChargeComponentList.md) |  | [optional] 
**itemChargeAdjustmentList** | [**ChargeComponentList**](ChargeComponentList.md) |  | [optional] 
**itemFeeList** | [**FeeComponentList**](FeeComponentList.md) |  | [optional] 
**itemFeeAdjustmentList** | [**FeeComponentList**](FeeComponentList.md) |  | [optional] 
**itemTaxWithheldList** | [**TaxWithheldComponentList**](TaxWithheldComponentList.md) |  | [optional] 
**promotionList** | [**PromotionList**](PromotionList.md) |  | [optional] 
**promotionAdjustmentList** | [**PromotionList**](PromotionList.md) |  | [optional] 
**costOfPointsGranted** | [**Currency**](Currency.md) |  | [optional] 
**costOfPointsReturned** | [**Currency**](Currency.md) |  | [optional] 
