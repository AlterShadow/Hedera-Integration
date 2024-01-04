import React, { useState, useContext } from "react";
import { useSDK } from "@metamask/sdk-react";

import metamaskImg from "../../assets/BrandingAssets-main/Icons/metamask.svg";
import hashpackImg from "../../assets/BrandingAssets-main/Icons/hashpack.png";
import bladeImg from "../../assets/BrandingAssets-main/Icons/blade.png";
import ModalContext from "../../util/modalContext";
import Modal from "./Modal";

export default function ModalConnectWallet() {
  const [account, setAccount] = useState("");
  const { sdk, connected, connecting, provider, chainId } = useSDK();
  const modalCtx = useContext(ModalContext);

  const connectMetaMaskHandler = async () => {
    try {
      handleCloseWallet();
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  function handleCloseWallet() {
    modalCtx.hideModal();
  }
  return (
    <Modal
      open={modalCtx.modal === "wallet"}
      onClose={modalCtx.modal === "wallet" ? handleCloseWallet : null}
    >
      <div className="popup-wallet-container">
        <h3>Connect Wallet</h3>
        <div className="wallets-container">
          <button onClick={connectMetaMaskHandler}>
            <img src={metamaskImg} alt="" />
            <p>Metamask</p>
          </button>
          <button>
            <img src={hashpackImg} alt="" />
            HashPack
          </button>
          <button>
            <img src={bladeImg} alt="" />
            Blade
          </button>
        </div>
      </div>
    </Modal>
  );
}
