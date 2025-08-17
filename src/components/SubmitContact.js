import React, { useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";

const SubmitContact = ({ sendPostData, postData, ...props }) => {
  // const handleChange = (e) => {

  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!formData.name) {
  //     toast.error(`please enter the required fiedls`);
  //   } else {
  //     toast.success("congratsss!!!!", {
  //       duration: 10000,
  //     });
  //   }

  //   setFormData({ name: "" });
  // };

  const formik = useFormik({
    initialValues: {
      name: `${postData?.title}`,
    },
    validationSchema: yup.object().shape({
      name: yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces") // Allow only alphabets
        .min(3, "Name must be at least 3 characters long")
        .max(20, "Name must be at most 20 characters long")
        .required("Name is required"),
        
    }),

    
  });

  return (
    
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-4 rounded shadow-sm w-100"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Simple Input Form</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control"
            placeholder="Enter your name"
            // required
          />
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control"
            placeholder="Enter your name"
            // required
          />
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control"
            placeholder="Enter your name"
            // required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitContact;
