import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function InstitutionalHistory({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    historyasachild_27338: "History as a child",
    detailsofbeinginstitutionalizedasachild_27857: { label: "Details (on history of being institutionalized as a child)", type: "textarea" },
    historyasanadult_27340: "History as a adult",
    detailsonhistoryofbeinginstitutionalizedasanadult_27858: "Details (on history of being institutionalized as a adult)",
    childProtection_27342: "Child Protection",
    otherorders_27343: "Other orders"
  };

  const alwaysShow = [
  "historyasachild_27338",
  "detailsofbeinginstitutionalizedasachild_27857",
  "historyasanadult_27340",
  "detailsonhistoryofbeinginstitutionalizedasanadult_27858",
  "childProtection_27342",
  "otherorders_27343"
];

return (
  <div className="institutional-history">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={alwaysShow}
    />
  </div>
  );
}


export default InstitutionalHistory;
