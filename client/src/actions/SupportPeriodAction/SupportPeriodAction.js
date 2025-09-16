import { transformSupportPeriods } from 'transformer/SupportPeriodTransformer';

export async function fetchSupportedPeriod(id) {
  const response = await fetch(
    `http://localhost:5001/participant/support-period/12849`,
  );
  if (!response.ok) {
    throw new Error("Participant not found");
  }
  const data = await response.json();

  // Run transformer here
  const transformed = transformSupportPeriods(data);

  return transformed;
}
