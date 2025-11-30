import { getTouchpointIDs } from 'transformer/touchpointsTransformer';

export async function fetchTouchPoints(programId) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/program/touchpoints?programId=${programId}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();

    const touchpoints = getTouchpointIDs(data);

    return touchpoints;
  } catch (error) {
    return [];
  }
}


