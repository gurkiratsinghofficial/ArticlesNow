import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import articles from "../../utils/dummy";

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
      state.articles.push({ ...action.payload, id: nanoid() });
      state.addArticleModal = false;
      toast.success("Article Added Successfully");
    },
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
      toast.success("Article Removed Successfully");
    },
    setViewArticle: (state, action) => {
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
