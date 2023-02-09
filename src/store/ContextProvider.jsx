import Context from "./Context";
import React, { useState } from "react";

const ContextProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);

  const value = {
    documents,
    setDocuments,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default ContextProvider;
