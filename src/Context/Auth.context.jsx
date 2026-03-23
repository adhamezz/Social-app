import { createContext, useState } from "react";

//^ createContext is a method
//& must distruct the children and return it here //  remember AuthContext  has 2 components == provider is 1 of them

export const AuthContext = createContext(null); // * {Provider, Consumer} this os an object
//^ AuthContext an object containing 2 components ==> provider and the consumer

export default function AuthProvider({ children }) {
  //& must distruct the children        //  we named it AuthProvider because it is saved in AuthContext
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
