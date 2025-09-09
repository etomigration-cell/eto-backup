export async function fetchSupportedPeriod(id) {
  const response = await fetch(
    `http://localhost:3001/participant/support-period/${id}`,
  );
  if (!response.ok) {
    throw new Error("Participant not found");
  }
  const data = await response.json();
  return data;
}
