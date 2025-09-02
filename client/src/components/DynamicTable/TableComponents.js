import { FaEye } from "react-icons/fa";

export const supportPeriodsTableConfig = {
  columns: [
    { key: 'program',         label: 'Program' },
    { key: 'subjectType',     label: 'Subject Type' },
    { key: 'dateLastUpdated', label: 'Date Last Updated' },
    { key: 'auditCreationDate', label: 'Audit Creation Date' },
    { key: 'lastUpdatedBy',   label: 'Last Updated By' },
    { key: 'micahTeam',       label: 'Micah Team' },
    { key: 'aihwshs',         label: 'AIHW/SHS' },
    { key: 'startDate',       label: 'Start Date' },
    { key: 'endDate',         label: 'End Date' },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]
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
