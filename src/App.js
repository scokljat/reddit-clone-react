import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
function App() {
  return (
    <div>
      <SideNav />
      <Main />
    </div>
  );
}

export default App;
