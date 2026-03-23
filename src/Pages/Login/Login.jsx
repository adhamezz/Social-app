import LoginForm from "../../Components/LoginForm/LoginForm";
import AuthHero from "../../Components/AuthHero/AuthHero";

export default function login() {
  return (
    <>
      <main>
        <div className="grid  lg:grid-cols-2">
          {/*  Left side: sign up Hero */}
           <AuthHero title={{normal:"Welcome Back", highlight:"to SocialHub App"}}   
            description={"Signin to connect people all over the world"}/>
          {/* Right side: sign up form */}
          <LoginForm />
        </div>
      </main>
    </>
  );
}
