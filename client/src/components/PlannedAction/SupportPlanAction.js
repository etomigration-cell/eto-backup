import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";

function SupportPlanAction({ detail }) {
  if (!detail) return null;

  console.log("support", detail)

  const fieldLabels = {
    dateCompleted: "Date completed",
    micahTeam: "Micah Team",
    whichGoalWasThisFor_display: { label: "Which goal was this for?", type: "textarea"},
    actionLTGoal_display: "This action is in response to this LT goal:",
    actionOtherGoal_display: "This action is in response to this other goal",
    actionDescription: { label: "Action Description", type: "textarea" },
    actionDueDate:"Action Due date",
    primarilyResponsible_name:"Primarily Responsible",
    completionDate: "Close Date",
    closeStatus_status: "Close status of Planned Action"
  };

return (
  <div className="support-plan-action">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default SupportPlanAction;
