import React from "react";

import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

import { colors } from "../Variables";

import Prof1 from "../images/profile-1.jpg";
import Prof2 from "../images/profile-2.jpg";
import Prof3 from "../images/profile-3.jpg";
import QuoteImg from "../images/bg-quotes.png";

const GridContainer = styled(Grid)`
  max-width: 1200px;
  width: 95%;
  margin-inline: auto;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background-image: url(${QuoteImg});
    background-repeat: no-repeat;
    top: -2%;
    z-index: -1;
    left: 0;
  }
}
`;

const GridContent = styled.div`
  background-color: ${colors.testemonials};
  border-radius: 5px;
  padding: 1.5em;
`;

const GridProfile = styled.div`
  display: flex;
  margin-top: 1em;
  align-items: center;

  img {
    width: 40px;
    border-radius: 999px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-inline-start: 0.5em;
  }
`;

export default function Testemonials() {
  return (
    <GridContainer container rowSpacing={4} columnSpacing={2}>
      {/* Ah yes, MUI Grid that is not grid at all! but a hacky flexbox solution that breaks with the sligtest non-mui touch, truly a library for the modern web */}

      <Grid item xs={12} md={4}>
        <GridContent>
          <Typography variant="body2" paragraph>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </Typography>

          <GridProfile>
            <img src={Prof1} alt="" />
            <div>
              <strong> Satish Patel</strong>
              <small> Founder & CEO, Huddle</small>
            </div>
          </GridProfile>
        </GridContent>
      </Grid>

      <Grid item xs={12} md={4}>
        <GridContent>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <GridProfile>
            <img src={Prof2} alt="" />
            <div>
              <strong> Bruce McKenzie</strong>
              <small> Founder & CEO, Huddle</small>
            </div>
          </GridProfile>
        </GridContent>
      </Grid>

      <Grid item xs={12} md={4}>
        <GridContent>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <GridProfile>
            <img src={Prof3} alt="" />
            <div>
              <strong> Iva Boyd</strong>
              <small> Founder & CEO, Huddle</small>
            </div>
          </GridProfile>
        </GridContent>
      </Grid>
    </GridContainer>
  );
}
