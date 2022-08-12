import React, { useState } from "react";

import GlobalStyle from "./styles/Globals";

import CardSection from "./CardSection";
import FormSection from "./FormSection";

export default function App() {
  const [card, setCard] = useState({
    num: "0000 0000 0000 0000",
    name: "Jane appleseed",
    date: {
      mm: "00",
      yy: "00",
    },
    cvc: 222,
  });

  return (
    <>
      <GlobalStyle />
      <CardSection card={card} setCard={setCard} />
      <FormSection card={card} setCard={setCard} />
    </>
  );
}
