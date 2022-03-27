import { useState, useRef } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import "../App.css";

const signMessage = async ({ setError, message }) => {
  try {
    console.log({ message });
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    return {
      message,
      signature,
      address
    };
  } catch (err) {
    setError(err.message);
  }
};

export default function SignMessage() {
  const resultBox = useRef();
  const [signatures, setSignatures] = useState([]);
  const [error, setError] = useState();

  const handleSign = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    const sig = await signMessage({
      setError,
      message: "Experimento MELK"
    });
    if (sig) {
      setSignatures([...signatures, sig]);
    }
  };

  return (
    <form className="form" onSubmit={handleSign}>
      <div>
        <footer>
          <button
            type="submit" className="sign-button"
          >
            Sign message
          </button>
          <ErrorMessage message={error} />
        </footer>
        {signatures.map((sig, idx) => {
          return (
            <div className="modal" itemID="myModal">
                <div className="modal-content">
                    <p className="modal-text">
                      Mensagem:  <strong>{sig.message}</strong>
                    </p>
                    <p className="modal-text" >Endereço assinante:  <strong>{sig.address}</strong></p>
                    <p className="modal-text" >ID da assinatura:  <strong>{sig.signature}</strong></p>
                    <p className="modal-text">Para receber sua recompensa da missão 5, envie o ID da assinatura no canal do discord!</p>
                </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}
