import React, { useEffect, useState } from "react";
import { fetchParticipantProgramHistory } from 'actions/ParticipantAction/ParticipantAction';
import DynamicTable from "common/DynamicTable/DynamicTable";
import Spinner from "common/Spinner/Spinner";
import "./ParticipantProgramHistory.css";

function ProgramHistory({ participant, config }) {
  const [programHistory, setProgramHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProgramHistory(params) {
      try {
        setLoading(true);
        const result = await fetchParticipantProgramHistory(params);
      
        console.log(result);
        setProgramHistory(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching family members:", error);
      }
    }

    const params = new URLSearchParams({
      id: participant.clid
      });

    if (participant.clid) {
      getProgramHistory(params);
    }
  }, [participant.clid]);

  return (
    <div className="program-history-panel">
      <div className="panel-header">
      {!loading && <strong>Program History</strong>}
      </div>
      {loading && <Spinner />}
      {!loading && <div className="ph-table-wrapper">
        <DynamicTable data={programHistory || []} config={config} className="ph-table" enableFilter={false}/>
      </div>}
    </div>
  );
}

export default ProgramHistory;
