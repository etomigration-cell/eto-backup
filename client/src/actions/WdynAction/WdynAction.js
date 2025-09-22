import { transformSupportPeriods } from 'transformer/SupportPeriodTransformer';

export async function fetchWdyn(id) {
  try {
    const response = await fetch(
      `http://localhost:5001/participant/wdyn/${id}`,
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
