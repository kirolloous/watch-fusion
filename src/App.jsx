import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
