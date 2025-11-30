import { transformmsu } from '../../transformer/msuTransformer';

export async function fetchMSU(id) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/msu/${id}`,
    );
    if (!response.ok) {
      // Return empty results if API call fails
      return [];
    }
    const data = await response.json();

    // Run transformer here
    const transformed = transformmsu(data);

    return transformed;
  } catch (error) {
    // Return empty results if there is a network or other error
    return [];
  }
}