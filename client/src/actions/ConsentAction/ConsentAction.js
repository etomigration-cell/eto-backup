import { transformConsent } from 'transformer/msuTransformer';
export async function fetchSaftyConsent(id) {
  try {
    const response = await fetch(
      `http://localhost:5001/participant/consent/${id}`,
    );
    if (!response.ok) {
      // Return empty results if API call fails
      return [];
    }
    const data = await response.json();

    // Run transformer here
    const transformed = transformConsent(data);

    return transformed;
  } catch (error) {
    // Return empty results if there is a network or other error
    return [];
  }
}