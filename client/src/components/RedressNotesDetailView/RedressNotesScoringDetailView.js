import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './RedressNotesGeneralDetailView.css';

function RedressNotesScoringDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
  scoreassessedby_29634 : "Score assessed by",
	isthisthefirstpreorlastpostscore_29635 : "Is this the first (pre) or last (post) score",
	domainGoals_29636 : "Domain Goals",
	domainCircumstances_29641 : "Domain Circumstances",
  ageappropriatedevelopmentScore1Significantnegativeimpactofpoorageappropriatedevelopmentonindep_29654:"Age appropriate development",
  communityparticipationnetworksScore1Significantnegativeimpactofpoorcommunityparticipationnetwo_29643:"Community participation networks",
  educationandskillstrainingScore1Significantnegativeimpactoflackofengagementwitheducationandtra_29655:"Education and skills training",
  employmentScore1Significantnegativeimpactoflackofemploymentonindependenceparticipationandwellb_29657:"Employment",
  familyFunctioningScore1Significantnegativeimpactofpoorfamilyfunctioningonindependenceparticipa_29658:"Family Functioning",
  financialresilienceScore1Significantnegativeimpactofpoorfinancialresilienceonindependenceparti_29659:"Financial resilience",
  housingScore1Significantnegativeimpactofpoorhousingonindependenceparticipationandwellbeingegro_29660:"Housing",
	materialwellbeingandbasicnecessitiesScore1Significantnegativeimpactoflackofbasicmaterialresour_29661:"Material well being and basic necessities",
  mentalhealthwellbeingandselfcareScore1Significantnegativeimpactofpoormentalhealthwellbeingands_29644:"Mental health well being and selfcare",
  personalandfamilysafetyScore1Significantnegativeimpactofpoorpersonalandfamilysafetyonindepende_29645:"Personal and family safety",
  physicalhealthScore1Significantnegativeimpactofpoorphysicalhealthonindependenceparticipationan_29662:"Physical health",
  domainSatisfaction_29646: "Domain Satisfaction",


};

return (
  <div className="RedressDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default RedressNotesScoringDetailView;