// For development
import nike from "../../development_assets/nike.jpg";
import sneaker from "../../development_assets/smart-sneaker.jpg";
import store1 from "../../development_assets/store1.jpg";
import store2 from "../../development_assets/store2.jpg";

// State
const updateState = {
  productList: [
    {
      name: "Nike Sneakers",
      price: 5000,
      id: 1,
      image: nike,
    },
    {
      name: "Designer Sneakers",
      price: 7000,
      id: 2,
      image: sneaker,
    },
  ],
  storeList: [
    {
      name: "Shoes Limited",
      owner: "James John",
      id: 1,
      img: store1,
    },
    {
      name: "Clothes Inc.",
      owner: "Sarah Jane",
      id: 2,
      img: store2,
    },
  ],
};

const update = (state = updateState, action) => {
  switch (action.type) {
    case "UPDATEPRODUCTS":
      return { ...state, ...{ productList: action.payload } };
    case "UPDATESTORES":
      return { ...state, ...{ storeList: action.payload } };
    default:
      return state;
  }
};

export default update;
