import * as Yup from "yup";

const validationSchemas = {
  addArticleSchema: Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter a title!"),
    description: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter a description!"),
  }),
};
export default validationSchemas;
