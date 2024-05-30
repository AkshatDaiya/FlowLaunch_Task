import React, { useState } from "react";
import Main from "./components/Main";
import ContextApi from "./ContextApi";

function App() {
  const [searchedName, setSearchedName] = useState("");

  return (
    <ContextApi.Provider value={{ searchedName, setSearchedName }}>
      <Main />
    </ContextApi.Provider>
  );
}

export default App;
