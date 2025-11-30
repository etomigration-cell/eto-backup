import { transformAihwform } from '../../transformer/aihwformTransformer'; 
//import {aihwdata} from '../AIHWFormAction/AiHWFormData.json';

export async function fetchaihwForm(id) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/aihwform/${id}`,
    );
    if (!response.ok) {
      // Return empty results if API call fails
      return [];
    }
    const data = await response.json();

    // Run transformer here
    const transformed = transformAihwform(data);

    return transformed;
  } catch (error) {
    // Return empty results if there is a network or other error
    return [];
  }
}