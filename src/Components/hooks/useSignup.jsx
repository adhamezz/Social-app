import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";

export function useSignup() {
  const [accountExists, setAccountExists] = useState(null);
  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const signupSchema = yup.object({
    name: yup
      .string()
      .required("Full Name is required")
      .min(3, "Full Name must be at least 3 characters")
      .max(20, "Full Name must be at most 20 characters"),
    email: yup.string().required("Email is required").email("email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password should be at least a minimum of eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf(
        [yup.ref("password")],
        "Password and Confirm Password should be the same"
      ),
    dateOfBirth: yup.string().required("Date of Birth is required"),
    gender: yup
      .string()
      .required("Gender is required")
      .oneOf(["male", "female"], "Please select a valid gender"),
  });

  async function handleSubmit(values) {
    try {
      // const {data} = await axios.post(`https://linked-posts.routemisr.com/users/signup`, values )
      const options = {
        url: "https://linked-posts.routemisr.com/users/signup",
        method: "POST",
        data: values,
      };

      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("Your account has been created");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setAccountExists(error.response.data.error);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },

    validationSchema: signupSchema,

    onSubmit: handleSubmit,
  });

  return {
    accountExists,
    setAccountExists,
    formik,
  };
}
