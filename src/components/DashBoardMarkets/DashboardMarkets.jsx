import iconImg from "../../assets/BrandingAssets-main/Brand/Icon.png";
import MarketListItem from "./MarketStatusContainerListItem";
import MarketStatusContainer from "../MarketStatusContainer/MarketStatusContainer";
import MarketStatus from "../MarketStatus/MarketStatus";
import { useWalletInterface } from "../../services/wallets/useWalletInterface";
import { ethers } from "ethers";
import { useEffect } from "react";

import MarketPositionABI from "../../abi/MarketPositionManager.json";
import SFProtocolABI from "../../abi/SFProtocolToken.json";

import "./dashboardMarkets.css";

export default function DashBoardMarkets() {
  const { accountId } = useWalletInterface();
  useEffect(() => {
    const func = async () => {
      if (accountId && accountId.length !== 0) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(accountId);
        const MarketManagerContract = new ethers.Contract(
          "0xe0990E4699C606e79d074A770D4A8a603a4669C2",
          MarketPositionABI,
          signer
        );
        const ProtocolContract = new ethers.Contract(
          "0x0800E04533Afc1279c55c85734d49a2f61785539",
          SFProtocolABI,
          signer
        );
        console.log("Marketing:", MarketManagerContract);
        console.log("Protocol:", ProtocolContract);
      }
    };
    func();
  }, [accountId]);

  return (
    <MarketStatus>
      <MarketStatusContainer title="Supply Markets">
        <MarketListItem
          title="WETH"
          img={iconImg}
          apy={1}
          amount={0}
          collateral={true}
        />
        <MarketListItem
          title="USDC"
          img={iconImg}
          apy={2}
          amount={100}
          collateral={true}
        />
      </MarketStatusContainer>

      <MarketStatusContainer title="Borrow Markets">
        <MarketListItem
          title="WETH"
          img={iconImg}
          apy={1}
          amount={0}
          availableBorrow={10}
        />
        <MarketListItem
          title="USDC"
          img={iconImg}
          apy={2}
          amount={100}
          availableBorrow={50}
        />
      </MarketStatusContainer>
    </MarketStatus>
  );
}
