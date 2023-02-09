import React from "react";

const Context = React.createContext({
  documents: [],
  setDocuments: () => {},
});
export default Context;
