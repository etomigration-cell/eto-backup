import { transformconsent } from '../../transformer/consentTransformer';

export async function fetchConsent(id) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/consent/${id}`,
    );
    if (!response.ok) {
      // Return empty results if API call fails
      return [];
    }
    const data = await response.json();

    // Run transformer here
    const transformed = transformconsent(data);

    return transformed;
  } catch (error) {
    // Return empty results if there is a network or other error
    return [];
  }
}