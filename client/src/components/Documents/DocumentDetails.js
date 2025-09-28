import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function DocumentDetails({ detail }) {
  if (!detail) return null;

  console.log("additional", detail)

  const fieldLabels = {
        responseCreatedDate: "Date Completed",
        fileName: "File Name",
        contentType: "Content Type",
        documentType:"Document Type",
        shortDescription: "Short description",
        programName: "Program Name",
        StaffName: "Completed By"
  };

return (
  <div className="documents-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={[]}
    />
  </div>
  );
}


export default DocumentDetails;
