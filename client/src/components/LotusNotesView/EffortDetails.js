import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function EffortDetails({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    howmanystaffdidthistogetherAtmost4_27350: "How many staff did this together?",
    selectthe2ndstaffperson_27360: "Select the 2nd staff person",
    whatotherteamassisted_27361: "What other team assisted?",
    timespentwithparticipantPerstaffmember_27351: "Time spent with participant (Per staff member)",
    timespentonbehalfofparticipantPerstaffmember_27352: "Time spent on behalf of participant (Per staff member)",
    timespenttravellingNotwithparticipantPerstaffmember_27353: "Time spent travelling (Not with participant Per staff member)",
    contactMethod_27348: "Contact Method",
    contactLocation_28145: "Contact Location",
    totaltimespentwithparticipant_27354: "Total time spent with participant",
    totaltimespentonbehalfofparticipant_27355: "Total time spent on behalf of participant",
    totaltimespenttravelling_27356: "Total time spent travelling",
    totalefforttimeforparticipant_27357: "Total effort time for participant"
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


export default EffortDetails;
