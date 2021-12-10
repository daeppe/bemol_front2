import { useState } from "react";
import { ButtonBlue } from "../../components/Button";
import Header from "../../components/Header";
import TransitionsModal from "../../components/ModalMaterial";
import background from "../../assets/background.svg";
import { DivHome } from "./styles";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <DivHome>
        <div>
          <h2>Teste técnico para ingressar na Bemol</h2>
          <ButtonBlue onClick={handleOpen}>Saiba mais</ButtonBlue>
          <TransitionsModal
            open={open}
            handleClose={handleClose}
          ></TransitionsModal>
        </div>
        <img src={background} alt="img-background" />
      </DivHome>
    </>
  );
};

export default Home;
