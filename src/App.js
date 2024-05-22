import React, { useRef } from "react";
import Hero2 from "./Hero/Hero2";
import About from "./AboutMe/About";
import Photography from "./Field/Photography";
import "./App.css";
import {
  Box,
  Grid,
  HStack,
  Image,
  VStack,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import Herosmile from "./Img/smile.png";

function App() {
  const paddingX = useBreakpointValue({ base: 2, md: 4 });
  const fontSize = useBreakpointValue({ base: "12px", md: "18px" });
  const spacing = useBreakpointValue({ base: "20px", md: "100px" });
  const logoWidth = useBreakpointValue({ base: "50px", md: "70px" });
  const marginTop = useBreakpointValue({ base: "40px", md: "0px" });

  // Ref for About section
  const aboutRef = useRef(null);
  const worksRef = useRef(null);

  // Function to scroll to About section
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorks = () => {
    worksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <VStack position="relative" bgColor="#f2f2f2">
        <Box
          top="0"
          left="0"
          transform="translateX(0)"
          zIndex="3"
          width="95%"
          borderRadius="full"
          px={paddingX}
          backgroundColor="rgba(242, 242, 242, 0.9)"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          mt="8px"
        >
          <Grid
            templateColumns="1fr auto"
            alignItems="center"
            padding="12px"
            width="100%"
          >
            <HStack>
              <ChakraLink>
                <Image src={Herosmile} alt="Logo" w={logoWidth} />
              </ChakraLink>
            </HStack>

            <HStack spacing={spacing}>
              <ChakraLink onClick={scrollToAbout} fontSize={fontSize}>
                About
              </ChakraLink>
              <ChakraLink onClick={scrollToWorks} fontSize={fontSize}>
                Works
              </ChakraLink>
              <ChakraLink href="#contact" fontSize={fontSize}>
                Contact
              </ChakraLink>
            </HStack>
          </Grid>
        </Box>

        <Box mt={marginTop}>
          {" "}
          {/* Main container */}
          <Box bgColor="">
            <Hero2 />
          </Box>
          {/* About section */}
          <Box ref={aboutRef} bgColor="">
            {" "}
            {/* Assign ref to About section */}
            <About />
          </Box>
          <Box ref={worksRef} bgColor="">
            {" "}
            {/* Assign ref to About section */}
            {/* <Photography /> */}
          </Box>
        </Box>
      </VStack>
    </>
  );
}

export default App;

//toadjust tewhite at the bottom add mb="200px" to the bottom box created
