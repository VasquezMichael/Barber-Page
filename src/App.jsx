import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
