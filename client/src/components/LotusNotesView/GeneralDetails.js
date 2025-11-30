import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function GeneralDetails({ detail }) {
  if (!detail) return null;

  console.log("additional", detail)

  const fieldLabels = {
    entityName: "Micah Team",
    mailingList_27329: "Start time",
    endTimeoptional_27431: "End Time (optional)",
  };

  const alwaysShow = [
  "entityName",
  "startTime_27430",
  "endTimeoptional_27431"
];

return (
  <div className="support-period-detail">
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
