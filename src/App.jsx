import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GeneralInfo />
    </>
  );
}

export default App;
