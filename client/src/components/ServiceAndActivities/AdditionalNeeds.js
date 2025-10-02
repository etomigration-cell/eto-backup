import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function AdditionalNeeds({ detail }) {
  if (!detail) return null;

  console.log("additional", detail)

  const fieldLabels = {
    needsIdentifiedHousing: "Needs Identified: Housing Accommodation",
    needsIdentifiedGeneralAssistanceAndSupport: "Needs Identified: General Assistance & Support",
    needsIdentifiedSpecialisedServices: "Needs Identified: Specialised Services",
  };

  const alwaysShow = [
  "needsIdentifiedHousing",
  "needsIdentifiedGeneralAssistanceAndSupport",
  "needsIdentifiedSpecialisedServices"
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


export default AdditionalNeeds;
