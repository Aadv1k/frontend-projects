import React from "react";

import MuiBox from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import styled from "styled-components";

import { sizes, colors } from "../Variables";

import Logo from "../images/logo.svg";

const Img = styled.div`
  width: 100px;
  img {
    width: 100%;
    vertical-align: middle;
  }
`;

const Box = styled(MuiBox)`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
  background-color: ${colors.intro};

  @media screen and (min-width: ${sizes.md}) {
    padding: 2em 2.5em;
  }
`;

// TODO: very small screens < 320
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
`;

const NavItm = styled.li`
  text-transform: capitalize;
  opacity: 0.8;
`;

export default function Navbar() {
  return (
    <Box>
      <Img>
        <img src={Logo} alt="" />
      </Img>

      <NavList>
        <NavItm>
          <MuiLink href="#" aria-label="features of the product">
            features
          </MuiLink>
        </NavItm>

        <NavItm>
          <MuiLink href="#" aria-label="teams and more">
            team
          </MuiLink>
        </NavItm>
        <NavItm>
          <MuiLink href="#" aria-label="sign in action">
            sign in
          </MuiLink>
        </NavItm>
      </NavList>
    </Box>
  );
}
