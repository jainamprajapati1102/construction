import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

// Validation Schema
const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const SignInComponent = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log("Form Submitted:", values);
    const formdata = new FormData();

    formdata.append("email", values.email);
    formdata.append("password", values.password);

    const response = await axios.post(
      "http://localhost/construction/signin",
      formdata
    );
    console.log(response);

    if (response.data.status == 1) {
      // alert("loggedin");
      navigate("/dashboard");
    } else {
      alert("something went wrong..");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In to CRM
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
    ${
      touched.email && errors.email
        ? "border-red-500 focus:ring-red-300"
        : "border-gray-300 focus:ring-blue-300"
    }`}
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-sm text-red-600 mt-1"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
    ${
      touched.password && errors.password
        ? "border-red-500 focus:ring-red-300"
        : "border-gray-300 focus:ring-blue-300"
    }`}
                />

                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-sm text-red-600 mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
