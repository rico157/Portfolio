import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import useWindowDimensions from "./Components/hooks/useWindowDimensions";
import Footer from "./Components/Footer";
import "./styles/App.css";

function App() {
  const { width, height } = useWindowDimensions();

  const sizes = {
    phone: width < 550,
    tablet: width < 870,
    desktop: width < 1100,
    portrait: width < height
  };

  const appStyle = {};

  return (
    <div className="App" style={appStyle}>
      <NavBar dim={{ ...sizes }} />
      <Main dim={{ ...sizes }} />
      <Footer />
    </div>
  );
}

export default App;
