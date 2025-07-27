import { useState } from "react";
import useContracts from "../hooks/useContracts";
import { ethers } from "ethers";

const Swap = ({ provider }) => {
  const { swap } = useContracts(provider);
  const [amount, setAmount] = useState("");

  const handleSwap = async () => {
    const signer = provider.getSigner();
    const contractWithSigner = swap.connect(signer);
    const tx = await contractWithSigner.swap(ethers.utils.parseEther(amount));
    await tx.wait();
    alert("Swap complete");
  };

  return (
    <div>
      <h2>Swap BTC to Supported Tokens</h2>
      <input
        type="number"
        placeholder="Amount in BTC"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
};

export default Swap;
