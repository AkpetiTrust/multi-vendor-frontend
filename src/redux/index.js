import { createStore, combineReducers } from "redux";

// State
const appState = {
  productList: [],
  storeList: [],
};

// Actions
export const updateProductList = (productList) => ({
  type: "UPDATEPRODUCTS",
  payload: productList,
});

export const updateStoreList = (storeList) => ({
  type: "UPDATESTORES",
  payload: storeList,
});

// Reducers

const update = (state = appState, action) => {
  switch (action.type) {
    case "UPDATEPRODUCTS":
      return { ...state, ...{ productList: action.payload } };
    case "UPDATESTORES":
      return { ...state, ...{ storeList: action.payload } };
    default:
      return state;
  }
};

const allReducers = combineReducers({ update });

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
