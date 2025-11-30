import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressNotesGeneralDetailView.css';

function RedressNotesEffortsDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = { 
  howmanystaffdidthistogetherAtmost4_28621 : "How many staff did this together At most 4",
	selectthe2ndstaffperson_28634 : "Select the 2nd staff person",
	whatotherteamassisted_28635 : "What other team assisted",
	timespentwithparticipantPerstaffmember_28625 : "Time spent with participant Per staff member",
	timespentonbehalfofparticipantPerstaffmember_28626: "Time spent travelling Not with participant Per staff member",
  timespenttravellingNotwithparticipantPerstaffmember_28627:"Time spent travelling Not with participant Per staff member",
  contactLocation_28606:"Contact Location",
  contactMethod_28605: "Contact Method",  
  totaltimespentwithparticipant_28628:"Total time spent with participant",
  totaltimespentonbehalfofparticipant_28629:"Total time spent on behalf of participant",
  totaltimespenttravelling_28630:"Total time spent travelling",
  totalefforttimeforparticipant_28631:"Totale ffort time for participant",
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


export default RedressNotesEffortsDetailView;