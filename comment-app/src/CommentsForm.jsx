import { useFormik } from "formik";

export default function CommentsForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate: (values) => {
      const errors = {};
      if (!values.username || !values.username.trim()) {
        errors.username = "Username can not be empty";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      addNewComment(values);
      resetForm();
    },
  });

  return (
    <div className="comment-form">
      <h4>Give a Comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        )}

        <br /><br />

        <label htmlFor="remarks">Remarks:</label>
        <textarea
          id="remarks"
          name="remarks"
          placeholder="Add a few remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        />

        <br /><br />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={(e) =>
            formik.setFieldValue("rating", Number(e.target.value))
          }
        />

        <br /><br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
