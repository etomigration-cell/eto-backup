import { transformUserData } from 'transformer/profileTransformer';

export async function fetchProfile(email) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/profile/profile?email=${"Karthika.Subramani@micahprojects.org.au"}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();

    const profileData = transformUserData(data);

    return profileData;
  } catch (error) {
    return [];
  }
}


