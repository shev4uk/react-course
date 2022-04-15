import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useTodo from "../hooks/useTodo";
import useLanguage from "../../common/hooks/useLanguage";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import SubmitButton from "../../common/components/form/SubmitButton";
import todoSchema from "../validation/todoSchema";
import './TodoDetailPage.css';

export default function TodoDetailPage() {
  const { id } = useParams();
  const { todo } = useTodo(id);
  const navigate = useNavigate();
  const { language } = useLanguage();
  // console.log(todo);
  const initValue = {
    title: "quis ut nam facilis et officia qui",
    completed: true,
  };
  // const [detail, setDetail] = useState(initValue);
  // console.log(detail);
  function onMySubmit(values) {
    console.log(values);
  }
  function validate(values) {
    let errors = {};
    if (!values.title.length) {
      errors.title = "Title is required";
    }
    if (values.title.length > 30) {
      errors.title = "Too long";
    }
    console.log(errors);
    return errors;
  }
  // const formik = useFormik({
  //   initialValues: initValue,
  //   onSubmit: onMySubmit,
  //   validate: validate
  // });
  // console.log(formik);
  return (
    initValue && (
      <div>
        <h2>Detail Todo</h2>
        <Formik
          initialValues={initValue}
          onSubmit={onMySubmit}
          validationSchema={todoSchema}
        >
          <Form>
            <div>
              <label>
                Title
                <Field name="title" />
                <ErrorMessage name="title" component="span" className="error" />
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="completed" />
              </label>
            </div>
            <SubmitButton />
            {/* <button type="submit" disabled={!formik.isValid}>Send</button> */}
          </Form>
        </Formik>
        {/* <form onSubmit={formik.handleSubmit}>
          <div>
            <label>
              Title
              <input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} />
              {formik.errors.title}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="completed" />
            </label>
          </div>
          <button type="submit">Send</button>
        </form> */}
        {/* {todo.title} */}
        <button onClick={() => navigate(-1)}>
          {language === "en" ? "Back" : "Назад"}
        </button>
      </div>
    )
  );
}
