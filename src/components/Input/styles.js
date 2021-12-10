import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    span {
      color: var(--red);
    }
  }
`;
export const InputContainer = styled.div`
  input {
    padding: 5px 0px 5px 5px;
    height: 30px;
    border: 1px solid var(--blue-header);
    border-radius: 3px;
    margin: 10px auto;
  }

  input::placeholder {
    color: var(--blue-light);
  }

  svg {
    margin-right: 16px;
  }
`;
