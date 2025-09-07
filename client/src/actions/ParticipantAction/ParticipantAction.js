// action/participant.js

export async function fetchParticipantById(id) {
  const response = await fetch(`http://localhost:3001/participant/${id}`);
  if (!response.ok) {
    throw new Error("Participant not found");
  }
  const data = await response.json();
  return data;
}

export async function fetchParticipantAuditReport(id) {
  const response = await fetch(
    `http://localhost:3001/participant/audit-report/${id}`,
  );
  if (!response.ok) {
    throw new Error("Participant audit report not found");
  }
  const data = await response.json();
  return data;
}

export async function fetchParticipantProgramHistory(id) {
  const response = await fetch(
    `http://localhost:3001/participant/program-history/${id}`,
  );
  if (!response.ok) {
    throw new Error("Participant program history not found");
  }
  const data = await response.json();
  return data;
}
