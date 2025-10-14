import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function AddressDetails({ detail }) {
  if (!detail) return null;

  console.log("additional", detail)

  const fieldLabels = {
    addressbookStatus: "Address book status",
    whoseContactDetails_value: "Whose Contact Details are these?",
    usethisaddressforDRCDEXsubmission_28230: "(For Lotus Place, Lotus DRC and Lotus Redress teams only) Use this address for DEX submission?",
    accommodationType_value: "Accommodation Type",
    accommodationType_other: "Which accomdation is it?",
    apartmentUnitNo_10903: "Apartment / Unit No",
    address_streetNumber: "Street Number",
    address_streetName: "Street Name",
    address_poBox: "PO Box",
    address_suburb: "Suburb",
    address_postCode: "Post code",
    keyNumber: "Key Number",
    whendidtheparticipantbegintoresideatthisaddress: "When did the participant begin to reside at the address?",
    whendidtheparticipantceaseresidingatthisaddressLeaveblankifcurrentaddress: "When did the participant cease residing at this address?",
    commentsNotes: "Comments / Notes"
  };

  const alwaysShow = [
  "addressbookStatus",
  "accommodationType_27221"
];

return (
  <div className="support-period-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={alwaysShow}
    />
  </div>
  );
}


export default AddressDetails;
