import { useContext } from "react";
import Logo from "../../assets/BrandingAssets-main/Brand/Logo.svg";
import "./header.css";
import { NavLink } from "react-router-dom";
import ModalContext from "../../util/modalContext";

export default function Header() {
	const modalCtx = useContext(ModalContext);

	function handleConnectWalletModal() {
		modalCtx.showConnectWallet();
	}
	return (
		<>
			<header>
				<img className="logo" src={Logo} alt="sirio" />
				<nav>
					<button>
						<NavLink to="/app">Dashboard</NavLink>
					</button>
					<button>
						<NavLink to="markets">Markets</NavLink>
					</button>
					<button>
						<NavLink to="vote">Vote</NavLink>
					</button>
				</nav>

				<div className="button">
					<button
						className="primary-btn"
						onClick={handleConnectWalletModal}
					>
						Connect Wallet
					</button>
				</div>
			</header>
		</>
	);
}
