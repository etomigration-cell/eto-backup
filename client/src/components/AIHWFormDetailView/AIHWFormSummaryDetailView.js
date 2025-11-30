import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './AIHWFormDetailView.css';

function AIHWFormSummaryDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
    
howmanystaffdidthistogetherAtmost4_16157 : "How many staff did this together? - At most 4 *",
timespentwithparticipantPerstaffmember_16168:"Time spent with participant - Per staff member",
timespentonbehalfofparticipantPerstaffmember_16166:"Time spent on behalf of participant - Per staff member",

timespenttravellingNotwithparticipantPerstaffmember_16167 : "Time spent travelling - Not with participant Per staff member",
wastheparticipantfamilypresentduringthisactivityAnswerYesifconversingwithParticipantFamilyonph_16169 : "Was the participant/family present during this activity? - Answer Yes if conversing with Participant/Family on phone",
contactMethod_16171 : "Contact Method",

contactLocation_16170 : "Contact Location",
totaltimespentwithparticipant_16176:"Total time spent with participant",
totaltimespentonbehalfofparticipant_16174 : "Total time spent on behalf of participant",
totaltimespenttravelling_16175 : "Total time spent travelling",
totalefforttimeforparticipant_15588 : "Total effort time for participant",
};

return (
  <div className="AIHWFormDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default AIHWFormSummaryDetailView;