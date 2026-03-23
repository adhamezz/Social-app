import { useContext } from "react";
import { AuthContext } from "../../Context/Auth.context";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  if (token) {
    return children;
  } else {
    return <Navigate to={`/login`} />;
  }
}
