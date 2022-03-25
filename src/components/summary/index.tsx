import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useTransactions();
  console.log(transactions);

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === "deposit"){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }
    else if(transaction.type === "withdraw"){
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      {/* total */}
      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{summary.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
      </div>

      {/* entradas */}
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{summary.deposits.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
      </div>

      {/* saidas */}
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{summary.withdraws.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
      </div>

      
    </Container>
  );
}
