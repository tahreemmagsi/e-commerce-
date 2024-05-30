import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  featuredProducts: [],
  singleProduct: {},
  searchResults: [],
  filters: [],
  minPrice:0,
  maxPrice:0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      recalculateTotals(state);
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    filterProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchResults = state.items.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

    },
    removeproduct: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId);
      recalculateTotals(state);
    },
    filterByCategory: (state, action) => {
      const category = action.payload.toLowerCase();
      if (category === "all") {
        state.filters = state.items;
      } else {
        state.filters = state.items.filter(
          (product) => product.category.toLowerCase() === category
        );
      }
            

    },
    
    filterByColor: (state, action) => {
      const color = action.payload.toLowerCase();
      if (color === "all") {
        state.filters = state.items; 
      } else {
        state.filters = state.items.filter(
          (product) => product.colors && product.colors.includes(color)
        );
      }
    },
  

    filterByCompany: (state, action) => {
      const company = String(action.payload).toLowerCase();

     if (company === "all") {
        state.filters = state.items;
      } else {
        state.filters = state.items.filter(
          (product) => product.company.toLowerCase() === company
        );
      }

    },
    filterFeaturedProducts: (state, action) => {
      state.featuredProducts = action.payload.filter(
        (product) => product.featured === true
      );
    },
    setMaxPrice:(state,action)=>{
      state.maxPrice=action.payload;

    },
    setMinPrice:(state,action)=>{
      state.minPrice=action.payload;

    },
    filterByPrice: (state, action) => {
      const { minPrice, maxPrice } = action.payload;
      state.filters = state.items.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    },
    increasequantity: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      recalculateTotals(state);
    },

    decreasequantity: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });

      recalculateTotals(state);
    },
  },
});

const recalculateTotals = (state) => {
  state.totalQuantity = state.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  state.totalPrice = state.cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export const {
  addToCart,
  filterFeaturedProducts,
  removeproduct,
  increasequantity,
  decreasequantity,
  setSingleProduct,
  filterProducts,
  setItems,
  filterByCategory,filterByCompany,filterByColor,setMaxPrice,setMinPrice,filterByPrice
} = cartSlice.actions;

export default cartSlice.reducer;
