import { transformSupportPeriods } from 'transformer/SupportPeriodTransformer';

export async function fetchPlannedAction(id) {
  try {
    const response = await fetch(
      `http://localhost:5001/participant/planned-action/${id}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();

    const transformed = transformSupportPeriods(data);

    return transformed;
  } catch (error) {
    return [];
  }
}
