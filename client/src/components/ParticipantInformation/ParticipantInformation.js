import React, { useEffect, useState } from "react";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import ParticipantDetailView from "components/ParticipantDetailView/ParticipantDetailView";
import ParticipantAuditReport from "components/ParticipantAuditReport/ParticipantAuditReport";
import ParticipantProgramHistory from "components/ParticipantProgramHistory/ParticipantProgramHistory";
import {
  fetchParticipantAuditReport,
  fetchParticipantProgramHistory,
} from "actions/ParticipantAction/ParticipantAction";
import { transformParticipant } from "transformer/participantTransformer";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

import "./ParticipantInformation.css";

const fieldLabels = {
  fName: "First Name",
  lName: "Last Name",
  caseNumber: "Case Number",
  middleInitial: "Middle Initial",
  dob: "Date of Birth",
  homePhone: "Home Phone",
  cellPhone: "Cell Phone",
  workPhone: "Work Phone",
  workPhoneExtension: "Work Phone Extension",
  pager: "Pager",
  email: "Email",
  gender: "Gender",
  maritalStatusID: "Marital Status ID",
  fundingEntityID: "Funding Entity ID",
  referralEntityID: "Referral Entity ID",
  staffName: "Audit Staff",
  auditDate: "Audit Date",
  assignedStaffID: "Assigned Staff ID",
  dateCreated: "Date Created",
  alert: "Alert",
  hoR_ID: "HoR ID",
  hoR_ChildID: "HoR Child ID",
  hoR_BID: "HoR BID",
  hoR_IDAbuser: "HoR ID Abuser",
  hoR_VID: "HoR VID",
  tigerID: "Tiger ID",
  censusTract: "Census Tract",
  censusBlock: "Census Block",
  cliD_Source: "CLI Source",
  zipExtension: "Zip Extension",
  referralNotification: "Referral Notification",
  contactMethod: "Contact Method",
  contactLocation: "Contact Location",
  crn: "CRN",
  ssn: "SSN",
  aboriginalTorresStraitSouthSeaIslander: "Aboriginal/Torres Strait Islander",
  photographConsent: "Photograph Consent",
  inwhatlanguagedoyoufeelbestabletoexpressyourself: "Preferred Language for Expression",
  nickname: "Nickname",
  genderIfincorrect: "Gender If Incorrect",
  cald: "CALD",
  citizenship_Status: "Citizenship Status",
  country_of_Birth: "Country of Birth",
  current_or_Former_ADF_member: "Current or Former ADF member",
  dOB_Accuracy: "DOB Accuracy",
  ethnicity: "Ethnicity",
  experience_with_Child_Welfare_System_at_intake: "Experience with Child Welfare System at Intake",
  experience_with_Child_Welfare_system_at_Intake: "Experience with Child Welfare system at Intake",
  gender_PSM: "Gender (PSM)",
  history_of_substance_abuse: "History of Substance Abuse",
  history_of_substance_abuse_: "History of Substance Abuse (alt)",
  if_Yes_for_non_spoken: "If Yes – for Non-Spoken",
  if_Yes_for_spoken_language_other_than_english: "If Yes – for Spoken Language Other than English",
  initial_Contact_Electronic_Type: "Initial Contact Electronic Type",
  initial_Contact_Type: "Initial Contact Type",
  interpreter_required: "Interpreter Required",
  language_at_Home: "Language at Home",
  marital_Status: "Marital Status",
  marital_Status_cx_MIECHV: "Marital Status (cx) MIECHV",
  medicare_No_Individual_ID: "Medicare Individual ID",
  medicare_Number: "Medicare Number",
  member_Type: "Member Type",
  most_effective_method_of_Communication_: "Most Effective Communication Method",
  my_Aged_Care_ID: "Aged Care ID",
  ndis_Number: "NDIS Number",
  non_Spoken_other: "Non-Spoken Other",
  one_or_more_children_have_low_student_achievement: "Children with Low Student Achievement",
  participant_Image: "Participant Image",
  personal_characteristics: "Personal Characteristics",
  primary_language_exposure_of_target_child: "Primary Language Exposure of Target Child",
  race: "Race",
  race_cx: "Race (cx)",
  real_or_Fake_Person: "Real or Fake Person",
  referral_Source: "Referral Source",
  referral_Source_MP: "Referral Source MP",
  role_in_armed_forces: "Role in Armed Forces",
  srsid: "SRSID",
  sex: "Sex",
  sexual_Identity: "Sexual Identity",
  sexual_Identity_Other: "Sexual Identity Other",
  south_Sea_Islander: "South Sea Islander",
  tobacco_used_in_the_home: "Tobacco Used in the Home",
  what_is_the_primary_disability_group: "Primary Disability Group",
  year_of_Arrival_YYYY: "Year of Arrival (YYYY)"
}

