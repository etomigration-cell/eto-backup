import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './SaftyAlertsDetailView.css';

function SaftyAlertsDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
   micahTeam_11292 : "Micah Team",
	extremeRisk_23528 : "Extreme Risk",
	alertCategory_9599 : "Risk Notification Category",
	notes_9602 : "Notes",
	safetydocuments_31786 : "Safety Documents",
	Reviewdate_9603 : "Date When the risk notifications to next reviewed",
	ExpirationDate_9604 : "Date the Risk Notification will expire",
	Datealertceasedbeingactive_9605 : "Date Risk Notification ceased being active"
  };

return (
  <div className="SaftyAlertsDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default SaftyAlertsDetailView;
