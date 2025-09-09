import React, { useState } from "react";
import { find } from "lodash";
import DynamicTable from "common/DynamicTable/DynamicTable";
import TouchPointsTabs from "components/TouchPointsTabs/TouchPointsTabs";
import ParticipantInformation from "components/ParticipantInformation/ParticipantInformation";
import FamilyInformation from "components/FamilyInformation/FamilyInformation";
import SupportPeriod from "components/SupportPeriod/SupportPeriod";
import AddressBook from "components/AddressBook/AddressBook";
import Wdyn from "components/WDYN/WDYN";
import SaftyAlerts from "components/SafetyAlerts/SafetyAlerts";
import Consent from "components/Consent/Consent";
import ServiceAndActivities from "components/ServiceAndActivities/ServiceAndActivities";
import addressBookData from "assets/addressBook.json";
import consentData from "assets/consent.json";
import safetyAlerts from "assets/safetyAlerts.json";
import supportPeriodData from "assets/supportPeriod.json";
import wdynData from "assets/wdyn.json";
import { supportPeriodsTableConfig, searchResultsTableConfig, addressBookTableConfig, wdynTableConfig, consentTableConfig } from "common/DynamicTable/TableComponents";
import { fetchParticipantById } from "actions/ParticipantAction/ParticipantAction";
import { getSearchParticipants } from "actions/SearchAction/SearchAction";

import "./Search.css";

const options = [
  { value: "Participant", label: "Participant" },
  { value: "Event", label: "Event" },
];

function SearchPage({ selectedProgram, programs }) {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("Participant");
  const [results, setResults] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [participant, setParticipant] = useState(null);
  const [activeTab, setActiveTab] = useState("participantInformation");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowDashboard(false);

    const params = new URLSearchParams({
      query: searchText,
    });

    const val = await getSearchParticipants(params);
    console.log(val);
    setResults(val);
  };

  const fetchParticipant = async (id) => {
    try {
      const data = await fetchParticipantById(id);
      setParticipant(data);
      setShowDashboard(true);
    } catch (error) {
      console.error("Error fetching participant:", error);
      setParticipant(null);
    }
  };

  const handleFamilyMemberClick = async (id) => {
    try {
      const data = await fetchParticipantById(id);
      console.log(data);
      setParticipant(data);
      setShowDashboard(true);
      setActiveTab("participantInformation");
    } catch (error) {
      setParticipant(null);
    }
  };
  

  const programObj = find(programs.programs, { code: selectedProgram });
  const programName = programObj ? programObj.name : "";
  console.log(results, 'results');
  const columns = searchResultsTableConfig(fetchParticipant);

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        />
        <select
          className="search-dropdown"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <input
          className="program-name-input"
          value={programName}
          onChange={(e) => setSelected(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {!showDashboard && results.length > 0 && (
        <div className="search-table-container">
          <DynamicTable data={results} config={columns} className="search-results-table"/>
        </div>
      )}

      {showDashboard && (
        <>
          <TouchPointsTabs activeTab={activeTab} onTabChange={setActiveTab}>
            {{
              participantInformation: (
                <ParticipantInformation participant={participant} />
              ),
              familyInformation: (
                <FamilyInformation
                  participant={participant}
                  onMemberClick={handleFamilyMemberClick}
                />
              ),
              supportPeriods: (
                <SupportPeriod
                  config={supportPeriodsTableConfig}
                  participant={participant}
                ></SupportPeriod>
              ),
              addressBook: <AddressBook addressBook={addressBookData.addressBook} config={addressBookTableConfig} addressBookDetails={addressBookData.addressBookDetails}></AddressBook>,
              wdyn: <Wdyn wdyn={wdynData.wdyn} config={wdynTableConfig} wdynDetails={wdynData.wdynDetails}></Wdyn>,
              consent: <Consent consent={consentData.consent} config={consentTableConfig} consentDetails={consentData.consentDetails}></Consent>,
              saftyalerts: <SaftyAlerts saftyalerts={safetyAlerts.saftyalerts}></SaftyAlerts>,
              serviceAndActivities: (
                <ServiceAndActivities
                  serviceAndActivities={supportPeriodData.supportPeriods}
                  config={supportPeriodsTableConfig}
                  serviceAndActivitiesDetails={
                    supportPeriodData.supportPeriodDetails
                  }
                ></ServiceAndActivities>
              ),
            }}
          </TouchPointsTabs>
        </>
      )}
    </div>
  );
}

export default SearchPage;
