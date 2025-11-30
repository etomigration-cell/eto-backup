import React, { useState, useRef, useEffect } from "react";
import { find } from "lodash";
import DynamicTable from "common/DynamicTable/DynamicTable";
import TouchPointsTabs from "components/TouchPointsTabs/TouchPointsTabs";
import ParticipantInformation from "components/ParticipantInformation/ParticipantInformation";
import FamilyInformation from "components/FamilyInformation/FamilyInformation";
import SupportPeriod from "components/SupportPeriod/SupportPeriod";
import AddressBook from "components/AddressBook/AddressBook";
import Wdyn from "components/WDYN/WDYN";
import AIHWForm from "components/AIHWForm/AIHWForm";
import BrokeragePayment from "components/BrokeragePayment/BrokeragePayment";
import SafetyAlerts  from "components/SafetyAlerts/SafetyAlerts";
import Consent from "components/Consent/Consent";
import MSU  from "components/MSU/MSU";
import ServiceAndActivities from "components/ServiceAndActivities/ServiceAndActivities";
import Documents from "components/Documents/Documents";
import { supportPeriodsTableConfig, searchResultsTableConfig, addressBookTableConfig, wdynTableConfig, consentTableConfig, serviceActivitiesTableConfig, documentTableConfig, plannedActionTableConfig, incomingReferralConfig, AIHWFormTableConfig, SafetyAlertsTableConfig, msuTableConfig, brokeragePaymentTableConfig, programHistoryConfig, lotusNotesConfig, lotusInitialFormConfig, redressTableConfig, redressNotesTableConfig } from "common/DynamicTable/TableComponents";
import { fetchParticipantById } from "actions/ParticipantAction/ParticipantAction";
import { getSearchParticipants } from "actions/SearchAction/SearchAction";
import { fetchTouchPoints } from "actions/TouchPointsAction/TouchPointsAction";
import { fetchProfile } from "actions/ProfileAction/ProfileAction";
import Spinner from "common/Spinner/Spinner";
import PlannedActions from "components/PlannedAction/PlannedAction";
import LotusNotes from "components/LotusNotesView/LotusNotes";
import LotusInitialForm from "components/LotusInitialFormView/LotusInitialForm";
import Redress from "components/Redress/Redress";
import RedressNotes from "components/RedressNotes/RedressNotes";

import "./Search.css";
import IncomingReferral from "components/IncomingReferral/IncomingReferral";

const options = [
  { value: "Participant", label: "Participant" }
];

function SearchPage({ selectedProgram, programs }) {
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState("");
  const [selected, setSelected] = useState("Participant");
  const [profilePrograms, setProfilePrograms] = useState([]);
  const [program, setProgram] = useState("762");
  const [results, setResults] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [participant, setParticipant] = useState(null);
  const [activeTab, setActiveTab] = useState("participantInformation");
  const [loading, setLoading] = useState(false);
  const [defaultDisplay, setDefaultDisplay] = useState(false);
  const [touchPoints, setTouchPoints] = useState([]);

  const documentRef = useRef();

  useEffect(() => {
        async function getPrograms() {
          try {
            setLoading(true);
            const profile = await fetchProfile("");
            const params = new URLSearchParams({
            query: "null",
            ...(program && program !== 'All' ? { program: program } : {})
            });
            const participants = await getSearchParticipants(params);
            setResults(participants);
            setShowDashboard(false);
            console.log(participants);
            setProfilePrograms(profile?.programIDs || programs);
            setLoading(false);
            setDefaultDisplay(true);
          } catch (error) {
            console.error("Error fetching family members:", error);
          }
        }

        getPrograms();
        
      }, [program]);

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
    const touchPoints = await fetchTouchPoints(program);
    console.log("touchPoints==", touchPoints);
    setTouchPoints(touchPoints);
    setResults(participants);
    setLoading(false);
    setSearchText("");
  };

  const fetchParticipant = async (id) => {
    try {
      setLoading(true);
     // const touchPoints = await fetchTouchPoints(program);
    //  console.log("touchPoints==", touchPoints);
    //  setTouchPoints(touchPoints);
      const participant = await fetchParticipantById(id);
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

  console.log(programs)

  const tabs = {
  participantInformation: (
    <ParticipantInformation key="participantInformation" participant={participant} programHistoryConfig={programHistoryConfig}/>
  ),
  familyInformation: (
    <FamilyInformation
      key="familyInformation"
      participant={participant}
      onMemberClick={handleFamilyMemberClick}
    />
  ),
    supportPeriods: (
      <SupportPeriod
        key="supportPeriods"
        config={supportPeriodsTableConfig}
        participant={participant}
        programCode={program}
      />
    ),
    plannedAction: (
      <PlannedActions
        key="plannedAction"
        config={plannedActionTableConfig}
        participant={participant}
        programCode={program}
      />
    ),
    addressBook: (
      <AddressBook
        key="addressBook"
        participant={participant}
        config={addressBookTableConfig}
        programCode={program}
      />
    ),
    wdyn: (
      <Wdyn
        key="wdyn"
        participant={participant}
        config={wdynTableConfig}
        programCode={program}
      />
    ),
    serviceAndActivities: (
      <ServiceAndActivities
        key="serviceAndActivities"
        participant={participant}
        config={serviceActivitiesTableConfig}
        programCode={program}
      />
    ),
    documents: (
      <Documents
        key="documents"
        ref={documentRef}
        participant={participant}
        config={documentTableConfig}
        handleDocumentDownload={handleDocumentDownload}
        programCode={program}
      />
    ),
    incomingReferral: (
      <IncomingReferral
        key="incomingReferral"
        participant={participant}
        config={incomingReferralConfig}
        programCode={program}
      />
    ),
    aihw: (
      <AIHWForm
        key="aihw"
        participant={participant}
        config={AIHWFormTableConfig}
      />
    ),
    brokeragePayment: (
      <BrokeragePayment
        key="brokeragePayment"
        participant={participant}
        config={brokeragePaymentTableConfig}
      />
    ),
    consent:(<Consent participant={participant} config={consentTableConfig}></Consent>),
    msu: (
      <MSU
        key="msu"
        participant={participant}
        config={msuTableConfig}
      />
    ),
    safetyAlerts: (
      <SafetyAlerts
        key="safetyAlerts"
        participant={participant}
        config={SafetyAlertsTableConfig}
      />
    ),
    lotusNotes: (
      <LotusNotes
        key="lotusNotes"
        participant={participant}
        config={lotusNotesConfig}
      />
    ),
    lotusInitialForm: (
      <LotusInitialForm
        key="lotusInitialForm"
        participant={participant}
        config={lotusInitialFormConfig}
      />
    ),
    redress: (<Redress participant={participant} config={redressTableConfig}></Redress>),
    redressNotes:(<RedressNotes participant={participant} config={redressNotesTableConfig}></RedressNotes>),
  };

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
          {programs.programs.map((opt) => 
          profilePrograms.includes(parseInt(opt.code)) ? (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ) : null
        )}
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
          <TouchPointsTabs activeTab={activeTab} onTabChange={setActiveTab} selectedProgram={program}>
          {tabs}
          </TouchPointsTabs>

        </>
      )}
    </div>
  );
}

export default SearchPage;
