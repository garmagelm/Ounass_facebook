import React from "react";
import { render } from 'react-dom';

import HelloUser from "./components/HelloUser";
import Campaign from "./components/Campaign";
import Adset from "./components/Adset";
import AdCreative from "./components/AdCreative";
import InsightAPI from "./components/InsightAPI";

function App() {
  return (
    <>
      <HelloUser />
      <Campaign /> 
      <Adset />
      <AdCreative />
      <InsightAPI />
      </>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)