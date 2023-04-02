import { ethers } from "ethers";
import { Game } from "../components/Game";
import Web3Modal from "web3modal";
import { HideAndSeek__factory } from "../types/abis";
const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // HideAndSeekコントラクトのアドレスを設定してください
import { useAppProvider } from '../context/AppContext';

export default function Home() {
  const [state, setState] = useAppProvider();

  const handleConnectWallet = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const hideAndSeek = HideAndSeek__factory.connect(CONTRACT_ADDRESS, provider);
    setState({
      ...state,
      provider,
      hideAndSeek,
      signer,
      address,
    })
  };

  const handlePlay = async () => {
    if (!state.provider || !state.signer || !state.hideAndSeek) {
      alert("Please connect your wallet first");
      return;
    }
    try {
      // joinGame()
      const tx = await state.hideAndSeek.connect(state.signer).joinGame();
      await tx.wait();

      alert("You have successfully joined the game");
    } catch (error) {
      console.error("Error joining the game:", error);
    }
  };

  return <Game onConnectWallet={handleConnectWallet} onPlay={handlePlay} />;
}
