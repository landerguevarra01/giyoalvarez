import { Box, Image, VStack } from "@chakra-ui/react";
import React from "react";
import Camera from "../Img/photography 1.png";

function Photography() {
  return (
    <VStack w="1440px" h="1024px">
      <Box>
        <Image src={Camera} w="1047px" h="927px" />
      </Box>
    </VStack>
  );
}

export default Photography;
