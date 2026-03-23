import * as yup from "yup";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { AuthContext } from "../../Context/Auth.context";

export function useLogin() {
  //* this how to  consume the provider that is inside the AuthContext so you can retrieve the token
  const { token, setToken } = useContext(AuthContext); //^ on this line we destructed the token and setToken from the AuthContext
  console.log(token);

  const [wrongCredentials, setWrongCredentials] = useState(null);
  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const loginSchema = yup.object({
    email: yup.string().required("Email is required").email("email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password should be at least a minimum of eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function handleSubmit(values) {
    try {
      const options = {
        url: "https://linked-posts.routemisr.com/users/signin",
        method: "POST",
        data: values,
      };

      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("Welcome Back!");
        setToken(data.token);
        localStorage.setItem("token", data.token);

        console.log("🔐This is your token🔐 ", data.token);
        // * update token:null (was null) //    and now it is
        //* 🔐This is your token🔐
        //*  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
        //*  eyJ1c2VyIjoiNjk0ZDM0ZmUxMzExZmQ3YjAzM2UxMTlmIiwiaWF0IjoxNzY2ODE5MTExfQ.
        //* miC7t7kfow0wudGC2SfC3fS3p0ACFU2MkGzWawMvOcY
        // * notice it is made of 3 parts seperated by a dot containing (header , payload and signature )
        //* payload is the users data that has been , signature is a more like a password made by the backend
        //* and the header containing 2 things. The algorithm used to encrypt the data and the type of token used

        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      setWrongCredentials(error.response.data.error);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: handleSubmit,
  });

  return {
    formik,
    wrongCredentials,
    setWrongCredentials,
  };
}
