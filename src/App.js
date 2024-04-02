import logo from "./logo.svg";
import "./App.css";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import { VStack } from "@chakra-ui/react";
import About from "./AboutMe/About";
import Photography from "./Field/Photography";

function App() {
  return (
    <>
      <VStack>
        {/* <Hero /> */}
        <Hero2 />
        <About />
        <Photography />
      </VStack>
    </>
  );
}

export default App;
