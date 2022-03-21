import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  viewArticle: null,
  error: null,
  loading: false,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    setViewArticle: (state, action) => {
      state.viewArticle = action.payload;
    },
  },
});
export const { addArticle, setViewArticle } = articleSlice.actions;
export default articleSlice.reducer;
