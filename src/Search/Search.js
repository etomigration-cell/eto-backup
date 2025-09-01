import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import data from './Search.json'; // Adjust the path as needed
import { find } from 'lodash';
import TouchPointsTabs from '../TouchPointsTabs/TouchPointsTabs';
import ParticipantInformation from '../ParticipantInformation/ParticipantInformation';
import FamilyInformation from '../FamilyInformation/FamilyInformation';
import SupportPeriod from '../SupportPeriod/SupportPeriod';
import family from '../assets/familyInformation.json';
import supportPeriodData from '../assets/supportPeriod.json';
import AddressBook from '../AddressBook/AddressBook';
import addressBook from '../assets/addressBook.json';
import Wdyn from '../WDYN/Wdyn';
import wdyn from '../assets/wdyn.json';
import Consent from '../Consent/Consent';
import consent from '../assets/consent.json';
import SaftyAlerts from '../SaftyAlerts/SaftyAlerts'; 
import saftyalerts from '../assets/saftyalerts.json';


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

  const handleSubmit = (e) => {
    setShowDashboard(false);
    e.preventDefault();
    // Filter logic for display
    const filtered = data.participants.filter(
      item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selected === 'Participant' || item.type === selected)
    );
    setResults(filtered);
  };

  const programObj = find(programs.programs, { code: selectedProgram });
  const programName = programObj ? programObj.name : '';
  console.log(selectedParticipantID);
  console.log(results)
  const participant = find(results, { id: selectedParticipantID });
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
      onClick={() => { setShowDashboard(true); setSelectedParticipantID(participant.id);}}
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
    supportPeriods: <SupportPeriod supportPeriods={supportPeriodData.supportPeriods}></SupportPeriod>,
    addressBook: <AddressBook addressBook={addressBook.addressBook}></AddressBook>,
    wdyn: <Wdyn wdyn={wdyn.wdyn}></Wdyn>,
    consent: <Consent consent={consent.consent}></Consent>,
    saftyalerts: <SaftyAlerts saftyalerts={saftyalerts.saftyalerts}></SaftyAlerts>
   
  }}</TouchPointsTabs>
</>}
    </div>
  );
}

export default SearchPage;
