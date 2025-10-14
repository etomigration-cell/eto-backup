import { transformIncomingReferral } from 'transformer/IncomingReferralTransformer';

export async function fetchIncomingReferrals(id) {
  try {
    const response = await fetch(
      `http://localhost:5001/participant/incoming-referral/${id}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    console.log(data, 'data')

    const transformed = transformIncomingReferral(data);
    console.log(transformed);

    return transformed;
  } catch (error) {
    return [];
  }
}
