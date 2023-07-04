import theme from "./Theme";
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-image: linear-gradient(180deg, ${theme.bgGradient.from}, ${theme.bgGradient.to});
    font-family: ${theme.font.serif};
  
`;
