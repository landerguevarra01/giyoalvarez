import React from "react";

import Herosmile from "../Img/smile.png";
import { Box, Grid, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";

function Navigation() {
  return (
    <Grid
      templateColumns="1fr auto"
      gap={4}
      alignItems="center"
      padding={4}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      {/* Left side: Navigation Logo */}
      <HStack>
        <Image src={Herosmile} alt="Logo" w="70px" />
      </HStack>

      {/* Right side: Navigation Links */}
      <HStack spacing={4}>
        <Link href="#about">About</Link>
        <Link href="#works">Works</Link>
        <Link href="#contact">Contact</Link>
      </HStack>
    </Grid>
  );
}

export default Navigation;
