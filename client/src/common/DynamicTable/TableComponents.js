import { Link } from "react-router-dom";
import NotesCell from "common/NotesCell/NotesCell";

export const supportPeriodsTableConfig = {
  columns: [
    { key: "programName", label: "Program",  filter: "text" },
    { key: "subjectType", label: "Subject Type",  filter: "text" },
    { key: "dateLastUpdated", label: "Date Last Updated",  filter: "text" },
    { key: "auditDate", label: "Audit Creation Date",  filter: "text" },
    { key: "StaffName", label: "Last Updated By",  filter: false },
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
    { key: "notes", label: "Notes", filter: false , render: (row) => <NotesCell value={row.notes} heading={"Notes"}/>},
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
    { key: 'whoseContactDetails_value', label: 'Who is This?' },
    { key: 'name', label: 'Name' },
    {
      key: 'accommodationType_value',
      label: 'Type'
    },
    { key: 'addressbookStatus', label: 'Status' },
    {
      key: 'address_apartmentUnit',
      label: 'Apt/Unit'
    },
    {
      key: 'address_streetNumber',
      label: 'Street No'
    },
    {
      key: 'address_streetName',
      label: 'Street Name'
    },
    {
      key: 'address_suburb',
      label: 'Suburb & Post Code'
    },
    { key: 'phone_mobile', label: 'Mobile'},
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
};

export const wdynTableConfig = {
  columns: [
    { key: 'dateGoalClosed',     label: 'Date Last Updated' },
    { key: 'StaffName', label: 'Last Updated By' },
    { key: 'wdynStatus', label: 'Goal Status' },
    { key: 'scopeOfGoal',   label: 'Scope' },
    { key: 'isThisGoalFor',       label: 'Is For' },
    { key: 'domain',         label: 'Domain' },
    { key: 'goalLongerTerm',       label: 'Goal LT' },
    { key: 'currentGoalStatus',         label: 'Current Goal Status' },
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

export const documentTableConfig = ( handleDocumentDownload ) => {
  return {
  columns: [
    { key: 'responseCreatedDate',     label: 'Date Completed' },
    { key: 'documentType', label: 'Document Type' },
    { key: 'shortDescription', label: 'Short Description' },
    {
      key: "fileName",
      label: "File Name",
      render: (row) => (
        <Link
    to="/search"
    onClick={() => handleDocumentDownload(row)}
  >
    {row.fileName}
  </Link>
      ),
    }, 
    {
      key: 'actions',
      label: 'Actions'
    }
  ]}
}

export const plannedActionTableConfig = {
  columns: [
    { key: "auditDate", label: "Audit Creation Date",  filter: "text" },
    { key: "StaffName", label: "Audit Staff", filter: "text" },
    { key: "micahTeam", label: "Micah Team",  filter: false },
    { key: "actionDescription", label: "Action Description", render: (row) => <NotesCell value={row.actionDescription} heading={"Action Description"}/> },
    { key: "actionDueDate", label: "Action Due Date",  filter: "text" },
    { key: "completionDate", label: "Close Date",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    },
  ],
};

export const incomingReferralConfig = {
  columns: [
    { key: 'auditDate',     label: 'Last Updated' },
    { key: 'referralReviewedOn', label: 'Referral reviewed on' },
    { key: 'programID',   label: 'Program' },
    { key: 'micahTeam', label: 'Micah Team'},
    { key: 'StaffName',       label: 'Staff' },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
};


