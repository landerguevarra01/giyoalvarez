import { Box, Grid, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Image1 from "../Img/DSC03084_1.png";
import Image2 from "../Img/DSC03046_1.png";
import Image3 from "../Img/DSC03051_1 1.png";

function Output() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <VStack>
      <Grid gridTemplateColumns="1fr 1fr" ml="-250px">
        <Box
          style={{
            overflow: "hidden",
            width: "341px",
            height: "444px",
          }}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <Image
            src={Image1}
            style={{
              transform: isHovered1 ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.4s",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          style={{
            overflow: "hidden",
            width: "590px",
            height: "444px",
          }}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          ml="-100px"
        >
          <Image
            src={Image2}
            style={{
              transform: isHovered2 ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.4s",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Grid>
      <Grid gridTemplateColumns="1fr 1fr" ml="-100px" mt="30px">
        <Box
          style={{
            overflow: "hidden",
            width: "563px",
            height: "361px",
          }}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          ml="-100px"
        >
          <Image
            src={Image3}
            style={{
              transform: isHovered3 ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.4s",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Grid>
    </VStack>
  );
}

export default Output;
