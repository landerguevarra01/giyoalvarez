import logo from "./logo.svg";
import "./App.css";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import { VStack } from "@chakra-ui/react";
import Hero3 from "./Hero/Hero3";

function App() {
  return (
    <>
      <VStack>
        <Hero />
        <Hero2 />
        <Hero3/>
      </VStack>
    </>
  );
}

export default App;
