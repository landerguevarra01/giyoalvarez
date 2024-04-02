import { Box, Image, Text, VStack, Flex } from "@chakra-ui/react";
import React from "react";
import Heropic from "../Img/Layer 1 copy.png";
import Herofname from "../Img/Layer 2.png";
import Herolname from "../Img/Layer 3.png";
import Herosmile from "../Img/smile.png";

function Hero2() {
  return (
    <>
      <VStack justifyContent="center" alignItems="center" w="1440px" h="1024px">
        <Box
          position="relative"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <VStack>
            <Image
              src={Heropic}
              w="523px"
              h="1788px"
              mx="auto"
              position="absolute"
              zIndex="2"
              mt="90px"
            />
            <Image
              src={Herofname}
              position="relative"
              zIndex="1"
              mt="70px"
              w="666px"
              h="335px"
              mx="auto"
            />
            <Image
              src={Herolname}
              position="relative"
              zIndex="3"
              mt="-40px"
              mb="400px"
              w="1134px"
              h="528px"
              mx="auto"
            />
            <Image
              src={Herosmile}
              position="relative"
              zIndex="3"
              mt="-520px"
              mb="500px"
              w="335px"
              h="200px"
              mx="auto"
            />
          </VStack>
        </Box>
      </VStack>
    </>
  );
}

export default Hero2;

{/* <VStack justifyContent="center" alignItems="center" w="430px" h="930px">
  <Box
    position="relative"
    justifyContent="center"
    alignItems="center"
    overflow="hidden"
  >
    <VStack>
      <Image
        src={Heropic}
        w="178px"
        h="608px"
        mx="auto"
        position="absolute"
        zIndex="2"
        mt="160px"
      />
      <Image
        src={Herofname}
        position="relative"
        zIndex="1"
        mt="150px"
        ml="-40px"
        w="226px"
        h="114px"
        mx="auto"
      />
      <Image
        src={Herolname}
        position="relative"
        zIndex="3"
        mt="50px"
        mb="400px"
        w="386px"
        h="179px"
        mx="auto"
      />
      <Box ml="100px">
      <Image
        src={Herosmile}
        position="relative"
        zIndex="3"
        mt="-350px"
        mb="500px"
        w="114px"
        h="67px"
        mx="auto"
      />
      </Box>
    </VStack>
  </Box>
</VStack> */}