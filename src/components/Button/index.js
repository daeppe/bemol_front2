import styled from "styled-components";

export const ButtonBlue = styled.button`
  background-color: var(--blue);
  color: var(--white);
  border: 2px solid var(--blue-light);
  padding: 10px;
  min-width: 80px;
  max-height: 50px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  &:hover {
    z-index: 2;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--blue-light);
    transition: 0.2s;
    z-index: -1;
    top: 0;
    border-radius: 10px;
  }
  :hover::before {
    width: 100%;
  }
`;

export const ButtonWhite = styled(ButtonBlue)`
  background-color: var(--white);
  color: var(--blue-light);
  &:hover {
    z-index: 2;
    color: var(--white);
  }
  &:before {
    background: var(--gray);
  }
  :hover::before {
    width: 100%;
  }
`;
