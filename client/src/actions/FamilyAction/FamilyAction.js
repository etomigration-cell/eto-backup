export async function fetchFamilyDetails(id) {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/participant/family-details/${id}`
  );
  if (!response.ok) {
    throw new Error("Family not found");
  }
  const data = await response.json();
  return data;
}

