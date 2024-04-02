import logo from "./logo.svg";
import "./App.css";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import { VStack } from "@chakra-ui/react";
import About from "./AboutMe/About";
import Photography from "./Field/Photography";
import Output from "./Output/Output";

function App() {
  return (
    <>
      <VStack>
        {/* <Hero /> */}
        <Hero2 />
        <About />
        <Photography />
        <Output />
      </VStack>
    </>
  );
}

export default App;
