import React, { useEffect, useState } from "react";
import "../Styles/infoScreen.scss";
import { ReactComponent as InfoIcon } from "../Media/info.svg";
import { ReactComponent as Exit } from "../Media/exit.svg";

interface Props {
  exitRef: React.RefObject<HTMLDivElement>;
}

function Info(props: Props) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (!clicked) return;
    const func = (e: any) => {
      const elem = document.getElementById("info-window");
      if (!elem?.contains(e.target)) handleClick(false);
    };
    window.addEventListener("click", func);
    return () => {
      window.removeEventListener("click", func);
    };
  });
  const handleClick = (opening: boolean) => {
    if (opening) {
      props.exitRef.current?.classList.add("blurred");
      setClicked(true);
    } else {
      props.exitRef.current?.classList.remove("blurred");
      setClicked(false);
    }
  };
  return clicked ? (
    <div className="info-window" id="info-window">
      <div
        className="exit-floater"
        onClick={() => {
          handleClick(false);
        }}
      >
        <Exit />
      </div>
      <h1>Note su questo portfolio</h1>
      <p>
        Non ho utilizzato nessuna librerio o pacchetto esterno, eccezion fatta
        per React, Webpack e SASS.
      </p>
      <p>
        Laddove ho imitato design o configurazioni di animazioni esistenti
        altrove, questo non è stato intenzionale. Ho costruito questa
        presentazione di mio pugno.
      </p>
      <p>
        Il codice sorgente di questo portfolio è disponibile a{" "}
        <a href="https://github.com/waron97/portfolio">questa pagina Github</a>.
      </p>
    </div>
  ) : (
    <div
      className="info-floater"
      onClick={() => {
        handleClick(true);
      }}
    >
      <InfoIcon />
    </div>
  );
}

export default Info;
