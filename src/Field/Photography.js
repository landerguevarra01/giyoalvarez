import React, { useEffect, useRef, useState } from "react";
import { Box, Image, VStack } from "@chakra-ui/react";
import { gsap } from "gsap";
import Camera from "../Img/photography 1.png";

const HoverImage = ({ src, bgColor }) => {
  const imageRef = useRef(null);
  const [hover, setHover] = useState(false);
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;

  useEffect(() => {
    calculatePosition();
    attachEventsListener();
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", calculatePosition);
    };
  }, []);

  const calculatePosition = () => {
    gsap.set(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });
    const box = imageRef.current.getBoundingClientRect();
    x = box.left + box.width * 0.5;
    y = box.top + box.height * 0.5;
    width = box.width;
    height = box.height;
  };

  const attachEventsListener = () => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", calculatePosition);
  };

  const onMouseMove = (e) => {
    let hoverArea = hover ? 0.7 : 0.5;
    let distance = Math.sqrt((e.clientX - x) ** 2 + (e.clientY - y) ** 2);
    if (distance < width * hoverArea) {
      if (!hover) {
        setHover(true);
      }
      onHover(e.clientX, e.clientY);
    } else {
      if (hover) {
        onLeave();
        setHover(false);
      }
    }
  };

  const onHover = (clientX, clientY) => {
    gsap.to(imageRef.current, {
      x: (clientX - x) * 0.4,
      y: (clientY - y) * 0.4,
      scale: 1.15,
      ease: "power2.out",
      duration: 0.4,
    });
    imageRef.current.style.zIndex = 10;
  };

  const onLeave = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      ease: "elastic.out(1.2, 0.4)",
      duration: 0.7,
    });
    imageRef.current.style.zIndex = 1;
  };

  return (
    <>
      <VStack >
        <Box
          ref={imageRef}
          width="585px"
          height="517px"
          cursor="pointer"
          overflow="hidden"
          mt="150px"
        >
          <Image src={src} w="100%" h="100%" />
        </Box>
      </VStack>
    </>
  );
};

const App = () => {
  return <HoverImage src={Camera} bgColor="#F3FFBD" />;
};

export default App;
