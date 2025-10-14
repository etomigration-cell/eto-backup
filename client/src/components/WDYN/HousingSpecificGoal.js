import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function HousingSpecificGoal({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    hasPermanentlyHoused: "Has this person/family been permanently housed?"
  };

  const alwaysShow = [
  "hasPermanentlyHoused"
];

return (
  <div className="effort-details">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={alwaysShow}
    />
  </div>
  );
}


export default HousingSpecificGoal;
