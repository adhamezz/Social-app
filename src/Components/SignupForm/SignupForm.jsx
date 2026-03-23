import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import {
  faUser,
  faEnvelope,
  faLock,
  faArrowRight,
  faCalendar,
  faVenusMars,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import FormField from "../ui/FormField/FormField";
import Divider from "../ui/Divider/Divider";
import SocialButtons from "../SocialButtons/SocialButtons";
import { useSignup } from "../hooks/useSignup";

export default function SignupForm() {
  const { formik, accountExists, setAccountExists } = useSignup();

  return (
    <>
      <div className="signup-form bg-gray-100 py-12 min-h-screen flex justify-center items-center">
        <form
          className="bg-white max-w-lg mx-auto p-8 rounded-2xl shadow space-y-5 w-full"
          onSubmit={formik.handleSubmit}
        >
          <header className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Create account</h2>
            <p>
              Already have an account?
              <Link to={`/login`} className="text-blue-400">
                Sign in
              </Link>
            </p>
          </header>

          <SocialButtons />

          <Divider text={"or continue with email"} />

          <div className="form-controls space-y-4">
            <FormField
              elemetType={"input"}
              inputType={"text"}
              lableText={"Full Name"}
              startIcon={faUser}
              placeholder={"Enter your full name"}
              id={"name"}
              name={"name"}
              value={formik.values.name}
              error={formik.errors.name}
              touched={formik.touched.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

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
              // onChange={formik.handleChange}
              onChange={(e) => {
                formik.handleChange(e);
                setAccountExists(null);
              }}
              onBlur={formik.handleBlur}
              isExistError={accountExists}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <FormField
              elemetType={"input"}
              inputType={"password"}
              lableText={"Confirm Password"}
              startIcon={faLock}
              placeholder={"Confirm your Password"}
              id={"rePassword"}
              name={"rePassword"}
              value={formik.values.rePassword}
              error={formik.errors.rePassword}
              touched={formik.touched.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="flex gap-3 items-center *:grow">
              <FormField
                elemetType={"input"}
                inputType={"date"}
                lableText={"Date of Birth"}
                startIcon={faCalendar}
                id={"dateOfBirth"}
                name={"dateOfBirth"}
                value={formik.values.dateOfBirth}
                error={formik.errors.dateOfBirth}
                touched={formik.touched.dateOfBirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <FormField
                elemetType={"select"}
                lableText={"Gender"}
                startIcon={faVenusMars}
                id={"gender"}
                name={"gender"}
                value={formik.values.gender}
                error={formik.errors.gender}
                touched={formik.touched.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={"py-2"}
                options={[
                  { text: "Select Your Gender" },
                  { value: "male", text: "Male" },
                  { value: "female", text: "Female" },
                ]}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
            className="btn disabled:cursor-not-allowed disabled:from-gray-500 disabled:to-gray-400    w-full py-3 bg-linear-to-r from-blue-600 to-blue-400 text-white font-bold border-none"
          >
            {formik.isSubmitting ? (
              <>
                <span>Creating Your Account </span>
                <FontAwesomeIcon icon={faSpinner} spin />
              </>
            ) : (
              <>
                <span>Create Account </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
