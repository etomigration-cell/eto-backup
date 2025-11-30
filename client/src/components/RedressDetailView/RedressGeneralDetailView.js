import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressGeneralDetailView.css';

function RedressGeneralDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
  entityName : "Micah Team",
	mailingList_28674 : "Mailing List",
	areyouaForgottenAustralian_28702 : "Are you a Forgotten Australian",
	howwastheparticipantreferredtoourservice_28703 : "How was the participant referred to our service?",
	externalreference_28705: "External reference",
  

};

return (
  <div className="RedressDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default RedressGeneralDetailView;