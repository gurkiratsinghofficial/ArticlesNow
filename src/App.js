import "./App.css";
import { Route, Routes } from "react-router-dom";
import ArticleListing from "./features/article/components/ArticleListing/ArticleListing";
import ArticleView from "./features/article/components/ArticleView/ArticleView";
import Header from "./shared/Header";
import { setAddArticleModal } from "./features/article/articleSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import ArticleAdd from "./features/article/components/ArticleAdd/ArticleAdd";
import "react-responsive-modal/styles.css";
import NotFound from "./shared/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const addArticleModal = useSelector((state) => state.article.addArticleModal);

  const dispatch = useDispatch();

  const toggleAddModal = (payload) => dispatch(setAddArticleModal(payload));
  const closeAddModal = () => toggleAddModal(false);
  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={1000} limit={2} />
      <Modal
        showCloseIcon={false}
        classNames={{
          modal: "article-add-container",
        }}
        open={addArticleModal}
        onClose={closeAddModal}
      >
        <ArticleAdd closeAddModal={closeAddModal} />
      </Modal>
      <Header toggleAddModal={toggleAddModal} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<ArticleListing />} />
        <Route path="view/:id" element={<ArticleView />} />
      </Routes>
    </div>
  );
}

export default App;
