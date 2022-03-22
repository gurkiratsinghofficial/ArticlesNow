import { ErrorMessage, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validationSchemas from "../../../utils/validationSchemas";
import { addArticle } from "../../articleSlice";

function ArticleAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="article-add">
        <div className="article-add-form">
          <Formik
            initialValues={{
              title: "",
              description: "",
            }}
            validationSchema={validationSchemas.addArticleSchema}
            onSubmit={(values) => {
              dispatch(addArticle(values));
              navigate("/");
            }}
          >
            {({ handleBlur, handleChange, submitForm }) => (
              <>
                <input
                  name="title"
                  className="styledInput"
                  type="text"
                  placeholder="Title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="title"
                  render={(msg) => <span className="error">{msg}</span>}
                />
                <textarea
                  name="description"
                  className="styledInput"
                  type="text"
                  placeholder="Write decription here..."
                  rows="7"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="description"
                  render={(msg) => <span className="error">{msg}</span>}
                />
                <div className="article-buttons">
                  <button className="button">Cancel</button>
                  <button onClick={submitForm} className="button">
                    Submit
                  </button>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default ArticleAdd;
