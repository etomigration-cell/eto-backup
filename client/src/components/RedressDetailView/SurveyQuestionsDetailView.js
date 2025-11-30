import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressGeneralDetailView.css';

function SurveyQuestionsDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
  selectyourlocation_28672 : "Select your location",
	whichregionistheparticipanttobeallocatedto_29325 : "Which region is the participant to be allocated to",
	istheparticipantapriority_28708 : "Is the participant a priority",
	selectthereasonsforprioritising_28709 : "Select the reasons for prioritising",
	isthereapublictrusteeoranadultguardian_28847: "Is there a public trustee or an adult guardian",
  doyouhaveanydisabilities_28667: "Do you have any disabilities",
  disabilityimpairmentorconditionindicator_28668: "Disability impairmentor condition indicator",
  haveyouspokentoanyotherserviceaboutRedress_28710:"Have you spoken to any other service about Redress",
  services_28711:"Services",
  servicesOther_28712:"Services Other",
  preferredmethodofsupportvia_28665:"Preferred method of support/interview",
  istheparticipanteligibletoapplytoNRS_28714:"Is the participant eligible to apply to NRS",
  howdidyoufindoutaboutourservice_28664:"How did you find out about our service",
  areyouworkingwithanyotherservices_28675:"Are you working with any other services",//have to change Notes
  selectallreasonsforseekingassistance_28715:"Select all reasons for seeking assistance",
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


export default SurveyQuestionsDetailView;