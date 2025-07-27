import { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import Stake from "./pages/Stake";
import Swap from "./pages/Swap";
import CEXDashboard from "./pages/CEXDashboard";

function App() {
  const [provider, setProvider] = useState(null);

  return (
    <div>
      <h1>🟦🧡 JOTRADES </h1>
      <ConnectWallet setProvider={setProvider} />

      {provider && (
        <div>
          <hr />
          <Stake provider={provider} />
          <hr />
          <Swap provider={provider} />
          <hr />
          <CEXDashboard />
        </div>
      )}
    </div>
  );
}

export default App;
