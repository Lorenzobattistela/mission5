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
            <div className="p-2" key={sig}>
              <div className="my-3">
                <p className="text">
                  Message: {sig.message}
                </p>
                <p className="text" >Signer: {sig.address}</p>
                <p className="text" >Signature ID: {sig.signature}</p>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}
