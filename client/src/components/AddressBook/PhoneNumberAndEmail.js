import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function PhoneNumberAndEmail({ detail }) {
  if (!detail) return null;

  console.log("additional", detail)

  const fieldLabels = {
    phone_mobile: "Mobile /Primary Phone",
    safetoM_value: "Safe to (M)...",
    phone_work: "Work Phone",
    safetoW_value: "Safe to (W)...",
    phone_home: "Home Phone",
    safetoH_value: "Safe to (H)...",
    email: "Email",
    commentsNotes: "Notes/comments about phones/email"
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


export default PhoneNumberAndEmail;
