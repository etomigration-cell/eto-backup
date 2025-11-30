import { transformAllLotusNotes } from 'transformer/lotusNotesTransformer';

export async function fetchLotusNotes(params) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/lotus-notes?${params.toString()}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    console.log(data, 'data')

    const transformed = transformAllLotusNotes(data);
    console.log(transformed);

    return transformed;
  } catch (error) {
    return [];
  }
}
