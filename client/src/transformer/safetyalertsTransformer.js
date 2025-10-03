import moment from "moment";

/**
 * Map all aihwform record fields for full detail view.
 */
export function transformSafetyAlerts(record) {
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
MicahTeam_9597:record.MicahTeam_9597,
MicahTeam_9597_ResponseChoiceID:record.MicahTeam_9597_ResponseChoiceID,
Enteryourname_9598:record.Enteryourname_9598,
AlertCategory_9599:record.AlertCategory_9599,
AlertCategory_9599_ResponseChoiceID:record.AlertCategory_9599_ResponseChoiceID,
AlertType_9600:record.AlertType_9600,
AlertType_9600_ResponseChoiceID:record.AlertType_9600_ResponseChoiceID,
OtherAlertType_9601:record.OtherAlertType_9601,
Notes_9602:record.Notes_9602,
Reviewdate_9603:record.Reviewdate_9603,
ExpirationDate_9604:record.ExpirationDate_9604,
Datealertceasedbeingactive_9605:record.Datealertceasedbeingactive_9605,
MicahTeam_11292:record.MicahTeam_11292,
ExtremeRisk_23528:record.ExtremeRisk_23528,
ExtremeRisk_23528_ResponseChoiceID:record.ExtremeRisk_23528_ResponseChoiceID,
Safetydocuments_31786:record.Safetydocuments_31786

  };
}


export function transformSaftyalertsform(records) {
  const minimalKeys = [
    "dateLastUpdated",
    "micahTeam",
    "ExtremeRisk",
    "Category",
    "Type",
    "datenolongerused"
    
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
