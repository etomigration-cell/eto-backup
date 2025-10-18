import { transformSupportPeriods } from 'transformer/SupportPeriodTransformer';

export async function fetchSupportedPeriod(params) {
  try {
    const response = await fetch(
      `http://localhost:5001/participant/support-period?${params.toString()}`,
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
