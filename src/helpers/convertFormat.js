const convertDataFormat = (data) => {
  let newData = {
    url: "",
    method: "GET",
    header: [{ keyItem: "", valueItem: "" }],
    params: [{ keyItem: "", valueItem: "" }],
    payload: [{ keyItem: "", valueItem: "" }],
  };
  if (data?.url) {
    newData.url = data.url;
  }
  if (data?.method) {
    newData.method = data?.method?.toUpperCase() ?? "GET";
  }
  if (data?.headers) {
    newData.header = convertToArray(data?.headers, ["authority"]);
  }
  if (data?.queries) {
    newData.params = convertToArray(data?.queries);
  }
  if (data?.data) {
    let keys = Object.keys(data.data);
    if (keys.length > 0)
      try {
        const parsedData = JSON.parse(keys[0]);
        newData.payload = convertToArray(parsedData);
      } catch (err) {}
  }
  return newData;
};

const convertToArray = (json, ignoreKey = []) => {
  const data = [];
  for (let key in json) {
    if (!ignoreKey.includes(key.toLowerCase()))
      data.push({
        keyItem: key,
        valueItem: json[key],
      });
  }
  return data;
};

export default convertDataFormat;
