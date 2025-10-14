import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function IncomingReferralDetails({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    micahTeam: "Micah Team",
    referredFrom: "Referred from",
    wasReferralReceivedViaSRS: "Was this referral received via SRS?",
    scannedDocuments: "Scanned documents",
    referralReviewedOn: "Referral reviewed on:",
    referralReceivedOn: "Referral accepted or declined by this Micah Team on",
    referralReviewedBy: "Referral reviewed by",
    referralAccepted: "Referral accepted",
    comments: "Comments"
  };

return (
  <div className="incoming-referral-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1}
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default IncomingReferralDetails;
