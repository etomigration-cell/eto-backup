import { transformIncomingReferral } from 'transformer/IncomingReferralTransformer';

export async function fetchIncomingReferrals(params) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/incoming-referral?${params.toString()}`,
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
