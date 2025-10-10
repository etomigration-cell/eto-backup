import {SaftyAlertsDatadata} from '../SaftyAlertsAction/SaftyAlertsData.json';
import { transformSafetyAlerts } from '../../transformer/safetyalertsTransformer';
export async function fetchSaftyAlerts(id) {
  try {
    const response = await fetch(
      `http://localhost:5001/participant/safety-alerts/${id}`,
    );
    if (!response.ok) {
      // Return empty results if API call fails
      return [];
    }
    const data = await response.json();

    // Run transformer here
    const transformed = transformSafetyAlerts(data);

    return transformed;
  } catch (error) {
    // Return empty results if there is a network or other error
    return [];
  }
}
