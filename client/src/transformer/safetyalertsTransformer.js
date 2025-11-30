import moment from "moment";

/**
 * Map all aihwform record fields for full detail view.
 */
export function transformSafetyAlert(record) {
  return {
    // Identifiers
formResponseID:record.formResponseID,
formIdentifier:record.formIdentifier,
subjectID:record.subjectID,
groupID:record.groupID,
familyID:record.familyID,
responseSetID:record.responseSetID,
formID:record.formID,
collectionTypeID:record.collectionTypeID,
subjectTypeID:record.subjectTypeID,
collectionID:record.CollectionID,
responseCreatedDate:record.responseCreatedDate,
programID:record.programID,
auditStaffID:record.auditStaffID,
auditDate:record.auditDate,
dataEnteredByID:record.dataEnteredByID,
draftSavedOn:record.draftSavedOn,
removedDate:record.removedDate,
micahTeam_9597:record.micahTeam_9597,
micahTeam_9597_ResponseChoiceID:record.micahTeam_9597_ResponseChoiceID,
enteryourname_9598:record.enteryourname_9598,
alertCategory_9599:record.alertCategory_9599,
alertCategory_9599_ResponseChoiceID:record.alertCategory_9599_ResponseChoiceID,
alertType_9600:record.alertType_9600,
alertType_9600_ResponseChoiceID:record.alertType_9600_ResponseChoiceID,
otherAlertType_9601:record.otherAlertType_9601,
notes_9602:record.notes_9602,
reviewdate_9603:record.reviewdate_9603,
expirationDate_9604:record.expirationDate_9604,
datealertceasedbeingactive_9605:record.datealertceasedbeingactive_9605,
micahTeam_11292:record.micahTeam_11292,
extremeRisk_23528:record.extremeRisk_23528,
extremeRisk_23528_ResponseChoiceID:record.extremeRisk_23528_ResponseChoiceID,
safetydocuments_31786:record.safetydocuments_31786,
auditName:record.fName+" "+record.lName,
subjectName:record.subjectName,
programName:record.programName,
entityName:record.entityName

  };
}


export function transformSafetyAlerts(records) {
  const minimalKeys = [
    "reviewdate_9603",
    "entityName",
    "extremeRisk_23528",
    "alertCategory_9599",
    "alertType_9600",
    "expirationDate_9604"
    
  ];

  // Map all records to frontend format first
  const mapped = records.map(transformSafetyAlert);

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