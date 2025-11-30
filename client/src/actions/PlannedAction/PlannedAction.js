import { transformAllPlannedAction } from 'transformer/PlannedActionTransformer';

export async function fetchPlannedAction(params) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/planned-action?${params.toString()}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();

    const transformed = transformAllPlannedAction(data);

    return transformed;
  } catch (error) {
    return [];
  }
}
