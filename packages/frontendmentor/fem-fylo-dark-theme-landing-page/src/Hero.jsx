import React from "react";

import HeroImg from "./images/illustration-intro.png";

import BgMbl from "./images/bg-curvy-mobile.svg";
import BgDesk from "./images/bg-curvy-desktop.svg";
import styled from "styled-components";
import { Typography, Button} from "@mui/material";
import { sizes, colors } from "./Variables";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em .5em;
  align-items: center;
  text-align: center;
  background-color: ${colors.intro};
  gap: 1.5em;
  position: relative;

  > * {
    width: 95%;
  z-index: 2;
  }
p {
max-width: 60ch;
}
`;
const Hero = styled.div`
  img {
    width: 100%;
    vertical-align: middle;
    max-width: 600px;
  }
`;
const Heading = styled(Typography)`
  font-size: 2em;
  font-weight: 700;
    max-width: 600px;
`;

const HeroBg = styled.picture`
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
  max-width: 100%;

  img {
    width: 100%;
    vertical-align: bottom;
    user-drag: none; 
    user-select: none
  }
`;

export default function () {
  return (
    <Section>
      <HeroBg>
        <source media={`(min-width: ${sizes.md})`} srcSet={BgDesk} />
        <img src={BgMbl} alt="" />
      </HeroBg>

      <Hero>
        <img src={HeroImg} alt="" />
      </Hero>

      <Heading variant="h1">
        All your files in one secure location, accessible anywhere.
      </Heading>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>

      <Button variant="contained" sx={{
        maxWidth: "400px",
        fontSize: "1.1em"
      }}>Get Started</Button>
    </Section>
  );
}
