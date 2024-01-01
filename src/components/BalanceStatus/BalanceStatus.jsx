import "./balanceStatus.css";

export default function BalanceStatus() {
	return (
		<div className="balance-status">
			<div className="balance-container">
				<div className="supply-blc-container">
					<p>Supply Balance</p>
					<p className="balance">$0</p>
				</div>
				<div className="collateral-blc-container">
					<p>Collateral Balance</p>
					<p className="balance">$0</p>
				</div>
				<div className="borrow-blc-container">
					<p>Borrow Balance</p>
					<p className="balance">$0</p>
				</div>
			</div>
			<div className="balance-line">
				<p>Borrow Limit : 20%</p>
				<div className="line"></div>
			</div>
		</div>
	);
}
