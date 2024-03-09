import { createSlice } from "@reduxjs/toolkit";
import recetas from "../../data/recetas.json";
import recetasGuardadas from "../../data/recetasGuardadas.json";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      recipesFiltered: recetas,
      inputRecipeName: "",
      categorySelected: "",
      modalVisible: false,
    },
  },
  reducers: {
    setInputRecipeName: (state, action) => {
      state.value.inputRecipeName = action.payload;
      state.value.recipesFiltered = recetas;

      if (state.value.inputRecipeName) {
        const filter = state.value.recipesFiltered.filter((receta) =>
          receta.name.includes(state.value.inputRecipeName)
        );
        state.value.recipesFiltered = filter
      }
    },
    setCategorySelected: (state, action) => {
      state.value.categorySelected = action.payload;
      state.value.recipesFiltered = recetas;

      if (state.value.categorySelected) {
        const filter = state.value.recipesFiltered.filter(
          (receta) => receta.category === state.value.categorySelected
        );
        state.value.recipesFiltered = filter;
      }
    },
    setModalVisible: (state) => {
      state.value.modalVisible = !state.value.modalVisible;
    }
  },
});

export const {
  setInputRecipeName,
  setCategorySelected,
  setModalVisible,
  setRecipeIdSelected,
} = shopSlice.actions;

export default shopSlice.reducer;
