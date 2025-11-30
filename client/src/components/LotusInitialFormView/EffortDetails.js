import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function EffortDetails({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    howmanystaffdidthistogetherAtmost4_27268: "How many staff did this together?",
    selectthe2ndstaffperson_27278: "Select the 2nd staff person",
    whatotherteamassisted_27279: "What other team assisted?",
    timespentwithparticipantPerstaffmember_27269: "Time spent with participant (Per staff member)",
    timespentonbehalfofparticipantPerstaffmember_27270: "Time spent on behalf of participant (Per staff member)",
    timespenttravellingNotwithparticipantPerstaffmember_27271: "Time spent travelling (Not with participant Per staff member)",
    contactMethod_27264: "Contact Method",
    contactLocation_27265: "Contact Location",
    totaltimespentwithparticipant_27272: "Total time spent with participant",
    totaltimespentonbehalfofparticipant_27273: "Total time spent on behalf of participant",
    totaltimespenttravelling_27274: "Total time spent travelling",
    totalefforttimeforparticipant_27275: "Total effort time for participant"
  };

  const alwaysShow = [
  "howmanystaffdidthistogetherAtmost4_27268",
  "selectthe2ndstaffperson_27278",
  "whatotherteamassisted_27279",
  "timespentwithparticipantPerstaffmember_27269",
  "timespentonbehalfofparticipantPerstaffmember_27270",
  "timespenttravellingNotwithparticipantPerstaffmember_27271",
  "contactMethod_27264",
  "contactLocation_27265",
  "totaltimespentwithparticipant_27272",
  "totaltimespentonbehalfofparticipant_27273",
  "totaltimespenttravelling_27274",
  "totalefforttimeforparticipant_27275"
];


return (
  <div className="effort-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={alwaysShow}
    />
  </div>
  );
}


export default EffortDetails;
