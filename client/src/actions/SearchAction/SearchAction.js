import { transformParticipantList } from 'transformer/participantTransformer';

export async function getSearchParticipants(params) {
  console.log(params)
  try {
    const response = await fetch(
      `http://localhost:5001/participant/search?${params.toString()}`,
    );
    const data = transformParticipantList(await response.json());
    console.log(data);
    return data;
  } catch (error) {
    console.error("Search error", error);
  }
}
