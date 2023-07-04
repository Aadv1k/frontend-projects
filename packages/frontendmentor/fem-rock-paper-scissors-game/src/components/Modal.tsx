import styled  from "styled-components";

import RulesImage from "../assets/image-rules.svg";
import CloseIcon from "../assets/icon-close.svg";

const ModalContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    background-color: hsla(0, 0%, 0%, 0.5);
    left: 0;
    z-index: 15;
`

const ModalBox = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.white};
    background-image: url(${RulesImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;


    text-align: center;
    padding-block: 1.75rem;

    h1 {
      text-transform: uppercase;
      color; ${props => props.theme.darkText}
    }

    border-radius: 10px;

    @media screen and (min-width: 450px) {
        width: 400px;
        text-align: left;
        padding-inline: 1.75rem;
        padding-block: 1rem;
        height: 400px;
        position: absolute;
        background-size: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const CloseButton = styled.button`
    width: 30px;
    height: 30px;

    background-image: url(${CloseIcon});
    position: absolute;

    left: 50%;
    bottom: 10%;

    background-color: transparent;
    border: none;
    background-repeat: no-repeat;
    cursor: pointer;

    @media screen and (min-width: 450px) {
        left: initial;
        right: 3%;
        top: 6%;
    }
`


export default function ({ setModal }: any) {
    return (
        <ModalContainer onClick={() => setModal(false) }>
            <ModalBox>
                <h1>Rules</h1>
                <CloseButton onClick={() => setModal(false) } />
            </ModalBox>
        </ModalContainer>
    )
}
