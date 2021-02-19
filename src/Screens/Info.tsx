import React, { useState } from "react";
import "../Styles/infoScreen.scss";
import { ReactComponent as InfoIcon } from "../Media/info.svg";

function Info() {
  const [clicked, setClicked] = useState(false);
  return clicked ? (
    <div className="info-window">
      <h1>Note su questo portfolio</h1>
      <p>
        Non ho utilizzato nessuna librerio o pacchetto extra, eccezion fatta per
        React e SASS.
      </p>
      <p>
        Laddove ho imitato design o configurazioni di animazioni esistenti
        altrove, questo non è stato intenzionale. Ho costruito questa
        presentazione di mio pugno.
      </p>
    </div>
  ) : (
    <div
      className="info-floater"
      onClick={() => {
        setClicked(true);
      }}
    >
      <InfoIcon />
    </div>
  );
}

export default Info;
