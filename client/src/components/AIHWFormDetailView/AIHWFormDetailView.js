import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './AIHWFormDetailView.css';

function AIHWFormDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
   
    micahTeam_16159:"Micah Team",
    start_16161:"Start Time of Activity",
    endoptional_16162:"End Time of Activity",
   
  };

   const alwaysShow = [
    "start_16161",
    "endoptional_16162",
  
];

return (
  <div className="AIHWFormDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={alwaysShow}
    />
  </div>
  );
}


export default AIHWFormDetailView;