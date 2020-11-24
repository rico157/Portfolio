import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import useWindowDimensions from "./Components/hooks/useWindowDimensions";
import "./styles/App.css";

function App() {
  const { width } = useWindowDimensions();
  const phone = width < 550;
  const tablet = width < 870;
  const appStyle = {};

  return (
    <div className="App" style={appStyle}>
      <NavBar dim={{ phone, tablet }} />
      <Main dim={{ phone, tablet }} />
    </div>
  );
}

export default App;
