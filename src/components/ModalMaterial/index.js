import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";
import { ModalWrapper, ModalContent } from "./styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ open, handleClose }) {
  const classes = useStyles();

  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalWrapper>
            <ModalContent>
              <p className="paragrafo">
                Agradeço pela oportunidade que me foi dada, gostei bastante de
                fazer o teste, espero ter feito um teste que agrade a equipe.
              </p>
              <div>
                <button>
                  <div>
                    <span>Daniel</span>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/daniel-epichin-pena/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://gitlab.com/daniel_epichin_pena"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGitlab />
                    </a>
                  </div>
                </button>
              </div>
            </ModalContent>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
}
