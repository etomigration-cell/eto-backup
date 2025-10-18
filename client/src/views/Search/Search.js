import React, { useState, useRef  } from "react";
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
import Documents from "components/Documents/Documents";
import consentData from "assets/consent.json";
import safetyAlerts from "assets/safetyAlerts.json";
import { supportPeriodsTableConfig, searchResultsTableConfig, addressBookTableConfig, wdynTableConfig, consentTableConfig, serviceActivitiesTableConfig, documentTableConfig, plannedActionTableConfig, incomingReferralConfig } from "common/DynamicTable/TableComponents";
import { fetchParticipantById } from "actions/ParticipantAction/ParticipantAction";
import { getSearchParticipants } from "actions/SearchAction/SearchAction";
import Spinner from "common/Spinner/Spinner";
import PlannedActions from "components/PlannedAction/PlannedAction";

import "./Search.css";
import IncomingReferral from "components/IncomingReferral/IncomingReferral";

const options = [
  { value: "Participant", label: "Participant" }
];

function SearchPage({ selectedProgram, programs }) {
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState("");
  const [selected, setSelected] = useState("Participant");
  const [program, setProgram] = useState("762");
  const [results, setResults] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [participant, setParticipant] = useState(null);
  const [activeTab, setActiveTab] = useState("participantInformation");
  const [loading, setLoading] = useState(false);
  const [defaultDisplay, setDefaultDisplay] = useState(false);

  const documentRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) {
    setSearchError("Please enter a search term.");
    return;
  }
    setSearchError("");
    setShowDashboard(false);
    setDefaultDisplay(true);
    setResults([]);
    setLoading(true);

    console.log(program);

    const params = new URLSearchParams({
    query: searchText,
    ...(program && program !== 'All' ? { program: program } : {})
    });



    const participants = await getSearchParticipants(params);
    setResults(participants);
    setLoading(false);
    setSearchText("");
  };

  const fetchParticipant = async (id) => {
    try {
      setLoading(true);
      const participant = results.find(p => p.clid === id);
      setParticipant(participant);
      setLoading(false);
      setShowDashboard(true);
      setActiveTab("participantInformation");
    } catch (error) {
      console.error("Error fetching participant:", error);
      setParticipant(null);
    }
  };

  const handleFamilyMemberClick = async (id) => {
    try {
      setLoading(true);
      const data = await fetchParticipantById(id);
      setLoading(false);
      setParticipant(data);
      setShowDashboard(true);
      setActiveTab("participantInformation");
    } catch (error) {
      setParticipant(null);
    }
  };
  
  const handleDocumentDownload = () => {
   // documentRef.current.handleDownload();
  };
  

  const programObj = find(programs.programs, { code: selectedProgram });
  const programName = programObj ? programObj.name : "";
  const columns = searchResultsTableConfig(fetchParticipant);

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
        className={`search-input${searchError ? " field-error" : ""}`}
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          if (searchError) setSearchError(""); // Clear error as user types
        }}
        placeholder={searchError ? searchError : "Search..."}
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
        <select
          className="search-program"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
        >
          {programs.programs.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {loading && <Spinner />}
      {!showDashboard && !loading && defaultDisplay && (
      <div className="search-table-container">
        <DynamicTable
          data={results}
          config={columns}
          className="search-results-table"
          enableFilter={false}
        />
        <div className="pagination-wrapper"></div>
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
                  programCode={program}
                ></SupportPeriod>
              ),
              plannedAction: (<PlannedActions config={plannedActionTableConfig} participant={participant} programCode={program}></PlannedActions>),
              addressBook: <AddressBook participant={participant} config={addressBookTableConfig} programCode={program}></AddressBook>,
              wdyn: <Wdyn participant={participant} config={wdynTableConfig} programCode={program}></Wdyn>,
              consent: <Consent consent={consentData.consent} config={consentTableConfig} consentDetails={consentData.consentDetails}></Consent>,
              saftyalerts: <SaftyAlerts saftyalerts={safetyAlerts.saftyalerts}></SaftyAlerts>,
              serviceAndActivities: (
                <ServiceAndActivities
                  participant={participant}
                  config={serviceActivitiesTableConfig}
                  programCode={program}
                />
              ),
              documents: <Documents ref={documentRef} participant={participant} config={documentTableConfig} handleDocumentDownload={handleDocumentDownload} programCode={program}/>,
              incomingReferral: <IncomingReferral participant={participant} config={incomingReferralConfig} programCode={program}/>
            }}
          </TouchPointsTabs>
        </>
      )}
    </div>
  );
}

export default SearchPage;
