import { ToastContainer, Bounce } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import PostDetails from "./Pages/PostDetails/PostDetails.jsx";
import Notfound from "./Pages/Notfound/Notfound.jsx";
import AuthProvider from "./Context/Auth.context.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import AuthRoute from "./Components/AuthRoute/AuthRoute.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <AuthRoute>
          <Login />
        </AuthRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AuthRoute>
          <Signup />
        </AuthRoute>
      ),
    },
    {
      path: "/post/:id",
      element: (
        <ProtectedRoute>
          <PostDetails />,
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <Notfound /> },
  ]);

  //^ to hand over the AuthProvider to anywhere in the App we do this
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </AuthProvider>
    </>
  );
}

export default App;
