import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Photo from "../Img/photo.png";

function Photography() {
  const containerStyle = {
    position: "relative",
    width: "100%", // Set width to fill the container
    height: "100vh", // Set height to fill the viewport
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto", // Center the image horizontally and vertically
  };

  return (
    <Box style={containerStyle}>
      <Box>
        <Image src={Photo} style={imageStyle} />
      </Box>
    </Box>
  );
}

export default Photography;
