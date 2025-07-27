import { ethers } from "ethers";
import JOTStaking from "../abis/JOTStaking.json";
import JOTSwap from "../abis/JOTSwap.json";

const useContracts = (provider) => {
  const stakingAddress = "DEPLOYED_STAKING_ADDRESS";
  const swapAddress = "DEPLOYED_SWAP_ADDRESS";

  const staking = new ethers.Contract(stakingAddress, JOTStaking.abi, provider);
  const swap = new ethers.Contract(swapAddress, JOTSwap.abi, provider);

  return { staking, swap };
};

export default useContracts;
