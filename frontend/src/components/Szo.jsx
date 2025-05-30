import { useState } from "react";

export const Szo = ({ szo, setPontok }) => {
  const [valasz, setValasz] = useState("");
  const [gepelt, setGepelt] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handlePontAdas = (e) => {
    if (e.target.value == szo.magyar) {
      setDisabled(true);
      setPontok((elozo) => ({ ...elozo, min: ++elozo.min }));
    }
  };

  return (
    <div className="szo">
      <div>{szo.angol}</div>
      <div>
        <input
          disabled={disabled}
          type="text"
          value={valasz}
          onChange={(e) => {
            setValasz(e.target.value);
            handlePontAdas(e);
            setGepelt(true);
          }}
        />
      </div>
      {gepelt ? <div>{valasz == szo.magyar ? "✅" : "❌"}</div> : <div>❔</div>}
    </div>
  );
};
