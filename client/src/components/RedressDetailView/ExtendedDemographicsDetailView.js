import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressGeneralDetailView.css';

function ExtendedDemographicsDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
  doestheParticipantspeakalanguageotherthanEnglishathome_28701 : "does the Participant speak a language other than English at home",
	mainsourceofincome_28670 : "main source of income",
	educationStatus_28698 : "Education Status",
	
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


export default ExtendedDemographicsDetailView;