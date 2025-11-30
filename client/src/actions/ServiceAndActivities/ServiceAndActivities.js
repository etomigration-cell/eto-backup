import { transformServiceActivities } from 'transformer/ServiceAndActivitiesTransformer';

export async function fetchServiceActivities(params) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/service-activities?${params.toString()}`,
    );
    if (!response.ok) {
      // Return empty results if API call fails
      return [];
    }
    const data = await response.json();

    // Run transformer here
    const transformed = transformServiceActivities(data);

    return transformed;
  } catch (error) {
    // Return empty results if there is a network or other error
    return [];
  }
}
