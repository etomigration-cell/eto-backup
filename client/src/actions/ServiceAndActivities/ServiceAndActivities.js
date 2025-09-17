import { transformServiceActivities } from 'transformer/ServiceAndActivitiesTransformer';

export async function fetchServiceActivities(id) {
  const response = await fetch(
    `http://localhost:5001/participant/service-activities/65995`,
  );
  if (!response.ok) {
    throw new Error("Participant not found");
  }
  const data = await response.json();

  // Run transformer here
  const transformed = transformServiceActivities(data);

  return transformed;
}
