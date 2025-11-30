import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function SurveyQuestions({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    selectyourlocation_27324: "Select your location",
    selectallofthereasonsforseekingassistance_27321: "Reasons for seeking assistance",
    areyouthepersonwithadisability_27299: "Do you have any disabilities?",
    disabilityimpairmentorconditionindicator_27304: "Disability, impairment or conditional indicator",
    howdidyoufindoutaboutourservice_27283: "How did you find out about our service?",
    areyouworkingwithanyotherservices_27331: "Are you working with any other services?",
    preferredcounsellingsupportvia_27293: "Preferred method of support via",
    name_27476: "Name",
    contactDetails_27478: "Contact Details",
    permissiontoContact_27479: "Permission to Contact"
  };

  const alwaysShow = [
  "selectyourlocation_27324",
  "selectallofthereasonsforseekingassistance_27321",
  "areyouthepersonwithadisability_27299",
  "disabilityimpairmentorconditionindicator_27304",
  "howdidyoufindoutaboutourservice_27283",
  "areyouworkingwithanyotherservices_27331",
  "preferredcounsellingsupportvia_27293",
  "name_27476",
  "contactDetails_27478",
  "permissiontoContact_27479"
];

return (
  <div className="survey-questions">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={alwaysShow}
    />
  </div>
  );
}


export default SurveyQuestions;
