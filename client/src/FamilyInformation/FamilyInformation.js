import React from "react";
import './FamilyInformation.css'

function FamilyInformation({ family }) {
  console.log(family);
  return (
    <div className="family-panel">
      <div className="panel-header">
        <strong>{family.familyName}</strong>
      </div>
      <div className="panel-section">
        <table>
          <tbody>
            {family.members.map(member => (
              <tr key={member.id}>
                <td>
                  <a href={member.link} className={member.isParticipant ? "participant-link" : ""}>
                    {member.name}
                  </a>
                </td>
                <td className="relationship">{member.relationship}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FamilyInformation;