import { useState } from "react";
import { motion } from "framer-motion";

export default function AddTeaAssamNetwork() {
  const [added, setAdded] = useState(false);

  const addNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x16cf8", // 93384 in hex
              chainName: "tea-assam",
              nativeCurrency: {
                name: "$TEA",
                symbol: "$TEA",
                decimals: 18,
              },
              rpcUrls: ["https://assam-rpc.tea.xyz"],
              blockExplorerUrls: ["https://assam.tea.xyz"],
            },
          ],
        });
        setAdded(true);
      } catch (error) {
        console.error("Error adding network:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-900 text-green-400 text-center">
      <img 
        src="https://cdn.prod.website-files.com/650d0534262efafa72b3ccab/653fae09ad95abddab796cca_logo.svg" 
        alt="Tea Assam Logo" 
        className="w-92 mb-4"
      />
      <div className="p-6 rounded-xl shadow-lg w-full max-w-sm bg-gray-800">
        <h2 className="text-xl font-bold">Add Tea-Assam Network</h2>
        <p className="text-gray-400 text-sm mt-2">Easily add Tea-Assam to MetaMask.</p>
        <button
          onClick={addNetwork}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
        >
          {added ? "Added!" : "Add to MetaMask"}
        </button>
        <a
          href="https://tetsuo.conduit.xyz/bridge/redirect?slug=tea-assam-fo46m5b966"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-green-500 hover:underline"
        >
          Bridge to Tea-Assam
        </a>
        {added && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 p-4 bg-green-700 text-white rounded-lg"
          >
            Network added successfully!
          </motion.div>
        )}
      </div>
      <p className="mt-6 text-gray-500 text-sm">
        Built with ❤️ by <a href="https://x.com/RohitOnChain" className="text-green-400 hover:underline">Rohit</a>
      </p>
    </div>
  );
}
