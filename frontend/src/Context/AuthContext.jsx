import React, { createContext, useState } from "react";
export const authDataContext = createContext();
function AuthContext({ children }) {
  const serverUrl = "https://airbnb-backend-0ill.onrender.com";
  // const serverUrl = "http://localhost:8000";

  let [loading, setLoading] = useState(false);

  let value = {
    serverUrl,
    loading,
    setLoading,
  };
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  );
}

export default AuthContext;
