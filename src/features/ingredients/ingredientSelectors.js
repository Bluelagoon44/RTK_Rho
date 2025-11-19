import { createSelector } from '@reduxjs/toolkit';

export const filterIngredientsByDate = createSelector(
  (state) => state.ingredients,
  (ingredients) => [...ingredients].sort((a, b) => a.date - b.date),
);