import React from "react";

import MuiBox from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Logo from "./images/logo.svg";
import styled from "styled-components";

import {sizes, colors} from "./Variables";

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
`

const NavItm = styled.li`
  text-transform: capitalize;
  opacity: 0.8;
`;

const NavLink = styled(MuiLink)`
  text-decoration: none;
  color: inherit;
`;

export default function () {
  return (
    <Box>
      <Img>
        <img src={Logo} alt="" />
      </Img>

      <NavList>
        <NavItm>
          <NavLink href="#" underline="hover" aria-label="features of the product">
            features
          </NavLink>
        </NavItm>

        <NavItm>
          <NavLink href="#" underline="hover" aria-label="teams and more">
            team
          </NavLink>
        </NavItm>
        <NavItm>
          <NavLink href="#" underline="hover" aria-label="sign in action">
            sign in
          </NavLink>
        </NavItm>
      </NavList>
    </Box>
  );
}
