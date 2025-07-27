import { useEffect, useState } from "react";
import useContracts from "../hooks/useContracts";
import { ethers } from "ethers";

const Stake = ({ provider }) => {
  const { staking } = useContracts(provider);
  const [amount, setAmount] = useState("");
  const [reward, setReward] = useState("0");

  const stakeTokens = async () => {
    const signer = provider.getSigner();
    const contractWithSigner = staking.connect(signer);
    const tx = await contractWithSigner.stake(ethers.utils.parseEther(amount));
    await tx.wait();
    alert("Staked successfully");
  };

  const unstakeTokens = async () => {
    const signer = provider.getSigner();
    const contractWithSigner = staking.connect(signer);
    const tx = await contractWithSigner.unstake();
    await tx.wait();
    alert("Unstaked successfully");
  };

  const fetchRewards = async () => {
    const signer = provider.getSigner();
    const user = await signer.getAddress();
    const rew = await staking.calculateRewards(user);
    setReward(ethers.utils.formatEther(rew));
  };

  useEffect(() => {
    if (provider) fetchRewards();
  }, [provider]);

  return (
    <div>
      <h2>Stake BTC</h2>
      <input
        type="number"
        placeholder="Amount to stake"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={stakeTokens}>Stake</button>
      <button onClick={unstakeTokens}>Unstake</button>
      <p>Estimated Rewards: {reward} BTC</p>
    </div>
  );
};

export default Stake;
