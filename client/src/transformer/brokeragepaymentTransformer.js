import moment from "moment";

/**
 * Map all aihwform record fields for full detail view.
 */
export function transformBrokeragePayment(record) {
  return {
    // Identifiers
FormResponseID:record.FormResponseID,
FormIdentifier:record.FormIdentifier,
SubjectID:record.SubjectID,
GroupID:record.GroupID,
FamilyID:record.FamilyID,
ResponseSetID:record.ResponseSetID,
FormID:record.FormID,
CollectionTypeID:record.CollectionTypeID,
SubjectTypeID:record.SubjectTypeID,
CollectionID:record.CollectionID,
ResponseCreatedDate:record.ResponseCreatedDate,
ProgramID:record.ProgramID,
AuditStaffID:record.AuditStaffID,
AuditDate:record.AuditDate,
DataEnteredByID:record.DataEnteredByID,
DraftSavedOn:record.DraftSavedOn,
RemovedDate:record.RemovedDate,

  };
}


export function transformAihwform(records) {
  const minimalKeys = [
    "SubjectTypeID",
    "Status",
    "dateCompleted",
    "dateLastUpdated",
    "LastUpdatedBy",
    "micahTeam",
    
  ];

  // Map all records to frontend format first
  const mapped = records.map(mapServiceActivities);

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
