import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export const supportPeriodsTableConfig = {
  columns: [
    { key: "programName", label: "Program",  filter: "text" },
    { key: "subjectType", label: "Subject Type",  filter: "text" },
    { key: "dateLastUpdated", label: "Date Last Updated",  filter: "text" },
    { key: "auditDate", label: "Audit Creation Date",  filter: "text" },
    { key: "StaffName", label: "Last Updated By",  filter: false },
    { key: "micahTeam", label: "Micah Team",  filter: "text" },
    { key: "submitsReport", label: "AIHW/SHS",  filter: "text" },
    { key: "startDate", label: "Start Date",  filter: "text" },
    { key: "endDate", label: "End Date",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    },
  ],
};

export const serviceActivitiesTableConfig = {
  columns: [
    { key: "programName", label: "Program Name", filter: "text" },
    { key: "StaffName", label: "Audit Staff", filter: "text" },
    { key: "dateCompleted", label: "Date Completed", filter: "text" },
    { key: "micahTeam", label: "Micah Team", filter: "text" },
    { key: "notes", label: "Notes", filter: false },
    {
      key: "actions",
      label: "Actions",
      filter: false
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
    onClick={() => fetchParticipant(row.clid)}
  >
    {row.fName} {row.lName}
  </Link>
      ),
    },
    { key: "caseNumber", label: "Case Number" },
    { key: "dob", label: "DOB" },
    { key: "Alias", label: "Alias" },
    { key: "RealOrFake", label: "Real or Fake" },
    { key: "ProgramStartDate", label: "Program Start Date" }
  ]
}
};

export const addressBookTableConfig = {
  columns: [
    { key: 'auditDate', label: 'Audit Date' },
    { key: 'whoseContactDetails', label: 'Who is This?',  render: row => row.whoseContactDetails?.value || "" },
    { key: 'name', label: 'Name' },
    {
      key: 'accommodationType',
      label: 'Type',
      render: row => row.accommodationType?.value || ""
    },
    { key: 'addressbookStatus', label: 'Status' },
    {
      key: 'aptunit',
      label: 'Apt/Unit',
      render: row => row.address?.apartmentUnit || ""
    },
    {
      key: 'streetNo',
      label: 'Street No',
      render: row => row.address?.streetNumber || ""
    },
    {
      key: 'streetName',
      label: 'Street Name',
      render: row => row.address?.streetName || ""
    },
    {
      key: 'suburbandpostCode',
      label: 'Suburb & Post Code',
      render: row =>
        row.address?.suburb
          ? `${row.address.suburb} ${row.address.postCode || ""}`
          : row.address?.postCode || ""
    },
    { key: 'mobile', label: 'Mobile', render: row => row.phone?.mobile || ""},
    {
      key: 'actions',
      label: 'Actions',
      render: row => (
        // Add your custom actions UI here
        <button>Action</button>
      )
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



