import React from "react";
import Hero2 from "./Hero/Hero2";
import About from "./AboutMe/About";
// import Photography from "./Field/Photography";
// import Output from "./Output/Output";
// import Navigation from "./Nav/Navigation";
import {
  Box,
  Grid,
  HStack,
  Image,
  VStack,
  Link as ChakraLink,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import Herosmile from "./Img/smile.png";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function App() {
  const paddingX = useBreakpointValue({ base: 2, md: 4 });
  const fontSize = useBreakpointValue({ base: "12px", md: "18px" });
  const spacing = useBreakpointValue({ base: "20px", md: "100px" });
  const logoWidth = useBreakpointValue({ base: "50px", md: "70px" });
  return (
    <>
      <VStack position="relative" bgColor="#f2f2f2">
        {/* Blue Box containing the Grid */}
        <Box
          position="fixed"
          top="0"
          left="50%"
          transform="translateX(-50%)"
          zIndex="3"
          width="95%" // Adjusted width
          borderRadius="full"
          px={paddingX} // Adjust padding dynamically based on breakpoints
          backgroundColor="rgba(242, 242, 242, 0.9)" // Adjust opacity as needed
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" // Optional: add shadow
          mt="8px"
        >
          {/* Grid */}
          <Grid
            templateColumns="1fr auto"
            alignItems="center"
            padding="12px"
            width="100%"
          >
            {/* Left side: Navigation Logo */}
            <HStack>
              <ChakraLink onClick={scrollToTop}>
                <Image src={Herosmile} alt="Logo" w={logoWidth} />
              </ChakraLink>
            </HStack>

            {/* Right side: Navigation Links */}
            <HStack spacing={spacing}>
              <Link href="#about" fontSize={fontSize}>
                About
              </Link>
              <Link href="#works" fontSize={fontSize}>
                Works
              </Link>
              <Link href="#contact" fontSize={fontSize}>
                Contact
              </Link>
            </HStack>
          </Grid>
        </Box>

        {/* Content */}
        <Box>
          {/* Adjust margin top to accommodate grid height */}
          <Hero2 zIndex="2" />
          <About zIndex="2" />
        </Box>
      </VStack>
    </>
  );
}

export default App;
