import React from "react";
import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import Asset11 from "../Img/ASSET_11.png";

function Hero() {
  return (
    <>
      <Box>
        <Grid gridTemplateColumns="1fr 1fr" position="relative">
          <VStack
            justifyContent="start"
            alignItems="start"
            position="absolute"
            zIndex="2"
            top="0"
            left="0"
            mt="100px"
            ml="80px"
          >
            <Heading
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
              fontStyle="italic"
              fontSize="150px"
            >
              Gio
            </Heading>
            <Heading
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
              fontStyle="italic"
              fontSize="150px"
            >
              Alvarez
            </Heading>
            <Text>
              Greetings! I'm Gio Lazaro Alvarez, a passionate and versatile
              multimedia artist with a distinctive flair for creative
              expression. My journey in the realm of visual arts encompasses a
              diverse range of skills, including photography, traditional
              illustration, digital illustration, and the captivating world of
              tattoo artistry.
            </Text>
          </VStack>
          <Box position="relative" zIndex="1" ml="600px">
            <Box
              w="666px"
              h="666px"
              borderRadius="full"
              bgColor="#F77E08"
              mt="200px"
              zIndex="1"
            />
            <Image
              src={Asset11}
              w="64%"
              position="absolute"
              top="0"
              left="38px"
              zIndex="2"
              ml="120px"
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Hero;
