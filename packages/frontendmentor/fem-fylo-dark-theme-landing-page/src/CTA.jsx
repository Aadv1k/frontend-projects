import React from "react";

import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";
import { sizes } from "./Variables.js";

import { ArrowCircleRight } from "@mui/icons-material";

import ProdImg from "./images/illustration-stay-productive.png";

const Image = styled.div`
  img {
    width: 100%;
  }
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 2em;
  flex: 50%;

  max-width: 1200px;
  width: 95%;
  margin-inline: auto;

  @media screen and (min-width: ${sizes.md}) {
    flex-direction: row;
  }

  @media screen and (max-width: ${sizes.sm}) {
    width: 100%;
    padding-inline: 1.5em;
  }
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-self: flex-start;

  gap: 1em;
  align-items: flex-start;
  margin-block: 1.5em;

  @media screen and (min-width: ${sizes.md}) {
    margin-inline: 2em;
  }
`;

const Heading = styled(Typography)`
  font-size: 1.5em;
  font-weight: 700;
  max-width: 600px;
`;

export default function () {
  return (
    <Container>
      <Image>
        <img src={ProdImg} alt="" />
      </Image>

      <Content>
        <Heading variant="h2">Stay productive, wherever you are</Heading>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>

        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <Button variant="text" endIcon={<ArrowCircleRight />} href="#">
          see how fylo works
        </Button>
      </Content>
    </Container>
  );
}
