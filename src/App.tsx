import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { useState } from "react";
import { NewTransactionModal } from "./components/newTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}
