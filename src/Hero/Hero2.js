import { Box, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import Heropic from "../Img/Layer0.png";
import Herofname from "../Img/Layer 2.png";
import Herolname from "../Img/Layer 3.png";
import Herosmile from "../Img/smile.png";
import "./Glitch.css";

function Hero2() {
  const [isClicked, setIsClicked] = useState(false);
  const imageSize = useBreakpointValue({
    base: "280px",
    md: "570px",
  });
  const fnameImageSize = useBreakpointValue({
    base: "210px",
    md: "470px",
  });
  const lnameImageSize = useBreakpointValue({
    base: "300px",
    md: "740px",
  });
  const smileImageSize = useBreakpointValue({
    base: "130px",
    md: "300px",
  });
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <VStack>
        <Box position="relative" zIndex="2" mt={{ base: "50px", md: "40px" }}>
          <div className="glitch">
            <img
              src="https://github.com/landerguevarra01/giyoalvarez/blob/master/src/Img/Layer0.png?raw=true"
              alt=""
              style={{ width: "625px" }} // Set width to 570px
            />
            <div className="glitch__layers">
              <div className="glitch__layer"></div>
              <div className="glitch__layer"></div>
              <div className="glitch__layer"></div>
            </div>
          </div>
        </Box>
        <Box
          position="absolute"
          zIndex="1"
          mt={{ base: "30px", md: "90px" }}
          mr={{ base: "20px", md: "50px" }}
          sx={{
            "@keyframes bounceFname": {
              "0%, 50%": { transform: "translateY(-100%)" },
              "50%": { transform: "translateY(10%)" },
            },
            animation: "bounceFname 3s",
          }}
        >
          <Image src={Herofname} w={fnameImageSize} />
        </Box>
        <Box
          position="absolute"
          zIndex="2"
          mt={{ base: "140px", md: "350px" }}
          ml={{ base: "20px", md: "35px" }}
          sx={{
            "@keyframes bounceLname": {
              "0%, 50%": { transform: "translateY(100%)" }, // Start from bottom
              "50%": { transform: "translateY(-10%)" }, // Move up
            },
            animation: "bounceLname 5s",
          }}
        >
          <Image src={Herolname} w={lnameImageSize} />
        </Box>
        <Box
          position="absolute"
          zIndex="2"
          mt={{ base: "300px", md: "650px" }}
          ml={{ base: "20px", md: "-10px" }}
          sx={{
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            "@keyframes rubberBandStretch": {
              "0%": { transform: "scale(1)" },
              "30%": { transform: "scale(1.25)" },
              "70%": { transform: "scale(0.75)" },
              "100%": { transform: "scale(1)" },
            },
            animation: `fadeInUp 5s ease-in-out ${
              isClicked ? ", rubberBandStretch 1s" : ""
            }`,
          }}
          onClick={handleClick}
        >
          <Image src={Herosmile} w={smileImageSize} />
        </Box>
      </VStack>
    </>
  );
}

export default Hero2;
