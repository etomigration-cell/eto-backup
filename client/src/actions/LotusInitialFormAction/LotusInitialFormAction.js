import { transformAllLotusInitialForm } from 'transformer/lotusInitialFormTransformer';

export async function fetchLotusInitialForm(params) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/lotus-initial-form?${params.toString()}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    console.log(data, 'data')

    const transformed = transformAllLotusInitialForm(data);
    console.log(transformed);

    return transformed;
  } catch (error) {
    return [];
  }
}
