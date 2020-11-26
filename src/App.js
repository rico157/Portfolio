import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import useWindowDimensions from "./Components/hooks/useWindowDimensions";
import "./styles/App.css";
import Footer from "./Components/Footer";

function App() {
  const { width } = useWindowDimensions();
  const phone = width < 550;
  const tablet = width < 870;
  const desktop = width < 1100;
  const appStyle = {};

  return (
    <div className="App" style={appStyle}>
      <NavBar dim={{ phone, tablet }} />
      <Main dim={{ phone, tablet, desktop }} />
      <Footer />
    </div>
  );
}

export default App;
