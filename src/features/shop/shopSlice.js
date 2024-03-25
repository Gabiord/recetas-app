import { createSlice } from "@reduxjs/toolkit";


export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      recipesFiltered: [],
      inputRecipeName: "",
      categorySelected: "",
      modalVisible: false,
      recipeIdSelected: null,
    },
  },
  reducers: {
    setInputRecipeName: (state, action) => {
      state.value.inputRecipeName = action.payload;
    },
    setCategorySelected: (state, action) => {
      state.value.categorySelected = action.payload;
    },
    setModalVisible: (state) => {
      state.value.modalVisible = !state.value.modalVisible;
    },
    setRecipeIdSelected: (state, action) => {
      state.value.recipeIdSelected = action.payload;
    },
    setRecipesFiltered: (state, action) => {
      state.value.recipesFiltered = action.payload;
    }
  },
});

export const {
  setInputRecipeName,
  setCategorySelected,
  setModalVisible,
  setRecipeIdSelected,
  setRecipesFiltered
} = shopSlice.actions;

export default shopSlice.reducer;
