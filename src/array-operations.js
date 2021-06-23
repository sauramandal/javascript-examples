const checkIfKeyExist = (data, key) => {
  return data.every((item) => key in item);
};

export const removeDuplicatesBy = (flightData, key) => {
  if (!flightData || !key || !checkIfKeyExist(flightData, key)) return;
  if (Array.isArray(flightData)) {
    return flightData.reduce((acc, currentObj) => {
      let x = acc.find((item) => item[key] === currentObj[key]);
      if (!x) return acc.concat([currentObj]);
      else return acc;
    }, []);
  }
};
