import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import NameHi from "./components/NameHi";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
function App() {
  const [select, setSelect] = useState("About");
  const [prevSelect, setPrevSelect] = useState("");
  const handleClick = (e) => {
    console.log(select);
    setSelect(e.target.id);
  };

  useEffect(() => {
    setPrevSelect(select);
  }, [select]);

  const renderItem = () => {
    if (select === "") setSelect(prevSelect);
    switch (select) {
      case "About":
        return (
          <>
            <NameHi />
          </>
        );
      case "Work":
        return (
          <>
            <Work />
          </>
        );
      case "Expertise":
        return (
          <>
            <Expertise />
          </>
        );
      case "Contact":
        return (
          <>
            <Contact />
          </>
        );
    }
  };
  return (
    <>
      <div className="background-color" onClick={handleClick}>
        <Navbar />
        {renderItem()}
      </div>
    </>
  );
}

export default App;
