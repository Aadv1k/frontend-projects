import { createGlobalStyle } from "styled-components";

import { sizes } from "./Variables";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: ${sizes.md}) {
      main {
        flex-direction: row;
        align-items: center;
        max-width: 1600px;
      }
  }
`;

export default GlobalStyle;
