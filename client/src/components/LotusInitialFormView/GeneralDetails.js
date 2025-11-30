import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function GeneralDetails({ detail }) {
  if (!detail) return null;

  console.log("additional", detail)

  const fieldLabels = {
    entityName: "Micah Team",
    mailingList_27329: "Mailing List",
    eligibleforLotusServices_27333: "Eligible for Lotus Services?",
    eligibleDate_27334: "Eligible Date"
  };

  const alwaysShow = [
  "entityName",
  "mailingList_27329",
  "eligibleforLotusServices_27333",
  "eligibleDate_27334"
];

return (
  <div className="general-details">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={alwaysShow}
    />
  </div>
  );
}


export default GeneralDetails;
