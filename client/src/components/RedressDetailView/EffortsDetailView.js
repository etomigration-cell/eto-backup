import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressGeneralDetailView.css';

function EffortsDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
   howmanystaffdidthistogetherAtmost4_28649 : "How many staff did this together At most 4",
	selectthe2ndstaffperson_28659 : "Select the 2nd staff person",
	whatotherteamassisted_28660 : "What other team assisted",
	timespentwithparticipantPerstaffmember_28650 : "Time spent with participant Per staff member",
	timespenttravellingNotwithparticipantPerstaffmember_28652: "Time spent travelling Not with participant Per staff member",
  contactMethod_28645: "Contact Method",
  phoneContactType_28647: "Phone Contact Type",
  totaltimespentwithparticipant_28653:"Total time spent with participant",
  totaltimespentonbehalfofparticipant_28654:"Total time spent on behalf of participant",
  totaltimespenttravelling_28655:"Total time spent travelling",
  totalefforttimeforparticipant_28656:"Totale ffort time for participant",
};

return (
  <div className="MSUDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={2} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default EffortsDetailView;