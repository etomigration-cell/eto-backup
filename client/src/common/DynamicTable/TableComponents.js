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
};


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
 
export const AIHWFormTableConfig = {
  columns: [
   { key: "subjectID", label: "Subject Type",  filter: "text" },
    { key: "auditDate", label: "Audit Staff", filter: "text" },
     { key: "createdby", label: "Created By", filter: "text" },
    { key: "micahTeam", label: "Micah Team",  filter: false },  
  
    //{ key: "completionDate", label: "Close Date",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
    ]
};

export const brokeragePaymentTableConfig = {
  columns: [
   { key: "subjectID", label: "Subject Type",  filter: "text" },
    { key: "auditDate", label: "Audit Staff", filter: "text" },
     { key: "createdby", label: "Created By", filter: "text" },
    { key: "micahTeam", label: "Micah Team",  filter: false },  
  
    //{ key: "completionDate", label: "Close Date",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
    ]
};

export const SafetyAlertsTableConfig = {
  columns: [
   { key: "subjectID", label: "Subject Type",  filter: "text" },
    { key: "auditDate", label: "Audit Staff", filter: "text" },
     { key: "createdby", label: "Created By", filter: "text" },
    { key: "micahTeam", label: "Micah Team",  filter: false },  
  
    //{ key: "completionDate", label: "Close Date",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
    ]
};



