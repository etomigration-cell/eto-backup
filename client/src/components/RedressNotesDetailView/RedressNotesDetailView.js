import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressNotesGeneralDetailView.css';

function RedressNotesDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
  typeofNote_28619 : "Type of Note",
	selectyourlocation_28614 : "Select your location",
	serviceType_28607 : "Service Type",
	serviceSetting_28608 : "Service Setting",
	interpreterPresent_28609:"Interpreter Present",
  notes_28620:"Notes",
  statusofNRSapplication_28727:"Status of NRS application",
  hasawarmreferralbeenmade_28861:"Has a warm referral been made",
  hasaNRSofferbeenreceived_28862:"Has a NRS offer been received"
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


export default RedressNotesDetailView;