export async function fetchFamilyDetails(id) {
  const response = await fetch(
    `http://localhost:5001/participant/family-details/12849`,
  );
  if (!response.ok) {
    throw new Error("Family not found");
  }
  const data = await response.json();
  return data;
}
