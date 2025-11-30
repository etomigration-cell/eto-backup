import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function Notes({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    typeofNote_28236: "Type of Note",
    selectyourlocation_27412: "Select your location",
    program_28235: "Program",
    serviceType_27366: "Service Type",
    serviceSetting_27367: "Service Setting",
    contactCategory_27854: "Contact Category",
    contactDomain_27855: "Contact Domain",
    partofthisengagementwasareferraldone_29458: "Was a referral done as part of the engagement?",
    interpreterPresent_27368: "Interpreter Present",
    notes_27369: { label: "Notes", type: "textarea" },
    checkallfurtherassessmentsthatneedtobecompleted_29024: "Check all further assessments that need to be completed"
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


export default Notes;
