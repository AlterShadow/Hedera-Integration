import iconImg from "../../assets/BrandingAssets-main/Brand/Icon.png";
import MarketListItem from "./MarketStatusContainerListItem";
import MarketStatusContainer from "../MarketStatusContainer/MarketStatusContainer";
import MarketStatus from "../MarketStatus/MarketStatus";
import "./dashboardMarkets.css";

export default function DashBoardMarkets() {
	return (
		<MarketStatus>
			<MarketStatusContainer title="Supply Markets">
				<MarketListItem
					title="WBTC"
					img={iconImg}
					apy={1}
					amount={0}
					collateral={true}
				/>
				<MarketListItem
					title="BTC"
					img={iconImg}
					apy={2}
					amount={100}
					collateral={true}
				/>
			</MarketStatusContainer>

			<MarketStatusContainer title="Borrow Markets">
				<MarketListItem
					title="WBTC"
					img={iconImg}
					apy={1}
					amount={0}
					availableBorrow={10}
				/>
				<MarketListItem
					title="BTC"
					img={iconImg}
					apy={2}
					amount={100}
					availableBorrow={50}
				/>
			</MarketStatusContainer>
		</MarketStatus>
	);
}
