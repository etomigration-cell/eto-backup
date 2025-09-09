import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export const supportPeriodsTableConfig = {
  columns: [
    { key: "program", label: "Program" },
    { key: "subjectType", label: "Subject Type" },
    { key: "dateLastUpdated", label: "Date Last Updated" },
    { key: "auditCreationDate", label: "Audit Creation Date" },
    { key: "lastUpdatedBy", label: "Last Updated By" },
    { key: "micahTeam", label: "Micah Team" },
    { key: "aihwshs", label: "AIHW/SHS" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    {
      key: "actions",
      label: "Actions",
    },
  ],
};

export const searchResultsTableConfig = ( fetchParticipant ) => {
  return {
    columns: [
    {
      key: "name",
      label: "Name",
      render: (row) => (
        <Link
    to="/search"
    onClick={() => fetchParticipant(row.id)}
  >
    {row.name}
  </Link>
      ),
    },
    { key: "email", label: "Email" },
    { key: "caseNumber", label: "Case Number" },
    { key: "DOB", label: "DOB" },
    { key: "Alias", label: "Alias" },
    { key: "RealOrFake", label: "Real or Fake" },
    { key: "ProgramStartDate", label: "Program Start Date" }
  ]
}
};

export const addressBookTableConfig = {
  columns: [
    { key: 'dateLastUpdated',         label: 'Date Last Updated' },
    { key: 'status',     label: 'Status' },
    { key: 'whoisthis', label: 'Who is this' },
    { key: 'name', label: 'Name' },
    { key: 'type',   label: 'Type' },
    { key: 'accommodation',       label: 'Accommodation' },
    { key: 'aptunit',         label: 'Apt/Unit' },
    { key: 'streetNo',       label: 'Street No' },
    { key: 'streetName',         label: 'Street Name' },
    { key: 'suburbandpostCode',         label: 'Suburb & Post Code' },
    { key: 'key',         label: 'Key' },
    { key: 'mobile',         label: 'Mobile' },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
};

export const wdynTableConfig = {
  columns: [
    { key: 'dashboard',         label: 'dashboard' },
    { key: 'dateLastUpdated',     label: 'Date Last Updated' },
    { key: 'lastUpdatedby', label: 'Last Updated By' },
    { key: 'goalStatus', label: 'Goal Status' },
    { key: 'scope',   label: 'Scope' },
    { key: 'isfor',       label: 'Is For' },
    { key: 'domain',         label: 'Domain' },
    { key: 'goalLT',       label: 'Goal LT' },
    { key: 'goalCrisis',         label: 'Goal Crisis' },
    { key: 'othergoal',         label: 'Other Goal' },
    { key: 'currentgoalstatus',         label: 'Current Goal Status' },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
};

export const consentTableConfig = {
  columns: [
    { key: 'program',         label: 'Program' },
    { key: 'dateCompleted',     label: 'Date Completed' },
    { key: 'lastUpdatedby', label: 'Last Updated By' },
    { key: 'status', label: 'Status' },
    { key: 'dateParticipantSigned',   label: 'Date Participant Signed' },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
};



