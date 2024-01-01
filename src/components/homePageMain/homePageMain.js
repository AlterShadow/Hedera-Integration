import React from "react";
import "./homePageMain.css";
import { NavLink } from "react-router-dom";
const homePageMain = (props) => {
	return (
		<div className="whole-container">
			<div className="container">
				<div
					className="first-container inner-container"
					id="0-container"
				>
					<div className="navbar">
						<div className="logo">
							<img
								src="./BrandingAssets-main/Brand/Logo.svg"
								alt="SIRIO"
							/>
						</div>
						<div className="links">
							<div className="social-links">
								<a
									target="_blank"
									href=" https://equilibria-finances-organization.gitbook.io/equilibria-documentation/"
									className="docs-link"
								>
									<img
										src="./landing-files/Logo&Icons/docs.svg"
										alt="Docs"
									/>
								</a>
								<a
									target="_blank"
									href="https://twitter.com/astrid_net"
								>
									<img
										src="./landing-files/Logo&Icons/twitter_icon.svg"
										alt="Twitter"
									/>
								</a>
								<a
									target="_blank"
									href="https://github.com/equilibria-finance"
								>
									<img
										src="./landing-files/Logo&Icons/github_icon.svg"
										alt="Github"
									/>
								</a>
								<a
									target="_blank"
									href="https://discord.com/users/809888220182741022
                    "
								>
									<img
										src="./landing-files/Logo&Icons/discord_icon.svg"
										alt="Discord"
									/>
								</a>
								<a target="_blank">
									<img
										src="./landing-files/Logo&Icons/telegram_icon.svg"
										alt="Telegram"
									/>
								</a>
							</div>
						</div>
						<div className="hamburger" id="hamburger">
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>
					<div className="content-container">
						<div className="main-content">
							<div className="text-container">
								<div className="heading-container">
									<h1 className="heading">
										Effortless
										<span className="primary-col-text">
											loans.
											<br />{" "}
										</span>
										Superior
										<span className="primary-col-text"> UX. </span>
										<br />
										AI Driven
										<span className="primary-col-text">safety.</span>
									</h1>
								</div>
								<div className="info-container">
									<p className="info">
										Sirio represents the first lending protocol built
										on Hedera. It is designed to ensure an
										unparalleled user experience by leveraging
										Hedera’s speed and scalability. Additionally, it
										incorporates a machine learning algorithm as a
										mechanism to decrease liquidation events.
									</p>
									<button>
										<NavLink to="/app">Launch dApp</NavLink>
									</button>
								</div>
							</div>
							<div className="image-container">
								<img
									src="./landing-files/Images/MainImg.png"
									alt="Main Image"
								/>
							</div>
						</div>
					</div>
					<div className="show-more">
						<p id="show-more-btn">Show More &nbsp; &#8595;</p>
					</div>
				</div>
				<div
					className="second-container inner-container"
					id="1-container"
				>
					<div className="content-container">
						<div className="main-content">
							<div className="text-container">
								<div className="heading-container">
									<h1 className="heading">
										Lend your assets <br />
										on fastest chain.
									</h1>
								</div>
								<div className="info-container">
									<p className="info">
										The Hedera blockchain offers a seamless and secure
										experience, due to its innovative Hashgraph
										Consensus Algorithm. This system employs a method
										that significantly boosts transaction efficiency
										and security. Key features such as Asynchronous
										Byzantine Fault Tolerance, Gossip about Gossip,
										and Virtual Voting facilitate rapid consensus,
										creating a platform that is fast, scalable, and
										secure. These elements work together to ensure an
										optimal environment for users to engage in lending
										or borrowing assets on Sirio.
									</p>
								</div>
							</div>
							<div className="image-container">
								<img
									src="./landing-files/Images/Third.png"
									alt="Image"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					className="third-container inner-container"
					id="2-container"
				>
					<div className="content-container">
						<div className="main-content">
							<div className="image-container">
								<img
									src="./landing-files/Images/Second.png"
									alt="Image"
								/>
							</div>
							<div className="text-container">
								<div className="heading-container">
									<h1 className="heading">
										Minimize liquidations <br />
										with usage of AI.
									</h1>
								</div>
								<div className="info-container">
									<p className="info">
										The Sirio team has worked on developing a
										permissionless and arbitrary Machine Learning
										algorithm. We have gathered data on millions of
										loans and considered over 20 features related to
										market conditions, liquidity, volatility, and much
										more, training the model with any crucial
										condition. Its output is the probability that a
										given loan will be liquidated, warning the user
										and making them aware of the risk associated with
										their loan before it is made.
									</p>
									<a
										style={{ color: "white", textDecoration: "none" }}
										href="https://equilibria-finances-organization.gitbook.io/equilibria-documentation/"
									>
										<button>Whitepaper</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="fourth-container inner-container"
					id="3-container"
				>
					<div className="content-container">
						<div className="main-content">
							<div className="mobile-screen-container">
								<div className="title-container">
									<h1 className="heading">
										Sustainable and effective Roadmap.
									</h1>
								</div>
								<div className="desc-text">
									We have planned the Equilibria roadmap to ensure
									technically and timely sustainable development. By
									Q1 2025, we expect to release Equilibria in its
									final form, unlocking its full potential. Please
									find below the roadmap for your reference.
								</div>
								<div className="panel-button">
									<button id="popup-btn">See full Roadmap</button>
								</div>
							</div>
							<div className="popup-container">
								<div className="popup-button-container">
									<button id="popup-close-btn">&leftarrow;</button>
								</div>
								<div className="timeline">
									<div className="timeline-title">
										Sustainable and effective Roadmap.
									</div>
									<div className="outer">
										<div className="card">
											<div className="info">
												<h3 className="title">
													dApp Release - Q1 2024.
												</h3>
												<p>
													Sirio is set to launch in the first quarter
													of 2024. Upon its debut, you will instantly
													have the ability to lend and borrow your
													favorite tokens on the Hedera chain.
													Additionally, the platform offers the
													capability to track comprehensive market
													data as well as detailed information on
													individual user loans. This feature enhances
													your experience on the platform by providing
													greater transparency and a more informed
													user interface.
												</p>
											</div>
										</div>
										<div className="card">
											<div className="info">
												<h3 className="title">
													ML Model Release - Q2 2024.
												</h3>
												<p>
													In the second quarter of 2024, we will
													release the first version of our Machine
													Learning model for Risk Management. This
													version, trained with one-time data, will be
													available for USDC token loans using USDC,
													WBTC, and WETH as collateral. The model's
													output will be a warning about the
													probability of a user's liquidation,
													allowing them to make an informed,
													arbitrary, and permissionless decision to
													reduce the amount of borrowed tokens.
												</p>
											</div>
										</div>
										<div className="card">
											<div className="info">
												<h3 className="title">
													Token & Governance - Q3 2024.
												</h3>
												<p>
													In the third quarter of 2024, we plan to
													release the platform's Native Token along
													with a Governance system. The token will
													offer numerous benefits on the platform,
													such as improved interest rates for both
													borrowers and suppliers. Additionally, it
													will represent voting power in the
													governance mechanism, which will involve all
													users in the future development of the
													platform.
												</p>
											</div>
										</div>
										<div className="card">
											<div className="info">
												<h3 className="title">
													Second Update RM ML Model - Q4 2024.
												</h3>
												<p>
													In the final quarter of 2024, an updated
													version of our Machine Learning Model,
													enhanced with more features and greater
													performance, will be released. This version
													will include pipelines, enabling it to
													autonomously extract, process, and train
													with data from the protocol. Moreover, the
													model will be available for all tokens on
													the platform, whether used for loans or as
													collateral. Additionally, an optimization
													algorithm will be introduced to suggest the
													optimal amount of tokens to borrow in
													relation to the associated risk.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="fifth-container inner-container"
					id="4-container"
				>
					<div className="fifth-content">
						<div className="text-container">
							<div className="heading-container">
								<h1 className="heading">Partners With The Best.</h1>
							</div>
						</div>
						<div className="image-container">
							<div>
								<img
									src="./landing-files/Logo&Icons/hedera-hbar-logo.png"
									alt="Hedera"
								/>
								<img
									src="./landing-files/Logo&Icons/zel-flux-logo.png"
									alt="Zel Flux"
								/>
							</div>
							<div>
								<img
									src="./landing-files/Logo&Icons/ocean.png"
									alt="Ocean"
								/>
								<img
									src="./landing-files/Logo&Icons/headstarter.png"
									alt="Head Starter"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="sixth-container inner-container"
				id="5-container"
			>
				<div className="content-container">
					<div className="main-content">
						<div className="text-container">
							<div className="heading-container">
								<h1 className="heading">
									See you on the other side.
								</h1>
							</div>
							<div className="whole-links-container">
								<div className="links-container">
									<a href="#">
										<img
											src="./landing-files/Logo&Icons/icons8-rocket.gif"
											alt="App"
										/>
									</a>
									<p>Launch App</p>
								</div>
								<div className="links-container">
									<div className="last-social-links">
										<a
											target="_blank"
											href="https://twitter.com/astrid_net
                    "
										>
											<img
												src="./BrandingAssets-main/Icons/twitter_black.svg"
												alt="Twitter"
											/>
										</a>
										<a target="_blank" href="#">
											<img
												src="./BrandingAssets-main/Icons/telegram_black.svg"
												alt="Telegram"
											/>
										</a>
										<a
											target="_blank"
											href="https://discord.com/users/809888220182741022
                    "
										>
											<img
												src="./BrandingAssets-main/Icons/discord_black.svg"
												alt="Discord"
											/>
										</a>
										<a
											target="_blank"
											href="https://github.com/equilibria-finance"
										>
											<img
												src="./BrandingAssets-main/Icons/github_black.svg"
												alt="Github"
											/>
										</a>
									</div>
									<p>Join our Community</p>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-container">
						<div className="footer-content">
							<div className="footer-text">
								<div className="logo-container">
									<img
										src="./BrandingAssets-main/Brand/LogoWhite.svg"
										alt="Sirio"
									/>
									<div className="footer-social">
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
								<div className="footer-links">
									<div className="first-column">
										<h4>Useful Links</h4>
										<a href="">App</a>
										<a href="">Documentation</a>
									</div>
									<div className="second-column">
										<h4>Brand Links</h4>
										<a href="">Brand Assets</a>
									</div>
								</div>
							</div>
							<div className="text-container">
								Developed with ❤️ by
								<a href="https://www.astrid.network/" target="_blank">
									Astrid Network
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default homePageMain;
