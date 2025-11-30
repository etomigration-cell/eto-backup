import { Link } from "react-router-dom";
import NotesCell from "common/NotesCell/NotesCell";

export const supportPeriodsTableConfig = {
  columns: [
    { key: "programName", label: "Program",  filter: "text" },
    { key: "subjectType", label: "Subject Type",  filter: "text" },
    { key: "auditDate", label: "Date Last Updated",  filter: "text" },
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
    { key: "dateCreated", label: "Program Start Date" },
  ]
}
};

export const addressBookTableConfig = {
  columns: [
    { key: 'auditDate', label: 'Date last updated' },
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

export const AIHWFormTableConfig = {
  columns: [
   { key: "subjectName", label: "Subject Type",  filter: "text" },
    { key: "auditDate", label: "Audit Date", filter: "text" },
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
   { key: "auditDate", label: "Date Completed",  filter: "text" },
    { key: "responseCreatedDate", label: "Last Updated", filter: "text" },
    
    { key: "formIdentifier", label: "Identifier",  filter: false },  
    { key: "collectionID", label: "Collection",  filter: false },
  
    { key: "programName", label: "Program",  filter: "text" },
    { key: "auditName", label: "Staff",  filter: "text" },
    { key: "transactionDate_6525", label: "Transaction Date",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
    ]
};



export const SafetyAlertsTableConfig = {
  columns: [
   { key: "reviewdate_9603", label: "Date Last Updated",  filter: "text" },
   { key: "entityName", label: "Micah Team",  filter: false }, 
   { key: "extremeRisk_23528", label: "Extreme Risk", filter: "text" },
     { key: "alertCategory_9599", label: "Category", filter: "text" },
     { key: "alertType_9600", label: "Type", filter: "text" },
     { key: "expirationDate_9604", label: "Date no longer active", filter: "text" },
      
  
    //{ key: "completionDate", label: "Close Date",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
    ]
};
   
export const msuTableConfig = {
  columns: [
   { key: "auditDate", label: "Date Completed",  filter: "text" },
    { key: "responseCreatedDate", label: "Last Updated", filter: "text" },
    
    { key: "entityName", label: "Micah Team",  filter: false },  
    { key: "programName", label: "Program",  filter: false },
  
    { key: "auditName", label: "Staff",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
    ]
};

export const consentTableConfig = {
  columns: [
    { key: "programName", label: "Program Name",  filter: "text" },
    { key: "auditDate", label: "Date Complete", filter: false },
    
    { key: "workerDatesigned_25244", label: "Last Update By",  filter: false },  
    { key: "consentstatus_25257", label: "Status",  filter: false },
  
    { key: "dateofSignature_25242", label: "Date Participant Signed",  filter: "text" },
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
  ]
};

export const programHistoryConfig = {
  columns: [
    { key: 'clid',         label: 'Case Number' },
    { key: 'programName',     label: 'Program Name' },
    { key: 'programStartDate', label: 'Start Date' },
    { key: 'programEndDate', label: 'End Date' },
    { key: 'auditDate',   label: 'Audit Date' },
    {
      key: 'staffName',
      label: 'Audti Staff'
    }
  ]
};

export const lotusNotesConfig = {
  columns: [
    { key: 'responseCreatedDate',     label: 'Date created' },
    { key: 'auditDate', label: 'Last updated date' },
    { key: 'entityName', label: 'Micah Team' },
    { key: 'scoring_31496',   label: 'Scoring' },
    {
      key: 'StaffName',
      label: 'Last updated by'
    },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
};

export const lotusInitialFormConfig = {
  columns: [
    { key: 'responseCreatedDate',     label: 'Date created' },
    { key: 'auditDate', label: 'Last updated date' },
    { key: 'entityName', label: 'Micah Team' },
    {
      key: 'StaffName',
      label: 'Last updated by'
    },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
};

export const redressTableConfig = {
  columns: [
   
   { key: "auditDate", label: "Date Completed",  filter: "text" },
    { key: "responseCreatedDate", label: "Date Last Updated", filter: "text" },
      { key: "auditName", label: "Last Updated By",  filter: "text" },
    { key: "entityName", label: "Micah Team",  filter: false },  
   
  
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
  ]
};

export const redressNotesTableConfig = {
  columns: [
   
   { key: "auditDate", label: "Date Completed",  filter: "text" },
    { key: "responseCreatedDate", label: "Date Last Updated", filter: "text" },
      { key: "auditName", label: "Last Updated By",  filter: "text" },
    { key: "entityName", label: "Micah Team",  filter: false },  
   
  
    {
      key: "actions",
      label: "Actions",
       filter: false
    }
  ]
};


