import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHome from "./components/MyHome";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHome />
      <MyFooter />
    </div>
  );
}

export default App;
