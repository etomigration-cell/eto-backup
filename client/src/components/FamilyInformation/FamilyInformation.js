import React, { useState, useEffect } from "react";
import { fetchFamilyDetails } from "actions/FamilyAction/FamilyAction";
import Spinner from "common/Spinner/Spinner";

import "./FamilyInformation.css";

function FamilyInformation({ participant, onMemberClick }) {
  const [family, setFamily] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFamilyDetails() {
      setLoading(true); // START loading
      try {
        const result = await fetchFamilyDetails(participant.clid);
        setFamily(result);
      } catch (error) {
        console.error("Error fetching family members:", error);
      } finally {
        setLoading(false); // END loading
      }
    }

    if (participant.clid) {
      getFamilyDetails();
    }
  }, [participant.clid]);

  if (loading) return <Spinner />;

  return (
    <div className="family-panel">
      <div className="panel-header">
        <strong>{family?.[0]?.familyName ?? "Family Members"}</strong>
      </div>
      <div className="panel-section">
  {Array.isArray(family) && family.length > 0 ? (
    <table>
      <tbody>
        {family.map((member) => (
          <tr key={member.caseNumber}>
            <td>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onMemberClick(member.caseNumber);
                }}
              >
                {member.fName} {member.lName}
              </a>
            </td>
            <td className="relationship">{member.familyRelationship}</td>
            <td className="head-of-house">{member.isHeadOfFamily ? "Head of Household" : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="no-family-found">No family found</div>
  )}
</div>
    </div>
  );
}

export default FamilyInformation;
