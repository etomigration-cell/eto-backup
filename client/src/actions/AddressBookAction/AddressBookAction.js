import { transformAllAddressBook } from 'transformer/addressBookTransformer';

export async function fetchAddressBook(params) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/participant/address-book?${params.toString()}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    console.log(data, 'data')

    const transformed = transformAllAddressBook(data);
    console.log(transformed);

    return transformed;
  } catch (error) {
    return [];
  }
}
