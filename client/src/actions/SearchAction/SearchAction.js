export async function getSearchParticipants(params) {
  try {
    const response = await fetch(
      `http://localhost:3001/participants/search?${params.toString()}`,
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Search error", error);
  }
}
