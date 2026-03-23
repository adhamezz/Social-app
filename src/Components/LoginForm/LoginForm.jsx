import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import {
  faEnvelope,
  faLock,
  faArrowRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import FormField from "../ui/FormField/FormField";
import Divider from "../ui/Divider/Divider";
import SocialButtons from "../SocialButtons/SocialButtons";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const { formik, wrongCredentials, setWrongCredentials } = useLogin();
  return (
    <>
      <div className="login-form bg-gray-100 py-12 min-h-screen flex justify-center items-center">
        <form
          className="bg-white max-w-lg mx-auto p-8 rounded-2xl shadow space-y-5 w-full"
          onSubmit={formik.handleSubmit}
        >
          <header className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Login</h2>
            <p>
              Don't have an account?
              <Link to={`/signup`} className="text-blue-400">
                Sign up
              </Link>
            </p>
          </header>

          <SocialButtons />

          <Divider text={"or continue with email"} />

          <div className="form-controls space-y-4">
            <FormField
              elemetType={"input"}
              inputType={"email"}
              lableText={"Email Address"}
              startIcon={faEnvelope}
              placeholder={"name@example.com"}
              id={"email"}
              name={"email"}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
              onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              onChange={(e) => {
                formik.handleChange(e);
                setWrongCredentials(null);
              }}
            />

            <FormField
              elemetType={"input"}
              inputType={"password"}
              lableText={"Password"}
              startIcon={faLock}
              placeholder={"Create a strong password"}
              id={"password"}
              name={"password"}
              value={formik.values.password}
              error={formik.errors.password}
              touched={formik.touched.password}
              onChange={(e) => {
                formik.handleChange(e);
                setWrongCredentials(null);
              }}
              onBlur={formik.handleBlur}
            />
          </div>

          {wrongCredentials && (
            <div className="text-red-500 -mt-3">{wrongCredentials}</div>
          )}

          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
            className="btn disabled:cursor-not-allowed disabled:from-gray-500 disabled:to-gray-400    w-full py-3 bg-linear-to-r from-blue-600 to-blue-400 text-white font-bold border-none"
          >
            {formik.isSubmitting ? (
              <>
                <span>Signing you in </span>
                <FontAwesomeIcon icon={faSpinner} spin />
              </>
            ) : (
              <>
                <span>Signin </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
