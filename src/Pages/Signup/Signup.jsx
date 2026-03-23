import SignupForm from "../../Components/SignupForm/SignupForm";
import AuthHero from "../../Components/AuthHero/AuthHero";

export default function Signup() {
  return (
    <>
      <main>
        <div className="grid  lg:grid-cols-2">
          {/*  Left side: sign up Hero */}
          <AuthHero title={{normal:"Connect with", highlight:"amazing people"}}   
          description={"Join millions of users sharing moments, ideas and building meaningful connections every day"}/>
          {/* Right side: sign up form */}
          <SignupForm />
        </div>
      </main>
    </>
  );
}
