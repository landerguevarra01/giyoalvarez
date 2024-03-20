import React from "react";
import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  Link,
  HStack,
} from "@chakra-ui/react";
import Asset11 from "../Img/ASSET_11.png";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

function Hero() {
  return (
    <>
      <VStack justifyContent="center" alignItems="center">
        <Box w="1440px" h="1024px">
          <Grid gridTemplateColumns="1fr 1fr" position="relative">
            <Box
              position="absolute"
              zIndex="2"
              top="0"
              left="0"
              mt="220px"
              ml="80px"
            >
              <VStack justifyContent="start" alignItems="start">
                <Heading
                  fontFamily="Montserrat, sans-serif"
                  fontWeight="bold"
                  fontStyle="italic"
                  fontSize="180px"
                  letterSpacing="-9.6px"
                  color="#1E1E1E"
                >
                  Gio
                  <br />
                  Alvarez
                </Heading>
                <Box mt="50px">
                  <Text fontFamily="Bebas Neue Regular" fontSize="18px">
                    Greetings! I'm Gio Lazaro Alvarez, a passionate and
                    versatile multimedia artist
                    <br />
                    with a distinctive flair for creative expression. My journey
                    in the realm of visual arts
                    <br />
                    encompasses a diverse range of skills, including
                    photography, traditional illustration,
                    <br />
                    digital illustration, and the captivating world of tattoo
                    artistry.
                  </Text>
                </Box>
                <Box mt="36px" color="#F77E08">
                  <HStack gap="56px">
                    <Link
                      href="https://www.facebook.com/gio.alvarez11"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize="34px"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      href="https://www.instagram.com/giyowzki/"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize="34px"
                    >
                      <FaInstagram />
                    </Link>
                  </HStack>
                </Box>
              </VStack>
            </Box>
            <Box position="relative" zIndex="1" ml="600px" mt="49px">
              <Box mt="-15px">
                <Box
                  w="666px"
                  h="666px"
                  borderRadius="full"
                  bgColor="#F77E08"
                  mt="143px"
                  zIndex="1"
                />
              </Box>
              <Box>
                <Image
                  src={Asset11}
                  w="61%"
                  position="absolute"
                  top="0"
                  left="38px"
                  zIndex="2"
                  ml="147px"
                />
              </Box>
            </Box>
          </Grid>
        </Box>
      </VStack>
    </>
  );
}

export default Hero;
