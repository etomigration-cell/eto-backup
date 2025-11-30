// action/participant.js

import { tranformProgramHistories } from "transformer/participantTransformer";

export async function fetchParticipantById(id) {
  const response = await fetch(`${process.env.REACT_APP_API_BASE}/participant/participant-details?id=${id}`);
  if (!response.ok) {
    throw new Error("Participant not found");
  }
  const data = await response.json();
  return data;
}

export async function fetchParticipantAuditReport(id) {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/participant/audit-report/${id}`,
  );
  if (!response.ok) {
    throw new Error("Participant audit report not found");
  }
  const data = await response.json();
  return data;
}

export async function fetchParticipantProgramHistory(params) {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/participant/program-history?${params.toString()}`
  );
  if (!response.ok) {
    throw new Error("Participant program history not found");
  }
  const data = await response.json();
  const history = tranformProgramHistories(data);
  console.log(history, 'history')
  return tranformProgramHistories(data);
}
