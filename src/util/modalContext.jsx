import { createContext, useState } from "react";

const ModalContext = createContext({
  modal: "",
  title: "",
  showSupply: () => {},
  showBorrow: () => {},
  showRisk: () => {},
  showConnectWallet: () => {},
  hideModal: () => {},
  giveTitle: () => {},
});

export function ModalContextProvider({ children }) {
  const [modal, setModal] = useState("");
  const [title, setTitle] = useState("");

  function giveTitle(title) {
    setTitle(title);
  }

  function showSupply() {
    setModal("supply");
  }
  function showBorrow() {
    setModal("borrow");
  }
  function showRisk() {
    setModal("risk");
  }
  function showConnectWallet() {
    setModal("wallet");
  }
  function hideModal() {
    setModal("");
  }

  const modalContext = {
    modal,
    title,
    giveTitle,
    showSupply,
    showBorrow,
    showRisk,
    showConnectWallet,
    hideModal,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
