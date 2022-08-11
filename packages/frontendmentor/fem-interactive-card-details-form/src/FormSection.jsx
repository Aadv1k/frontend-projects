/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Cleve from "cleave.js/react";

import { fonts, colors, sizes } from "./styles/Variables";

import imgBlueTick from "./images/icon-complete.svg";

const Form = styled.form`
  width: 100%;
  padding-inline: 1em;
  margin-block-start: 5em;

  @media screen and (min-width: ${sizes.md}) {
    width: 50%;
    > * {
      max-width: 450px;
    }
  }
`;

const FormItm = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 0.5em;
  gap: 0.5em;
  font-family: ${fonts.sans};
  > label {
    text-transform: uppercase;
    font-size: 0.9em;
    color: ${colors.violet3};
  }
`;

const Input = styled(Cleve)`
  height: 45px;
  border: 1px solid ${colors.violet1};
  width: 100%;
  padding: 1em 0.5em;
  font-size: 1.1em;
  color: ${colors.violet3};
  border-radius: 5px;
  outline: none;

  &::placeholder {
    color: ${colors.violet3};
    font-family: ${fonts.sans};
  }

  &:focus {
    border: 1px solid ${colors.violet2};
  }
`;

const NameInput = styled(Input)`
  border: 1px solid ${colors.violet1};
  &:focus {
    border: 1px solid ${colors.violet2};
  }
`;

const FormItmDate = styled(FormItm)`
  flex-direction: column;
  width: 50%;

  > div {
    display: flex;
    gap: 0.5em;
    width: 100%;
    flex-direction: row;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5em;
  > div {
    width: 50%;
  }
`;

const FormButton = styled.button`
  background: ${colors.violet3};
  color: ${colors.white};
  font-family: ${fonts.sans};
  border: none;
  width: 100%;
  padding-block: 0.6em;
  font-size: 1.2em;
  margin-block: 1em;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  transition: opacity 100ms ease-in;
  &:hover {
    opacity: 0.9;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3em;
  font-family: ${fonts.sans};
  > img {
    width: 80px;
  }

  div {
    text-align: center;
  }

  h2 {
    font-size: 1.8em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: ${fonts.w.med};
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.2em;
    color: ${colors.violet2};
  }
`;

const ContBtn = styled(FormButton)`
  width: 80%;
  min-width: 280px;
`;

function FormSection({ card, setCard }) {
  const [modal, setModal] = useState(true);

  return (
    <Form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        for (const i of form) {
          i.value = "";
        }
        setModal(!modal);
        setCard({
          num: "0000 0000 0000 0000",
          name: "Jane appleseed",
          date: {
            mm: "00",
            yy: "00",
          },
          cvc: 222,
        });
      }}
    >
      {modal ? (
        <>
          <FormItm>
            <label htmlFor="cardname">cardholder name</label>
            <NameInput
              type="text"
              maxLength={20}
              options={{
                // https://github.com/nosir/cleave.js/issues/368
                blocks: [99999],
                delimiter: "",
              }}
              required
              name="cardname"
              placeholder="e.g. Jane Appleseed"
              onInput={(e) => {
                if (e.target.value.match(/\d+/g)) e.target.value = "";
                if (e.target.value.length === 0) {
                  setCard({
                    ...card,
                    name: "jane appleseed",
                  });
                  return;
                }

                setCard({
                  ...card,
                  name: e.target.value.trim(),
                });
              }}
            />
          </FormItm>

          <FormItm>
            <label htmlFor="cardnum">card number</label>
            <Input
              options={{
                blocks: [4, 4, 4, 4],
                delimiter: " ",
                numericOnly: true,
              }}
              required
              placeholder="e.g. 1234 5678 9123 0000"
              type="tel"
              onInput={(e) => {
                let data = e.target.value;
                if (data.length === 0) {
                  setCard({
                    ...card,
                    num: "0000 0000 0000 0000",
                  });

                  return;
                }
                data = data
                  .split(" ")
                  .filter((elem) => Number(elem) || elem === " ");
                data[data.length - 1] = data[data.length - 1].slice(0, 4);
                data = data.join(" ");
                const t = data + card.num.slice(data.length, card.num.length);

                setCard({
                  ...card,
                  num: t,
                });
              }}
            />
          </FormItm>

          <FormWrapper>
            <FormItmDate>
              <label htmlFor="cardmm">exp. date (MM/YY)</label>
              <div>
                <Input
                  required
                  placeholder="MM"
                  id="cardmm"
                  options={{
                    date: true,
                    datePattern: ["mm"],
                  }}
                  onInput={(e) => {
                    setCard({
                      ...card,
                      date: {
                        yy: card.date.yy,
                        mm: e.target.value ? e.target.value.slice(0, 2) : "00",
                      },
                    });
                  }}
                />
                <Input
                  required
                  placeholder="YY"
                  options={{
                    date: true,
                    datePattern: ["yy"],
                  }}
                  name="cardyy"
                  onInput={(e) => {
                    setCard({
                      ...card,
                      date: {
                        mm: card.date.mm,
                        yy: e.target.value ? e.target.value.slice(0, 2) : "00",
                      },
                    });
                  }}
                />
              </div>
            </FormItmDate>

            <FormItm>
              <label htmlFor="cardcvc">cvc</label>
              <Input
                options={{
                  numericOnly: true,
                  blocks: [3],
                }}
                name="cardcvc"
                placeholder="e.g. 123"
                required
                onInput={(e) => {
                  setCard({
                    ...card,
                    cvc: e.target.value ? e.target.value.slice(0, 3) : "000",
                  });
                }}
              />
            </FormItm>
          </FormWrapper>
          <FormButton type="submit">confirm</FormButton>
        </>
      ) : (
        <Modal>
          <img src={imgBlueTick} alt="" />
          <div>
            <h2>Thank you!</h2>
            <p>We&apos;ve added your card details</p>
          </div>
          <ContBtn onClick={() => setModal(!modal)}>Continue</ContBtn>
        </Modal>
      )}
    </Form>
  );
}

FormSection.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    num: PropTypes.string,
    cvc: PropTypes.string,
    date: PropTypes.shape({
      mm: PropTypes.string,
      yy: PropTypes.string,
    }),
  }).isRequired,
  setCard: PropTypes.func.isRequired,
};

export default FormSection;
