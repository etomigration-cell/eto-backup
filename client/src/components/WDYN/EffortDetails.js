import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function EffortDetails({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    staffTogether: "How many staff did this together?",
    wasPATPersonalVisit: "Was this a PAT personal visit?",
    timeSpentOnBehalfPerStaff: "Time spent on behalf of participant - per staff member",
    timeSpentWithParticipantPerStaff: "Time spent with participant",
    totalTimeSpentTravellingPerStaffMember: "Time spent travelling - Not with participant, per staff member",
    contactMethod: "Contact Method",
    totalTimeSpentWithParticipant: "Total time spent with participant",
    totalTimeSpentOnBehalf: "Total time spent on behalf of participant",
    totalTimeSpentTravelling: "Total Time spent travelling",
    totalEffortTime: "Total effort time for participant"  
  };

return (
  <div className="effort-details">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default EffortDetails;
