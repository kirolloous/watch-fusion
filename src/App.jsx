import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
  );
}

export default App;
