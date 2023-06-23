import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/course.model";

const initialState: CourseModel[] = [];

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (cart, action: PayloadAction<CourseModel>) => {
      cart.push(action.payload);
      return cart;
    },
  },
});

export const { addItemToCart } = cartReducer.actions;
export default cartReducer.reducer;
