export const productData = (data = [], action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      console.warn("PRODUCT_LIST saga condition ", action.response);
      return [...action.response];
    default:
      return data;
  }
};
