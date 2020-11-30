import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import useWindowDimensions from "./Components/hooks/useWindowDimensions";
import "./styles/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from "./Components/ContactPage";

function App() {
  const { width, height } = useWindowDimensions();

  const sizes = {
    phone: width < 550,
    smPhone: width < 550 && height < 800,
    tablet: width < 900,
    desktop: width < 1100,
    portrait: width < height
  };

  const appStyle = {};

  return (
    <Router>
      <div className="App" style={appStyle}>
        <NavBar dim={{ ...sizes }} />
        <Switch>
          <Route path="/contact">
            <ContactPage dim={{ ...sizes }} />
          </Route>
          <Route path="/">
            <Main dim={{ ...sizes }} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
