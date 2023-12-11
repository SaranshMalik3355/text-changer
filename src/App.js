// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let [darkMode, setDarkMode] = useState("light"); //Tells us whether dark mode is enable or not
  let [alert, setAlert] = useState(null); //Tells us about alert
  // let [colorChange, setColorChange] = useState("primary"); //Tells us to change the color

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typeOf: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
  };
  let toggleMode = (cls) => {
    // console.log(cls);
    removeBodyClasses();
    if (cls === "warning" || cls === "success" || cls === "primary") {
      document.body.classList.add("bg-" + cls);
      // document.body.classList.add( + cls);
    } else if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("The dark mode has been Enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("The light mode has been Enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils "
          mode={darkMode}
          // toggleColorChange={toggleColorChange}
          // buttonColor={colorChange}
          toggleMode={toggleMode}
        />

        <div className="container">
          <Alert alert={alert} />

          <Switch>
            <Route exact path="/about">
              <About mode={darkMode} />
            </Route>
            <Route exact path="/">
              <TextForm
                tellAlert={showAlert}
                mode={darkMode}
                heading="Try TextUtils Word Counter, Character Counter, Remove extra spaces"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
