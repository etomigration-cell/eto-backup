import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import { find } from 'lodash';
import TouchPointsTabs from 'components/TouchPointsTabs/TouchPointsTabs';
import ParticipantInformation from 'components/ParticipantInformation/ParticipantInformation';
import FamilyInformation from 'components/FamilyInformation/FamilyInformation';
import SupportPeriod from 'components/SupportPeriod/SupportPeriod';
import AddressBook from 'components/AddressBook/AddressBook';
import Wdyn from 'components/WDYN/WDYN';
import SaftyAlerts from 'components/SafetyAlerts/SafetyAlerts';
import Consent from 'components/Consent/Consent';
import ServiceAndActivities from 'components/ServiceAndActivities/ServiceAndActivities';
import family from 'assets/familyInformation.json';
import addressBookData from 'assets/addressBook.json';
import consent from 'assets/consent.json';
import safetyAlerts from 'assets/safetyAlerts.json';
import supportPeriodData from 'assets/supportPeriod.json';
import wdyn from 'assets/wdyn.json';
import { supportPeriodsTableConfig, addressBookTableConfig } from 'components/DynamicTable/TableComponents'

const options = [
  { value: 'Participant', label: 'Participant' },
  { value: 'Event', label: 'Event' }
];


function SearchPage({selectedProgram, programs}) {
  const [searchText, setSearchText] = useState('');
  const [selected, setSelected] = useState('Participant');
  const [results, setResults] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [selectedParticipantID, setSelectedParticipantID] = useState(null);
  const [participant, setParticipant] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setShowDashboard(false);

  // Construct search query
  const params = new URLSearchParams({
    query: searchText
  });

  try {
    const response = await fetch(`http://localhost:3001/participants/search?${params.toString()}`);
    const data = await response.json();
    setResults(data); // Array of filtered participants from server
  } catch (error) {
    console.error('Search error', error);
    setResults([]); // Handle error gracefully
  }
};

// Assume id is the participant ID you want to fetch
const fetchParticipant = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/participant/${id}`); // Use full URL if server is on a different port
    if (!response.ok) {
      throw new Error('Participant not found');
    }
    const data = await response.json();
    // Do something with data, e.g. set state
    setParticipant(data);
    setShowDashboard(true);
  } catch (error) {
    console.error('Error fetching participant:', error);
    setParticipant(null);
  }
};

  const programObj = find(programs.programs, { code: selectedProgram });
  const programName = programObj ? programObj.name : '';
  console.log(selectedParticipantID);
  console.log(results)
  console.log(participant)

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search..."
        />
        <select
          className="search-dropdown"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <input
          className="program-name-input"
          value={programName}
          onChange={e => setSelected(e.target.value)}
        />
        <button className="search-button" type="submit">Search</button>
      </form>

  { !showDashboard && <div className="search-table-container">
  <table className="search-results-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Case Number</th>
      <th>DOB</th>
      <th>Alias</th>
      <th>Real or Fake</th>
      <th>Program Start Date</th>
    </tr>
  </thead>
  <tbody>
    {results.map(participant => (
      <tr key={participant.id}>
        <td><Link
      to={"/search"}
      onClick={() => { fetchParticipant(participant.id)}}
    >
      {participant.name}
    </Link></td>
        <td>{participant.email}</td>
        <td>{participant.caseNumber}</td>
        <td>{participant.DOB}</td>
        <td>{participant.Alias}</td>
        <td>{participant.RealOrFake}</td>
        <td>{participant.ProgramStartDate}</td>
      </tr>
    ))}
  </tbody>
</table>

</div> }

{ showDashboard && <>
<TouchPointsTabs>{{
    participantInformation: <ParticipantInformation participant={participant} />,
    familyInformation: <FamilyInformation family={family.familyInformation} />,
    supportPeriods: <SupportPeriod supportPeriods={supportPeriodData.supportPeriods} config={supportPeriodsTableConfig} supportPeriodsDetails={supportPeriodData.supportPeriodDetails}></SupportPeriod>,
    addressBook: <AddressBook addressBook={addressBookData.addressBook} config={addressBookTableConfig} addressBookDetails={addressBookData.addressBookDetails}></AddressBook>,
    wdyn: <Wdyn wdyn={wdyn.wdyn}></Wdyn>,
    consent: <Consent consent={consent.consent}></Consent>,
    saftyalerts: <SaftyAlerts saftyalerts={safetyAlerts.saftyalerts}></SaftyAlerts>,
    serviceAndActivities: <ServiceAndActivities serviceAndActivities={supportPeriodData.supportPeriods} config={supportPeriodsTableConfig} serviceAndActivitiesDetails={supportPeriodData.supportPeriodDetails}></ServiceAndActivities>
  }}</TouchPointsTabs>
</>}
    </div>
  );
}

export default SearchPage;
