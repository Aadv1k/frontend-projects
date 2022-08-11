import React from "react";
import styled from "styled-components";

import { fonts, sizes, colors } from "./styles/Variables";

import bgMainMob from "./images/bg-main-mobile.png";
import bgMainDesk from "./images/bg-main-desktop.png";

import cardBgF from "./images/bg-card-front.png";
import cardBgB from "./images/bg-card-back.png";

import logo from "./images/card-logo.svg";

const Section = styled.section`
  height: 300px;
  width: 100%;
  background-image: url(${bgMainMob});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${fonts.sans};
  font-weight: ${fonts.w.med};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${sizes.md}) {
    min-height: 100vh;
    width: 50%;
    background-image: url(${bgMainDesk});
    background-size: 400px 100vh;
  }
`;

const CardContainer = styled.div`
  position: relative;
  align-self: center;
  width: 90%;
  max-width: 350px;

  @media screen and (max-width: ${sizes.sm}) {
    width: 85%;
  }

  @media screen and (min-width: ${sizes.md}) {
    max-width: 400px;
    width: 100%;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${cardBgF});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  border-radius: 5px;

  top: 50%;
  left: 45%;
  transform: translate(-49%, 8%);
  z-index: 2;

  @media screen and (min-width: ${sizes.md}) {
    height: 230px;
    left: 0;
    transform: translate(0, -90%);
`;

const CardBack = styled(Card)`
  background-image: url(${cardBgB});
  z-index: 1;
  transform: translate(-40%, -50%);

  > span {
    position: absolute;
    top: 45%;
    left: 10%;
    color: ${colors.white};
  }

  @media screen and (min-width: ${sizes.md}) {
    transform: translate(10%, 20%);
  }

  @media screen and (min-width: ${sizes.lg}) {
    transform: translate(20%, 20%);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1em;

  > img {
    width: 70px;
  }

  > div {
    width: 100%;
  }
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  color: ${colors.white};
  margin-block-end: 1.5em;
  gap: 0.5em;

  span {
    font-size: 1.5em;
    letter-spacing: 2px;
  }

  @media screen and (min-width: ${sizes.md}) {
    width: 100%;

    span {
      font-size: 1.8em;
    }
  }

  @media screen and (max-width: ${sizes.sm}) {
    gap: 0.3em;
    width: 100%;
    span {
      letter-spacing: 1px;
      font-size: 1.3em;
    }
  }
`;

const CardContentSub = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};

  span {
    text-transform: uppercase;
  }
`;

export default function ({ card }) {
  return (
    <Section>
      <CardContainer>
        <Card>
          <CardContent>
            <img src={logo} alt="" />
            <div>
              <CardTitle>
                {card.num.split(" ").map((e) => (
                  <span key={Math.floor(Math.random() * 9999)}>{e}</span>
                ))}
              </CardTitle>
              <CardContentSub>
                <span>{card.name}</span>
                <span>
                  {card.date.mm}/{card.date.yy}
                </span>
              </CardContentSub>
            </div>
          </CardContent>
        </Card>
        <CardBack>
          <span>{card.cvc}</span>
        </CardBack>
      </CardContainer>
    </Section>
  );
}
