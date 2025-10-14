import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function GoalStatus({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    currentGoalStatus: "What is the current status of this goal",
    outcomesAtGoalEnd: "Overall outcomes at goal achievement / end date"
  };

return (
  <div className="goal-status-details">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default GoalStatus;
