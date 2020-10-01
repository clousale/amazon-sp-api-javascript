# SellingPartnerApiForReports.ReportSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportScheduleId** | **String** | The identifier for the report schedule. This identifier is unique only in combination with a seller ID. | 
**reportType** | **String** | The report type. | 
**marketplaceIds** | **[String]** | A list of marketplace identifiers. The report document&#x27;s contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise. | [optional] 
**reportOptions** | [**ReportOptions**](ReportOptions.md) |  | [optional] 
**period** | **String** | An ISO 8601 period value that indicates how often a report should be created. | 
**nextReportCreationTime** | **Date** | The date and time when the schedule will create its next report, in ISO 8601 date time format. | [optional] 
