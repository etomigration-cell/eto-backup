import { transformWdyn } from 'transformer/wdynTransformer';

export async function fetchWdyn(params) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/wdyn?${params.toString()}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();

    const transformed = transformWdyn(data);

    return transformed;
  } catch (error) {
    return [];
  }
}
