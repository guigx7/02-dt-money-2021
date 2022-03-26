import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

Modal.setAppElement("#root");

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  toggleTheme(): void;
}

export function Header({ onOpenNewTransactionModal, toggleTheme}: HeaderProps) {
  const {colors, title} = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        className="mode-toggle"
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor="#241354"
        offColor="#ccc"

      />
      <Content>
        <img src={logoImg} alt="dt-money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
