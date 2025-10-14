import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function SupportPlanGoal({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    dateCompleted: "Date completed",
    micahTeam: "Micah Team",
    start: "Start Time",
    endOptional: "End Time",
    scopeOfGoal: "Scope of goal",
    isThisGoalFor: "Is this goal for",
    domain: "Domain (Choose one)",
    goalLongerTerm: "Goal - Longer Term",
    shsTypeOfServiceActivity: "Select if this goal is related to an established Plan Type",
    sleepingRough: "is the participant/family sleeping rough at the time of this presentation?",
    motivationForGoal: "Participant level of motivation for this goal.",
    comments: "How and why was this goal determination reached?"   
  };

return (
  <div className="support-plan-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default SupportPlanGoal;
