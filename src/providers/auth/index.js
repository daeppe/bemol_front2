import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("@Bemol-Front:token") || "";
  const userlocal = localStorage.getItem("@Bemol-Front:username") || "";
  const viaCepUrl = "https://viacep.com.br/ws/";

  const [auth, setAuth] = useState(token);
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");

  const signIn = (userData, history) => {
    api
      .post("login/", userData)
      .then((response) => {
        localStorage.setItem("@Bemol-Front:token", response.data.token);
        localStorage.setItem("@Bemol-Front:username", userData.username);
        setAuth(response.data.token);
        toast.success("Você foi Logado");
        history.push("/dashboard");
      })
      .catch((_) =>
        toast.error("Falha na autenticação, verifique seus dados!!")
      );
  };

  const callUser = () => {
    api
      .get(`accounts/${userlocal}/`, {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then((response) => {
        const currentUser = response.data[0];
        setUser(currentUser);
      });
  };

  const callCep = (cep) => {
    axios.get(`${viaCepUrl}${user.cep}/json/`).then((response) => {
      setAddress(response.data);
    });
  };
  useEffect(() => {
    callUser();

    // eslint-disable-next-line
  }, [userlocal]);

  useEffect(() => {
    if (user) {
      callCep();
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, signIn, user, address }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
