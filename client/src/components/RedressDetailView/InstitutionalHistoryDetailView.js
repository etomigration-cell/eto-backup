import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressGeneralDetailView.css';

function InstitutionalHistoryDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
  historyasachild_28722 : "History as a child",
	detailsonhistoryofbeinginstitutionalizedasachild_28723 : "Details (on history of being institutionalized as a child)",
	historyasanadult_28724 : "History as an adult",
	detailsonhistoryofbeinginstitutionalizedasanadult_28725 : "details on history of being institutionalized as an adult",
	
};

return (
  <div className="MSUDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default InstitutionalHistoryDetailView;