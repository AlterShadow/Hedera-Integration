import Modal from "./Modal";

import metamaskImg from "../../assets/BrandingAssets-main/Icons/metamask.svg";
import hashpackImg from "../../assets/BrandingAssets-main/Icons/hashpack.png";
import bladeImg from "../../assets/BrandingAssets-main/Icons/blade.png";
import { useContext } from "react";
import ModalContext from "../../util/modalContext";

export default function ModalConnectWallet() {
	const modalCtx = useContext(ModalContext);

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
					<button>
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
