import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

function Photography() {
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1); // -1 means no box is active
  const boxWidth = 100; // Width of each box
  const numBoxes = 3; // Number of boxes

  const handleNext = () => {
    const newOffset = offset + boxWidth;
    setOffset(newOffset >= boxWidth * numBoxes ? 0 : newOffset);
    setActiveIndex(-1); // Reset active index when sliding
  };

  const handlePrevious = () => {
    const newOffset = offset - boxWidth;
    setOffset(newOffset < 0 ? boxWidth * (numBoxes - 1) : newOffset);
    setActiveIndex(-1); // Reset active index when sliding
  };

  const handleBoxClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1); // Reset active index if clicked again
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        justifyItems: "center",
        marginTop: "220px",
      }}
    >
      <button onClick={handlePrevious}>Previous</button>
      <Flex
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          transform: `translateX(-${offset}px)`,
          transition: "transform 0.5s ease",
        }}
        w={`${boxWidth * numBoxes}px`} // Width of the slider container
        justifyContent="center"
      >
        {[...Array(numBoxes)].map((_, index) => (
          <Box
            key={index}
            w={`${boxWidth}px`}
            h="100px"
            bg={
              index === 0 ? "red.200" : index === 1 ? "blue.200" : "green.200"
            }
            m={2}
            onClick={() => handleBoxClick(index)}
            style={{
              transform: index === activeIndex ? "scale(1.2)" : "scale(1)",
              transition: "transform 0.5s ease",
              opacity: index === activeIndex ? 0.5 : 1,
            }}
          />
        ))}
      </Flex>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Photography;
