import { useState } from "react";
import Input from "./components/input";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const passwordSize = showInput ? customSize : 8

  function generate() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      result += characters[position];
    }
    setPassword(result);
    setCopyText("Copiar");
  }
  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <>
      <div className="app">
        <h1>Gerador de senhas</h1>
        <div>
          <label htmlFor="showInput">Customizar o tamanho:</label>
          <input
            type="checkbox"
            id="showInput"
            value={showInput}
            onChange={() => setShowInput((currentState) => !currentState)}
          />
        </div>
        {showInput ? (
          <div>
            <label htmlFor="passwordSize">Tamanho:</label>
            <Input
              passwordSize={customSize}
              setPasswordSize={setCustomSize}
            />
          </div>
        ) : null}
        <button onClick={generate}>
          Gerar senha de {passwordSize} caracteres!
        </button>
        <button onClick={copyToClipboard}>{copyText}</button>
        <div>{password}</div>
      </div>
    </>
  );
}

export default App;
