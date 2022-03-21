import { createSlice } from "@reduxjs/toolkit";
import articles from "../utils/dummy";

const initialState = {
  articles: [...articles],
  viewArticle: null,
  addArticleModal: false,
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
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
    },
    setViewArticle: (state, action) => {
      console.log(action.payload);
      state.viewArticle = action.payload;
    },
    setAddArticleModal: (state, action) => {
      state.addArticleModal = action.payload;
    },
  },
});
export const { addArticle, setViewArticle, setAddArticleModal, removeArticle } =
  articleSlice.actions;
export default articleSlice.reducer;
