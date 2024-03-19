import logo from "./logo.svg";
import "./App.css";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box>
        <Grid gridTemplateColumns="1fr 1fr">
          <Grid gridTemplateRows="1fr 1fr 1fr">
            <Heading>Gio</Heading>
            <Heading>Alvarez</Heading>
            <Text>
              Greetings! I'm Gio Lazaro Alvarez, a passionate and versatile
              multimedia artist with a distinctive flair for creative
              expression. My journey in the realm of visual arts encompasses a
              diverse range of skills, including photography, traditional
              illustration, digital illustration, and the captivating world of
              tattoo artistry.
            </Text>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
