import HeaderPages from "../../components/HeaderPages";
import { Container } from "./styles";
import Card from "../../components/Card";
import { useAuth } from "../../providers/auth";

const Dashboard = () => {
  const { user, address } = useAuth();

  return (
    <Container>
      <HeaderPages />
      <h1>Olá, {user.username}!</h1>
      <Card
        valueTitle="Endereço do usuário"
        valueAddress={`Nome: ${user.first_name},
          Sobrenome: ${user.last_name}, Email: ${user.email}, CEP: ${user.cep}, Rua: ${address.logradouro} n${user.number_house}, complemento: ${user.complement}, bairro: ${address.bairro}, cidade: ${address.localidade},
          estado: ${address.uf}`}
      />
    </Container>
  );
};
export default Dashboard;
