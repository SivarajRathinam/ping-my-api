const convertArrayToJson = (array) => {
  let json = {};
  let newArray = [...array];
  newArray.map((item) => {
    if (item.keyItem) {
      json[item.keyItem] = item.valueItem;
    }
  });
  return json;
};
export default convertArrayToJson;
