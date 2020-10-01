# SellingPartnerApiForReports.ReportDocument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportDocumentId** | **String** | The identifier for the report document. This identifier is unique only in combination with a seller ID. | 
**url** | **String** | A presigned URL for the report document. This URL expires after 5 minutes. | 
**encryptionDetails** | [**ReportDocumentEncryptionDetails**](ReportDocumentEncryptionDetails.md) |  | 
**compressionAlgorithm** | **String** | If present, the report document contents have been compressed with the provided algorithm. | [optional] 

<a name="CompressionAlgorithmEnum"></a>
## Enum: CompressionAlgorithmEnum

* `GZIP` (value: `"GZIP"`)

