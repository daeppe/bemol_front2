import { Logo } from "../Header/styles";
import logo from "../../assets/Bemol-logo.png";
import { ButtonBlue } from "../Button";
import { DivHeaderPages } from "./styles";
import { useHistory } from "react-router-dom";

const HeaderPages = () => {
  const history = useHistory();

  const handlerLogout = () => {
    localStorage.clear();
    document.location.reload();
  };

  return (
    <DivHeaderPages>
      <Logo src={logo} alt="logo-bemol" onClick={() => history.push("/")} />
      <div className="div-buttons">
        <ButtonBlue onClick={handlerLogout}>Logout</ButtonBlue>
      </div>
    </DivHeaderPages>
  );
};

export default HeaderPages;
