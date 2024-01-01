import { useContext, useState } from "react";
import ModalDashboard from "./ModalDashboard";
import SupplyBox from "./SupplySupply";
import WithdrawBox from "./SupplyWithdraw";
import ModalContext from "../../util/modalContext";
import Modal from "./Modal";
import logoImg from "../../assets/BrandingAssets-main/Brand/Icon.png";

export default function ModalSupply() {
	const [displayState, setDisplayState] = useState("supply");

	const modalCtx = useContext(ModalContext);

	function handleSupplyDisplay() {
		setDisplayState("supply");
	}

	function handleWithdrawDisplay() {
		setDisplayState("withdraw");
	}

	function handleHideSupply() {
		modalCtx.hideModal();
	}

	return (
		<Modal
			open={modalCtx.modal === "supply"}
			onClose={modalCtx.modal === "supply" ? handleHideSupply : null}
		>
			<div className="popup-markets-container show">
				<div className="asset-info">
					<img src={logoImg} alt="" />
					<h4>{modalCtx.title}</h4>
				</div>
				<div className="popup-options supply-popup supply-active active">
					<div className="options-buttons supply-options">
						<button onClick={handleSupplyDisplay}>Supply</button>
						<button onClick={handleWithdrawDisplay}>Withdraw</button>
					</div>
					<div className="popup-info-container">
						<div className="main-info-container">
							<ModalDashboard bal={10.0} coinType="USDC" max={true} />
						</div>
					</div>
					{displayState === "supply" && <SupplyBox />}
					{displayState === "withdraw" && <WithdrawBox />}
				</div>
			</div>
		</Modal>
	);
}
