import { useState } from "react";
import { ethers } from "ethers";

const ConnectWallet = ({ setProvider }) => {
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAddress(account);
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>{address ? address : "Connect Wallet"}</button>
    </div>
  );
};

export default ConnectWallet;
