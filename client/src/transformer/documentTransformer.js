import moment from "moment";

export function mapDocumentInfo(record) {
  return {
    // Identifiers
    formResponseID: record.formResponseID,
    responseCreatedDate: record.responseCreatedDate ? moment(record.responseCreatedDate).format("DD/MM/YYYY") : "",
    auditDate: record.auditDate,
    fileName: record.fileName,
    content: record.content,
    contentType: record.contentType,
    documentType: record.documentType_8896,
    shortDescription: record.shortDescription_13810,
    programName: record.programName,
    fName: record.fName,
    lName: record.lName
  };
}



export function transformDocumentContent(records) {
  const minimalKeys = [
    "formResponseID",
    "responseCreatedDate",
    "documentType",
    "shortDescription",
    "fileName",
    "content",
    "contentType"
  ];

  // Map all records to frontend format first
  const mapped = records.map(mapDocumentInfo);

  // Then extract minimal information from mapped records
  const minimal = mapped.map(rec =>
    ({
      ...Object.fromEntries(
        minimalKeys.map(key => [key, rec[key]])
      ),
      StaffName: `${rec.fName || ''} ${rec.lName || ''}`.trim(),
    })
  );

  return {
    minimal,
    full: mapped
  };
}
