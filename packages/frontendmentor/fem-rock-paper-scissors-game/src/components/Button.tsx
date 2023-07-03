import styled from "styled-components";

const StyledPrimaryButton = styled.button`
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.darkText};
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 4px;
    font-family: ${props => props.theme.font.serif};
    padding: .75rem 2.5rem;

    cursor: pointer;
    border: none;
`

export function PrimaryButton ({ onClick, children }: any) {

    return <StyledPrimaryButton onClick={onClick}>
        {children}
    </StyledPrimaryButton>

}
