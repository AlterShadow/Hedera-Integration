import React from "react";
import "./appPageMain.css";

const appPageMain = (props) => {
	return (
		<div className="body-container">
			<header>
				<div className="logo">
					<img
						src="./BrandingAssets-main/Brand/Logo.svg"
						alt="Sirio"
					/>
				</div>
				<nav>
					<button id="dashboard-btn">Dashboard</button>
					<button id="markets-btn">Markets</button>
					<button id="vote-btn">Vote</button>
				</nav>
				<div className="button">
					<button id="connect-wallet-btn" className="primary-btn">
						Connect Wallet
					</button>
				</div>
			</header>
			<div className="content-container dashboard-container active-page">
				<div className="center-net-status">
					<div className="center-circle">
						<p>Net Apy</p>
						<p className="net-value" id="net-value">
							---
						</p>
					</div>
				</div>
				<div className="balance-status">
					<div className="balance-container">
						<div className="supply-blc-container">
							<p>Supply Balance</p>
							<p id="supply-blc" className="balance">
								$0
							</p>
						</div>
						<div className="collateral-blc-container">
							<p>Collateral Balance</p>
							<p id="collateral-blc" className="balance">
								$0
							</p>
						</div>
						<div className="borrow-blc-container">
							<p>Borrow Balance</p>
							<p id="borrow-blc" className="balance">
								$0
							</p>
						</div>
					</div>
					<div className="balance-line">
						<p>Borrow Limit : 20%</p>
						<div className="line"></div>
					</div>
				</div>
				<div className="markets-status">
					<div className="markets-container">
						<div className="supply-market-container markets">
							<h3 className="table-title">Supply Markets</h3>
							<div className="market-table supply-table">
								<div className="table-header">
									<div className="row header">
										<div className="cell asset-cell">Asset</div>
										<div className="cell">Supply APY</div>
										<div className="cell">Wallet</div>
										<div className="cell">Collateral</div>
									</div>
								</div>
								<div className="table-data">
									<div className="row table-data-row supply-market-row">
										<div className="cell asset-cell">
											<img
												src="./BrandingAssets-main/Brand/Icon.png"
												alt=""
											/>
											WBTC
										</div>
										<div className="cell">1%</div>
										<div className="cell">0</div>
										<div className="cell">
											<button id="collateral-btn">
												<div
													className="button"
													id="collateral-icon"
												></div>
											</button>
										</div>
									</div>
									<div className="row table-data-row supply-market-row">
										<div className="cell asset-cell">
											<img
												src="./BrandingAssets-main/Brand/Icon.png"
												alt=""
											/>
											WBTC
										</div>
										<div className="cell">1%</div>
										<div className="cell">0</div>
										<div className="cell">
											<button id="collateral-btn">
												<div
													className="button"
													id="collateral-icon"
												></div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="borrow-market-container markets">
							<h3 className="table-title">Borrow Markets</h3>
							<div className="market-table borrow-table">
								<div className="table-header">
									<div className="row header">
										<div className="cell asset-cell">Asset</div>
										<div className="cell">Borrow APY</div>
										<div className="cell">Total Borrow</div>
										<div className="cell available">
											Available Borrow
										</div>
									</div>
								</div>
								<div className="table-data">
									<div className="row table-data-row borrow-market-row">
										<div className="cell asset-cell">
											<img
												src="./BrandingAssets-main/Brand/Icon.png"
												alt=""
											/>
											WBTC
										</div>
										<div className="cell">1%</div>
										<div className="cell">0</div>
										<div className="cell available">0</div>
									</div>
									<div className="row table-data-row borrow-market-row">
										<div className="cell asset-cell">
											<img
												src="./BrandingAssets-main/Brand/Icon.png"
												alt=""
											/>
											WBTC
										</div>
										<div className="cell">1%</div>
										<div className="cell">0</div>
										<div className="cell available">0</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content-container status-container">
				<div className="markets-inner-container">
					<div className="search-container">
						<h2>Individual Stats</h2>
						<div className="search">
							<input
								type="text"
								className="search-input"
								id="search-input"
								placeholder="Search for and address"
							/>
							<button id="search-btn" className="primary-btn">
								Search
							</button>
						</div>
					</div>
					<div className="global-stats-container">
						<h2>Global Market Stats</h2>
						<div className="stats">
							<div className="stats-container">
								<div className="market-size-container">
									<p>Total Market Size</p>
									<p id="market-size" className="balance">
										$0
									</p>
								</div>
								<div className="total-available-container">
									<p>Total Available</p>
									<p id="total-available" className="balance">
										$0
									</p>
								</div>
								<div className="total-borrows-container">
									<p>Total Borrows</p>
									<p id="total-borrows" className="balance">
										$0
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="market-info-container">
						<div className="market-info">
							<div className="asset-title-container">
								<p className="asset-title">Asset</p>
								<p className="asset-data" id="asset-name">
									<img
										src="./BrandingAssets-main/Brand/Icon.png"
										alt=""
									/>
									WBTC
								</p>
							</div>
							<div className="asset-all-info">
								<div className="asset-info-flex">
									<div className="asset-info">
										<p className="asset-title">Total Supplied</p>
										<p className="asset-data">$0</p>
									</div>
									<div className="asset-info">
										<p className="asset-title">Supply APY</p>
										<p className="asset-data">0%</p>
									</div>
									<div className="asset-info">
										<p className="asset-title">Total Borrowed</p>
										<p className="asset-data">$0</p>
									</div>
									<div className="asset-info">
										<p className="asset-title">Borrow APY</p>
										<p className="asset-data">0%</p>
									</div>
								</div>
								<div className="asset-info-flex">
									<div className="asset-info">
										<p className="asset-title">Max LTV</p>
										<p className="asset-data">0%</p>
									</div>
									<div className="asset-info">
										<p className="asset-title">
											Liquidation Thresold
										</p>
										<p className="asset-data">0%</p>
									</div>
									<div className="asset-info">
										<p className="asset-title">Liquidation Penaly</p>
										<p className="asset-data">0%</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content-container vote-container"></div>

			<div className="content-container liquidations-container">
				<div className="liquidation-inner-container">
					<h3 className="liquidation-header">Liquidations Manager</h3>
					<div className="liquidations-info-container">
						<div className="liquidation-info">
							<div className="img-container">
								<img
									src="./BrandingAssets-main/Brand/Icon.png"
									alt="Asset Logo"
								/>
							</div>
							<div className="input-whole-container">
								<input
									type="text"
									id="liquidation-amt"
									placeholder="Input Amount"
								/>
								<div className="amt-info">
									LIQUIDABLE AMOUNT <br />
									~0.0
								</div>
							</div>
							<button className="primary-btn" id="liquidate-btn">
								Liquidate
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="popup-container">
				<button id="popup-close-button" className="close-button">
					<img
						src="./BrandingAssets-main/Icons/close-icon.png"
						alt="x"
					/>
				</button>
				<div className="popup-markets-container">
					<div className="asset-info">
						<img src="./BrandingAssets-main/Brand/Icon.png" alt="" />
						<h4 id="popup-asset-name">WBTC</h4>
					</div>
					<div className="popup-options supply-popup supply-active">
						<div className="options-buttons supply-options">
							<button id="supply-option">Supply</button>
							<button id="withdraw-option">Withdraw</button>
						</div>
						<div className="popup-info-container">
							<div className="main-info-container">
								<div className="info-dashboard-section">
									<h2 className="dashboard-main-balance">0.0</h2>
									<div className="dashboard-mini-info">
										<p className="max">
											<button id="max-btn">Max</button>
										</p>
										<p>USDC</p>
										<p className="mini-info-balance">~$0.0</p>
									</div>
								</div>
								<div className="all-info">
									<div className="info">
										<p>Supply APY</p>
										<p id="popup-supply-apy">1.80%</p>
									</div>
									<div className="info">
										<p>Supply Balance</p>
										<p id="popup-supply-balance">$0</p>
									</div>
									<div className="info">
										<p>Borrow Limit</p>
										<p id="popup-supply-limit">$0</p>
									</div>
									<div className="info">
										<p className="usage">Borrow Usage</p>
										<p className="available">
											Borrow Limit Used &#8594;Available
										</p>
										<p id="popup-supply-usage">$0</p>
									</div>
								</div>
							</div>
						</div>
						<div className="buttons-container">
							<div className="supply-buttons">
								<button id="approve-btn" className="primary-btn">
									1. Approve
								</button>
								<button id="supply-btn" className="primary-btn">
									2. Supply
								</button>
							</div>
							<div className="withdraw-buttons">
								<button id="withdraw-btn" className="primary-btn">
									Withdraw
								</button>
							</div>
						</div>
					</div>
					<div className="popup-options borrow-popup borrow-active">
						<div className="options-buttons supply-options">
							<button id="borrow-option">Borrow</button>
							<button id="repay-option">Repay</button>
						</div>
						<div className="popup-info-container">
							<div className="main-info-container">
								<div className="info-dashboard-section">
									<h2 className="dashboard-main-balance">0.0</h2>
									<div className="dashboard-mini-info">
										<p>USDC</p>
										<p id="mini-info-balance">~$0.0</p>
									</div>
								</div>
								<div className="all-info">
									<div className="info">
										<p>Borrow APY</p>
										<p id="popup-borrow-apy">1.80%</p>
									</div>
									<div className="info">
										<p>Borrow Balance</p>
										<p id="popup-borrow-balance">$0</p>
									</div>
									<div className="info">
										<p>Borrow Limit</p>
										<p id="popup-borrow-limit">$0</p>
									</div>
									<div className="info">
										<p className="usage">Borrow Usage</p>
										<p id="popup-borrow-usage">$0</p>
									</div>
								</div>
							</div>
						</div>
						<div className="buttons-container">
							<div className="borrow-buttons">
								<button id="borrow-btn" className="primary-btn">
									Borrow
								</button>
							</div>
							<div className="repay-buttons">
								<button id="approve-btn" className="primary-btn">
									1. Approve
								</button>
								<button id="repay-btn" className="primary-btn">
									2. Repay
								</button>
							</div>
						</div>
					</div>
					<div className="popup-options risk-popup">
						<div className="risk-circle">
							<p>&nbsp;75%</p>
						</div>
						<div className="risk-text">
							The probability shown above represents the likelihood of
							your loan being liquidated, as calculated by our model.
							This model has been trained with data from millions of
							loans and dozens of variables, including your collateral
							and its allocations, global market conditions, and more.
							If the probability exceeds 50%, we recommend reducing
							the amount of assets you have borrowed or increasing
							your collateral. Otherwise, you may be more susceptible
							to liquidation.
							<a href=""> Read the docs to know more. </a>
						</div>
						<div className="buttons-container">
							<div className="risk-buttons">
								<button
									id="risk-continue-btn"
									className="primary-btn"
								>
									Continue
								</button>
								<button id="risk-back-btn" className="primary-btn">
									Go Back
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="popup-wallet-container">
					<h3>Connect Wallet</h3>
					<div className="wallets-container">
						<button id="metamask-btn">
							<img
								src="./BrandingAssets-main/Icons/metamask.svg"
								alt=""
							/>
							<p>Metamask</p>
						</button>
						<button id="hashpack-btn">
							<img
								src="./BrandingAssets-main/Icons/hashpack.png"
								alt=""
							/>
							HashPack
						</button>
						<button id="blade-btn">
							<img
								src="./BrandingAssets-main/Icons/blade.png"
								alt=""
							/>
							Blade
						</button>
					</div>
				</div>
				<div className="popup-transaction-container">
					<div className="loading-container">
						<div className="loader"></div>
						<p>Waiting For Confirmation</p>
					</div>
					<div className="completed-container">
						<div className="successful-container">
							<p>&#9989;</p>
							<p>Transaction Completed Successfully.</p>
						</div>
						<div className="failed-container">
							<p>&#10060;</p>
							<p>Transaction Failed.</p>
						</div>
					</div>
				</div>
				<div className="popup-search-container">
					<div
						className="loading-container search-containers current"
						id="search-loading-container"
					>
						<div className="loader"></div>
						<p>Fetching Data. Please Wait.</p>
					</div>
					<div
						id="search-success-container"
						className="search-containers"
					>
						<h2 id="search-address">Address</h2>
						<div className="search-info">
							<div className="center-net-status">
								<div className="center-circle">
									<p>Net Apy</p>
									<p className="net-value" id="search-net-value">
										---
									</p>
								</div>
							</div>
							<div className="balance-status">
								<div className="balance-container">
									<div className="supply-blc-container">
										<p>Supply Balance</p>
										<p id="search-supply-blc" className="balance">
											$0
										</p>
									</div>
									<div className="collateral-blc-container">
										<p>Collateral Balance</p>
										<p id="search-collateral-blc" className="balance">
											$0
										</p>
									</div>
									<div className="borrow-blc-container">
										<p>Borrow Balance</p>
										<p id="search-borrow-blc" className="balance">
											$0
										</p>
									</div>
								</div>
								<div className="balance-line">
									<p>Borrow Limit : 20%</p>
									<div className="line"></div>
								</div>
							</div>
						</div>
					</div>
					<div
						id="search-fail-container"
						className="search-containers"
					>
						<h2>Address</h2>
						<p className="icon">&#10060;</p>
						<p>
							No address found. You submitted a wrong address or this
							address has no open positions on Sirio.
						</p>
						<button id="search-back" className="primary-btn">
							Go Back
						</button>
					</div>
				</div>
			</div>
			<footer>
				<div className="footer-content">
					<div className="logo-container">
						<img
							src="./BrandingAssets-main/Brand/LogoWhite.svg"
							alt="Sirio"
						/>
					</div>
					<div className="text-container">
						Developed with ❤️ by
						<a href="https://www.astrid.network/" target="_blank">
							Astrid Network
						</a>
					</div>
					<div className="footer-social">
						<a href="">
							<img
								src="./BrandingAssets-main/Icons/website_white.svg"
								alt="Website"
							/>{" "}
						</a>
						<a href="">
							<img
								src="./BrandingAssets-main/Icons/docs_white.svg"
								alt="Docs"
							/>
						</a>
						<a href="">
							<img
								src="./BrandingAssets-main/Icons/twitter_white.svg"
								alt="Twitter"
							/>
						</a>
						<a href="">
							<img
								src="./BrandingAssets-main/Icons/telegram_white.svg"
								alt="Telegram"
							/>
						</a>
						<a href="">
							<img
								src="./BrandingAssets-main/Icons/discord_white.svg"
								alt="Discord"
							/>
						</a>
						<a href="">
							<img
								src="./BrandingAssets-main/Icons/github_white.svg"
								alt="Github"
							/>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default appPageMain;
