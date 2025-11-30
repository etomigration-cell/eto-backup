import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressNotesGeneralDetailView.css';

function RedressNotesGeneralDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
  entityName : "Micah Team",
	
  

};

return (
  <div className="RedressNotesDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default RedressNotesGeneralDetailView;