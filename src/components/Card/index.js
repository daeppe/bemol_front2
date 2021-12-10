import { DivCard } from "./styles";

const Card = ({ valueTitle, valueAddress, children }) => {
  return (
    <DivCard>
      <h2>{valueTitle}</h2>
      <p>{valueAddress}</p>
      {children}
    </DivCard>
  );
};

export default Card;
