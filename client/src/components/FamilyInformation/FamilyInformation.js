import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchFamilyDetails } from "actions/FamilyAction/FamilyAction";

import "./FamilyInformation.css";

function FamilyInformation({ participant, onMemberClick }) {
  const [family, setFamily] = useState(null);

  useEffect(() => {
    async function getFamilyDetails() {
      try {
        const result = await fetchFamilyDetails(participant.id);
        setFamily(result);
      } catch (error) {
        // Handle error as needed
        console.error("Error fetching family members:", error);
      }
    }

    if (participant.id) {
      getFamilyDetails();
    }
  }, [participant.id]);

  return (
    <div className="family-panel">
      <div className="panel-header">
        <strong>{family?.[0]?.familyName}</strong>
      </div>
      <div className="panel-section">
        <table>
          <tbody>
            {family?.map((member) => (
              <tr key={member.caseNumber}>
                <td>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onMemberClick(member.caseNumber); // Call the SearchPage handler
                    }}
                  >
                    {member.fName} {member.lName}
                  </a>
                </td>
                <td className="relationship">{member.familyRelationship}</td>
                <td className="head-of-house">{member.isHeadOfFamily ? 'Head of Household' : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FamilyInformation;
