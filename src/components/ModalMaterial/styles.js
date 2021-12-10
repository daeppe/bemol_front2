import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 500px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #2c69d2;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.8;
  flex-wrap: wrap;

  p {
    margin-bottom: 2rem;
    padding: 20px;
  }
  button {
    border-radius: 40px;
    border: #ffffff;
    background-color: #f5b93b;
    color: #ffffff;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    cursor: auto;
    div {
      display: flex;
      gap: 10px;
      margin: 0 auto;
      padding-bottom: 5px;
      span {
        font-size: 14px;
      }
    }
  }
  a {
    cursor: pointer;
  }

  svg {
    font-size: 22px;
  }
`;
