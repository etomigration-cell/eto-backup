import { transformParticipantList } from 'transformer/participantTransformer';

export async function getSearchParticipants(params) {
  console.log(params.toString())
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/search?${params.toString()}`,
    );
    const data = transformParticipantList(await response.json());
    console.log(data);
    return data;
  } catch (error) {
    console.error("Search error", error);
  }
}
