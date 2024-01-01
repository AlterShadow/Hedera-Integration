import { useContext, useState } from "react";
import ModalDashboard from "./ModalDashboard";
import ModalListItem from "./ModalListItem";
import BorrowBox from "./BorrowBorrow";
import RepayBox from "./BorrowRepay";
import Modal from "./Modal";

import logoImg from "../../assets/BrandingAssets-main/Brand/Icon.png";
import ModalContext from "../../util/modalContext";

export default function ModalBorrow() {
	const [displayState, setDisplayState] = useState("borrow");

	const modalCtx = useContext(ModalContext);

	function handleBorrowDisplay() {
		setDisplayState("borrow");
	}

	function handleRepayDisplay() {
		setDisplayState("repay");
	}

	function handleHideBorrow() {
		modalCtx.hideModal();
	}

	return (
		<Modal
			open={modalCtx.modal === "borrow"}
			onClose={modalCtx.modal === "borrow" ? handleHideBorrow : null}
		>
			<div className="popup-markets-container show">
				<div className="asset-info">
					<img src={logoImg} alt="" />
					<h4>{modalCtx.title}</h4>
				</div>
				<div className="popup-options borrow-popup borrow-active active">
					<div className="options-buttons supply-options">
						<button onClick={handleBorrowDisplay}>Borrow</button>
						<button onClick={handleRepayDisplay}>Repay</button>
					</div>
					<div className="popup-info-container">
						<div className="main-info-container">
							<ModalDashboard
								bal={10.0}
								coinType="USDC"
								max={false}
							/>
							<div className="all-info">
								<ModalListItem title="Supply APY" value="1.80%" />
								<ModalListItem title="Supply Balance" value="$10" />
								<ModalListItem title="Borrow Limit" value="$43" />
								<ModalListItem title="Borrow Usage" value="$0" />
							</div>
						</div>
					</div>
					{displayState === "borrow" && <BorrowBox />}
					{displayState === "repay" && <RepayBox />}
				</div>
			</div>
		</Modal>
	);
}