const alwaysShow = [];

const alwaysShow1 = [
  "ssn",
  "caseNumber",
  "fName",
  "middleInitial",
  "lName",
  "dob",
  "address1",
  "address2",
  "zipCode",
  "homePhone",
  "cellPhone",
  "workPhone",
  "workPhoneExtension",
  "pager",
  "email",
  "gender",
  "maritalStatusID",
  "fundingEntityID",
  "referralEntityID",
  "auditStaffID",
  "auditDate",
  "assignedStaffID",
  "dateCreated",
  "alert",
  "hoR_ID",
  "hoR_ChildID",
  "hoR_BID",
  "hoR_IDAbuser",
  "hoR_VID",
  "tigerID",
  "censusTract",
  "censusBlock",
  "cliD_Source",
  "zipExtension",
  "optOut",
  "referralNotification",
  "cSiteID",
  "contactMethod",
  "contactLocation",
  "crn",
  "aboriginalTorresStraitSouthSeaIslander",
  "photographConsent",
  "inwhatlanguagedoyoufeelbestabletoexpressyourself",
  "nickname",
  "genderIfincorrect",
  "cald",
  "citizenship_Status",
  "country_of_Birth",
  "current_or_Former_ADF_member",
  "dOB_Accuracy",
  "ethnicity",
  "experience_with_Child_Welfare_System_at_intake",
  "experience_with_Child_Welfare_system_at_Intake",
  "gender_PSM",
  "history_of_substance_abuse",
  "history_of_substance_abuse_",
  "if_Yes_for_non_spoken",
  "if_Yes_for_spoken_language_other_than_english",
  "initial_Contact_Electronic_Type",
  "initial_Contact_Type",
  "interpreter_required",
  "language_at_Home",
  "marital_Status",
  "marital_Status_cx_MIECHV",
  "medicare_No_Individual_ID",
  "medicare_Number",
  "member_Type",
  "most_effective_method_of_Communication_",
  "my_Aged_Care_ID",
  "ndis_Number",
  "non_Spoken_other",
  "one_or_more_children_have_low_student_achievement",
  "participant_Image",
  "personal_characteristics",
  "primary_language_exposure_of_target_child",
  "race",
  "race_cx",
  "real_or_Fake_Person",
  "referral_Source",
  "referral_Source_MP",
  "role_in_armed_forces",
  "srsid",
  "sex",
  "sexual_Identity",
  "sexual_Identity_Other",
  "south_Sea_Islander",
  "tobacco_used_in_the_home",
  "what_is_the_primary_disability_group",
  "year_of_Arrival_YYYY"
];

function ParticipantInformation({ participant, programHistoryConfig }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const handleView = (data) => setViewedData(data);
  const handleCloseSidebar = () => setViewedData(null);

  const tabEndpoints = [
    (participant) => Promise.resolve(participant),
    (participant) => fetchParticipantAuditReport(participant.id),
    (participant) => fetchParticipantProgramHistory(participant.id),
  ];

  useEffect(() => {
    const loadTabData = async () => {
      if (!viewedData) return;
      setLoading(true);
      try {
        if (!tabData[activeTab]) {
          const response = await tabEndpoints[activeTab](viewedData);
          const data =
            typeof response.json === "function"
              ? await response.json()
              : response;
          setTabData((prev) => ({ ...prev, [activeTab]: data }));
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    loadTabData();
  }, [activeTab, viewedData]);

  const tabs = [
    {
      label: "Participant Details",
      content: loading ? (
        <div>Loading...</div>
      ) : (
        <ParticipantDetailView participant={tabData[0]} />
      ),
    },
    {
      label: "Participant Audit Report",
      content: loading ? (
        <div>Loading...</div>
      ) : (
        <ParticipantAuditReport auditReport={tabData[1]} />
      ),
    },
    {
      label: "Participant History",
      content: loading ? (
        <div>Loading...</div>
      ) : (
        <ParticipantProgramHistory history={tabData[2]} />
      ),
    },
  ];

  if (!participant)
    return <div className="empty-info">No participant info available.</div>;

  console.log(participant);
  return (
    <div className="participant-info">
      <div className="panel-header">
       {<strong>Particpant Information</strong> }
      </div>
      <DynamicDetailsTable
            detail={transformParticipant(participant)}
            columnsPerRow={2} // or any other number
            fieldLabels={fieldLabels}
            alwaysShow={alwaysShow}
          />
      <button
        className="program-history-toggle"
        onClick={() => setShowHistory(s => !s)}
        style={{ margin: "1em 0" }}
      >
        {showHistory ? "Hide Program History" : "Show Program History"}
      </button>
      {showHistory && <ParticipantProgramHistory participant={participant} config={programHistoryConfig}/>}
    </div>
  );
}

export default ParticipantInformation;
