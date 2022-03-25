import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useContext(TransactionContext);
  console.log(transactions);

  return (
    <Container>
      {/* entradas */}
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 2000,00</strong>
      </div>

      {/* saidas */}
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>

      {/* total */}
      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 1500,00</strong>
      </div>
    </Container>
  );
}
