import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function ExtendedDemographics({ detail }) {
  if (!detail) return null;

  console.log("additional", detail)

  const fieldLabels = {
    doestheParticipantspeakalanguageotherthanEnglishathome_28294: "Does the Participant speak a language other than English at home?",
    mainsourceofincome_27313: "Main source of income",
    educationStatus_27487: "Education Status",
    driversLicense18Card_27484: "Drivers License / 18+ Card",
    birthCertificate_27482: "Birth Certificate",
    medicareCard_27483: "Medicare Card",
    other_27485: "Other identifications"
  };

  const alwaysShow = [
  "doestheParticipantspeakalanguageotherthanEnglishathome_28294",
  "mainsourceofincome_27313",
  "educationStatus_27487",
  "driversLicense18Card_27484",
  "birthCertificate_27482",
  "medicareCard_27483",
  "other_27485"
];

return (
  <div className="extended-demographics">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
      alwaysShow={alwaysShow}
    />
  </div>
  );
}


export default ExtendedDemographics;
