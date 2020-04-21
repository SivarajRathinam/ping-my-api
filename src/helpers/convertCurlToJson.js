import curlconverter from "curlconverter";

const convertCurlToJson = (curl) => {
  return curlconverter.toJsonString(curl);
};
export default convertCurlToJson;
