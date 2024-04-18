import { Box, Grid, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import Heropic from "../Img/Group 1.png";
import Herojoker from "../Img/Layer 4.png";
import Herohaha from "../Img/Layer 5.png";
import Heroabout from "../Img/Layer 5 1.png";
import Herome from "../Img/Layer 6.png";
import Heroline from "../Img/Layer 7.png";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import "./AGlitch.css";

function About() {
  return (
    <>
      <HStack mt="180px">
        <VStack mr="160px">
          <Box mt="50px" ml="-100px">
            <Image src={Heroabout} w="400px" />
          </Box>
          <Box ml="-60px">
            <Image src={Heroline} w="500px" />
          </Box>
          <Box>
            <Text lineHeight="28px" mt="60px" ml="70px" letterSpacing="2px">
              I'm Gio Lazaro Alvarez, a passionate and versatile multimedia
              <br />
              artist with a distinctive flair for creative expression. My
              journey
              <br /> in the realm of visual arts encompasses a diverse range of
              <br />
              skills, including photography, traditional illustration, digital
              <br />
              illustration, and the captivating world of tattoo artistry.
            </Text>
          </Box>
        </VStack>
        <Box position="relative" mt="-30px">
          <Box style={{ position: "relative", zIndex: 2 }}>
            {/* <Image
              src={Heropic}
              position="absolute"
              w="360px"
              mt="-50px"
              zIndex="2"
            /> */}
            <div className="Aglitch">
              <img
                src="https://github.com/landerguevarra01/giyoalvarez/blob/master/src/Img/Group%201.png?raw=true"
                alt=""
                style={{ width: "380px" }} // Set width to 570px
              />
              <div className="Aglitch__layers">
                <div className="Aglitch__layer"></div>
                <div className="Aglitch__layer"></div>
                <div className="Aglitch__layer"></div>
              </div>
            </div>
          </Box>
          <Box>
            <Image src={Herojoker} w="380px" zIndex="1" ml="50px" mt="-660px" />
          </Box>
          <Box>
            <Image
              src={Herohaha}
              position="absolute"
              w="390px"
              zIndex="2"
              mt="-295px"
              ml="-80px"
            />
          </Box>
        </Box>
      </HStack>
    </>
  );
}

export default About;
