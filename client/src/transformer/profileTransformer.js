export function transformUserData(data) {
  return {
    programIDs: data.map(item => item.programID),
    role: data[0]?.role,
    fName: data[0]?.fName,
    lName: data[0]?.lName,
    userName: data[0]?.userName,
  };
}