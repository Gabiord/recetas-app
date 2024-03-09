import { createSlice } from "@reduxjs/toolkit";
import recetas from "../../data/recetas.json";
import recetasGuardadas from "../../data/recetasGuardadas.json";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
        inputRecipeName : "papa",
    },
  },
  reducers: {
    setInputRecipeName : (state, action) => {
        state.value.inputRecipeName = action.payload
    }
  },
});

export const { setInputRecipeName } = shopSlice.actions;

export default shopSlice.reducer;
