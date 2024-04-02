import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Heropic from "../Img/Group 1.png";
import Herojoker from "../Img/Layer 4.png";
import Herohaha from "../Img/Layer 5.png";
import Heroabout from "../Img/Layer 5 1.png";
import Herome from "../Img/Layer 6.png";
import Heroline from "../Img/Layer 7.png";

function Hero3() {
  return (
    <>
      <Box w="1440px" h="1024px">
        <Grid gridTemplateColumns="70% 30%">
          <Box>
            <Grid gridTemplateRows="1fr 1fr 1fr">
              <Grid gridTemplateColumns="70% 30%">
                <Box>
                  <Image
                    src={Heroabout}
                    w="640.87px"
                    h="321.2px"
                    mt="30px"
                    ml="50px"
                  />
                </Box>
                <Box>
                  <Image src={Herome} w="113px" h="93px" mt="200px" />
                </Box>
              </Grid>
              <Image
                src={Heroline}
                transform="rotate(-1.75deg)"
                w="753px"
                h="64px"
                ml="50px"
                mt="-30px"
              />
              <Box w="715px" h="222px" mt="-230px" ml="80px">
                <Text fontSize="28px">
                  Greetings! I'm Gio Lazaro Alvarez, a passionate and versatile
                  multimedia artist with a distinctive flair for creative
                  expression. My journey in the realm of visual arts encompasses
                  a diverse range of skills, including photography, traditional
                  illustration, digital illustration, and the captivating world
                  of tattoo artistry.
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box
            h="1024px"
            position="relative"
            // overflow="hidden"
            ml="-50px"
          >
            <Image
              src={Heropic}
              mt="110px"
              position="relative"
              zIndex="2"
              w="422px"
              h="788px"
            />
            <Image
              src={Herojoker}
              mt="-725px"
              ml="90px"
              position="relative"
              zIndex="1"
              w="335px"
              h="382px"
            />
            <Image
              src={Herohaha}
              mt="-205px"
              ml="-60px"
              position="relative"
              zIndex="3"
              w="444px"
              h="492px"
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Hero3;
