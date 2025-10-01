import { transformWdyn } from 'transformer/wdynTransformer';

export async function fetchWdyn(id) {
  try {
    const response = await fetch(
      `http://localhost:5001/participant/wdyn/${id}`,
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
