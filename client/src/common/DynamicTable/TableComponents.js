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



