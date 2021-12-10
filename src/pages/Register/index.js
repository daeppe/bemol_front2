import { Container, ContainerForm, ContainerRegister, NavLink } from "./styles";
import logo from "../../assets/Bemol-logo.png";
import { ButtonBlue } from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

const Register = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos!")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Obrigatório!"),
    first_name: yup.string().required("Campo obrigatório!"),
    last_name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("E-mail invalido"),
    cep: yup
      .string()
      .min(8, "Precisa de 8 dígitos")
      .max(8, "Precisa de 8 dígitos")
      .required("Campo obrigatório!"),
    complement: yup.string().required("Campo obrigatório!"),
    number_house: yup.string().required("Campo obrigatório!"),
    references: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();
  const onSubmitFunction = ({
    username,
    email,
    password,
    first_name,
    last_name,
    cep,
    complement,
    number_house,
    references,
  }) => {
    const user = {
      username,
      email,
      password,
      first_name,
      last_name,
      cep,
      complement,
      number_house,
      references,
    };
    api
      .post("accounts/", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((_) => {
        toast.error(" Este usuário já está cadastrado");
      });
  };
  return (
    <Container>
      <ContainerRegister>
        <ContainerForm>
          <NavLink to="/">
            <img src={logo} alt="logo-habitue" />
          </NavLink>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Faça seu cadastro</h2>
            <Input
              register={register}
              name="username"
              label="Usuário"
              error={errors.username?.message}
              placeholder="Digite o usuário"
            />
            <div>
              <Input
                type="password"
                name="password"
                label="Senha"
                register={register}
                error={errors.password?.message}
                placeholder="Mínimo de 6 dígitos"
              />
              <Input
                type="password"
                name="passwordConfirm"
                label="Confirme senha"
                register={register}
                error={errors.passwordConfirm?.message}
                placeholder="Mínimo de 6 dígitos"
              />
            </div>
            <Input
              name="first_name"
              label="Nome"
              register={register}
              error={errors.first_name?.message}
              placeholder="Digite seu nome"
            />
            <Input
              name="last_name"
              label="Sobrenome"
              register={register}
              error={errors.last_name?.message}
              placeholder="Digite seu sobrenome"
            />
            <Input
              name="email"
              label="Email"
              register={register}
              error={errors.email?.message}
              placeholder="Digite seu e-mail"
            />
            <Input
              name="cep"
              label="Cep"
              register={register}
              error={errors.cep?.message}
              placeholder="Digite seu cep"
            />
            <Input
              name="complement"
              label="Complemento"
              register={register}
              error={errors.complement?.message}
              placeholder="Digite seu complemento"
            />
            <Input
              name="number_house"
              label="Número da casa"
              register={register}
              error={errors.number_house?.message}
              placeholder="Digite o número da sua casa"
            />
            <Input
              name="references"
              label="Referencia"
              register={register}
              error={errors.references?.message}
              placeholder="Digite uma referência"
            />
            <ButtonBlue>Cadastrar</ButtonBlue>
            <h4>
              Já tem conta? <Link to="/login">Faça o login!</Link>
            </h4>
          </form>
        </ContainerForm>
      </ContainerRegister>
    </Container>
  );
};
export default Register;
