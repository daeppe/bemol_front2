import { DivButtons, DivHeader, Logo } from "./styles";
import logo from "../../assets/Bemol-logo.png";
import { ButtonBlue, ButtonWhite } from "../Button";
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <DivHeader>
      <Logo src={logo} alt="logo-bemol" onClick={() => history.push("/")} />
      <DivButtons>
        <ButtonBlue onClick={handleLogin}>Login</ButtonBlue>
        <ButtonWhite onClick={handleRegister}>Cadastre</ButtonWhite>
      </DivButtons>
    </DivHeader>
  );
};

export default Header;
