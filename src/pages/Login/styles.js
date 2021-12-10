import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  text-align: center;
`;

export const NavLink = styled(Link)`
  margin: 10px auto;
`;

export const ContainerLogin = styled.div`
  position: absolute;
  width: 100%;
  top: 10px;
`;

export const ContainerForm = styled.div`
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  padding: 10px;
  background: var(--blue-header);
  border: 1px solid transparent;
  border-image: linear-gradient(var(--white) 0%, #2c69d2 100%);
  border-image-slice: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 40%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background: #2c69d2;
    border: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2c69d2;
    border-radius: 20px;
    border: 3px solid #f5b93b;
  }
  img {
    margin-top: 10px;
    height: 100px;
  }

  h2 {
    margin: 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h4 {
    margin: 10px;
    a {
      color: var(--gray);
      font-weight: bold;
    }
  }
`;
