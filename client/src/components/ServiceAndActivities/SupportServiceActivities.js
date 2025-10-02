import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function SupportServiceActivities({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    dateCompleted: "Date completed",
    micahTeam: "Micah Team",
    startTime: "Start Time",
    endTime: "End Time",
    formIdentifier: "Form Identifier",
    collectionTypeID: "Collection Type ID",
    dataEnteredByID: "Data Entered By ID",
    draftSavedOn: "Draft Saved On",
    removedDate: "Removed Date",
    howManyStaffDidThisTogether: "How Many Staff Participated",

    shsGeneralAssistanceAndSupportActivities_16201: "SHS General Assistance & Support Activities",
   

    visitSite_16219: "Visit Site",
    presentingReason: "Presenting Reason",
    inclusiveHealthReferralSource: "Inclusive Health Referral Source",
    postcodeOfServiceDelivery: "Postcode of Service Delivery",

    episodeOfCareOutcome: "Episode of Care Outcome",

    accommodationStartDate: "Accommodation Start Date",
    accommodationProvider: "Accommodation Provider",
    accommodationExitDate: "Accommodation Exit Date",
    numberNights: "Number of Nights",

    wasFamilyPresent: "Was Family Present",
    contactMethod: "Contact Method",
    contactLocation: "Contact Location",

    housingAccommodationSHS: "Housing/Accommodation (SHS)",
    withWhichProviderLiaised: "Provider Contacted/Liaised With",
    needsIdentifiedHousing: "Needs Identified: Housing Accommodation",
    needsIdentifiedGeneralAssistanceAndSupport: "Needs Identified: General Assistance & Support",
    needsIdentifiedSpecialisedServices: "Needs Identified: Specialised Services",
    
    selectThe2ndStaffPerson: "Second Staff Person",

    whatOtherTeamAssisted: "Other Team(s) Assisted",
    timespentWithParticipant: "Time Spent With Participant (mins)",
    timespentOnBehalf: "Time Spent On Behalf of Participant (mins)",
    timespentTravelling: "Time Spent Travelling (mins)",
    totalEffortTime: "Total Effort Time (mins)",

    whichGoalWasThisFor: { label: "Associated Goal", type: "textarea" },
    // Timespent & Service Activities
    timespentWithParticipantSA1: "Time Spent With Participant (SA1)",
    timespentOnBehalfSA1: "Time Spent On Behalf (SA1)",
    timespentTravellingSA2: "Time Spent Travelling (SA2)",
    ifProvidedSecondService: "Second Service/Activity (If Provided)",
    timespentWithParticipantSA2: "Time Spent With Participant (SA2)",
    // ...repeat for SA3, SA4 as needed
    totalTimespentWithParticipant: "Total Time With Participant",
    totalTimespentOnBehalf: "Total Time On Behalf",
    totalTimespentTravelling: "Total Time Travelling",

    aihwServiceActivitySA1: "AIHW Service Activity (SA1)",
    aihwServiceActivitySA2: "AIHW Service Activity (SA2)",
    aihwServiceActivitySA3: "AIHW Service Activity (SA3)",
    aihwServiceActivitySA4: "AIHW Service Activity (SA4)",

    
    notes: { label: "Notes", type: "textarea" },

    // Staff identity
    staffID: "Staff ID",
    fName: "First Name",
    middleInitial: "Middle Initial",
    lName: "Last Name",

    // Dates
    auditDate: "Audit Date",
    transactionDate: "Transaction Date",

    // Payment & finance
    financeProjectCode: "Finance Project Code",
    briefTransactionDescription: "Brief Transaction Description",
    supplierProvider: "Supplier/Provider",
    howWasPaymentMade: "How Payment Was Made",
    authorisedBy: "Authorised By",

    // Clinical observations & vitals
    temperature: "Temperature",
    bloodPressure: "Blood Pressure (mmHg)",
    heartRate: "Heart Rate (beats per minute)"
  };

return (
  <div className="support-period-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default SupportServiceActivities;
