
import { transformBrokeragePayment } from '../../transformer/brokeragepaymentTransformer'; 
import {BrokeragePaymentdata} from '../BrokeragePaymentAction/BrokeragePaymentData.json';

export async function fetchBrokeragePayment(id) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/brokerage-payment/${id}`,
    );
    if (!response.ok) {
      // Return empty results if API call fails
      return [];
    }
    const data = await response.json();

    // Run transformer here
    const transformed = transformBrokeragePayment(data);

    return transformed;
  } catch (error) {
    // Return empty results if there is a network or other error
    return [];
  }
}