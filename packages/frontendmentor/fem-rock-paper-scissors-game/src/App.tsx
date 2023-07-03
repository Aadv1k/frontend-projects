import { useState } from 'react'

import styled from "styled-components";

import { ThemeProvider } from 'styled-components';

import theme from "./Theme";

const Title = styled.h1`
   font-size: 1.5rem;
	 font-family: ${(props) => props.theme.font.serif};
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ThemeProvider theme={theme}>
            <Title>
                <h1>Hello world</h1>
            </Title>
        </ThemeProvider>
    </>
  )
}

export default App
