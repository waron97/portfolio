import { useContext, useEffect, useRef } from "react";
import { ReactComponent as Exit } from "../Media/exit.svg";
import { exiter } from "../Screens/Toolkit";

interface WindowProps {
  title: string;
  score: string;
  description: string;
}

function getColor(score: string) {
  const opacity = "0.8";
  switch (score) {
    case "6.5/10":
      return "w-65";
    //   return `rgba(185, 255, 0, ${opacity})`;
    case "7/10":
      return "w-70";
    //   return `rgba(124, 255, 0, ${opacity})`;
    case "8/10":
      return "w-75";
    //   return `rgba(89, 255, 0, ${opacity})`;
    case "8.5/10":
      return "w-80";
    //   return `rgba(58, 255, 0, ${opacity})`;
    case "9/10":
      return "w-85";
    //   return `rgba(12, 255, 0, ${opacity})`;
    case "9.5/10":
      return "w-90";
    //   return `rgba(7, 200, 0, ${opacity})`;
    default:
      return "w-70";
    //   return `rgba(58, 255, 0, ${opacity})`;
  }
}

function ToolWindow(props: WindowProps) {
  const ctx = useContext(exiter);
  const width = getColor(props.score);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lineRef.current?.classList.add(width);
  }, [lineRef, width]);

  return (
    <div className="tool-window">
      <div
        className="exit"
        onClick={() => {
          ctx();
        }}
      >
        <Exit />
      </div>
      <h2>
        {props.title}
        <p>{props.score}</p>
      </h2>
      <div
        style={{ backgroundColor: "orange" }}
        ref={lineRef}
        className="line"
      ></div>
      <p>{props.description}</p>
    </div>
  );
}

export const toolDescriptions = {
  fbdesc:
    "Firebase è la mia piattaforma preferenziale per lanciare progetti in tempi ristretti. Ho esperienza con auth, functions, firestore e hosting.",
  djdesc:
    "Django è il server che conosco meglio. L'ho utilizzato per lanciare i miei primi due progetti, compresi quelli ancora in utilizzo dal loro target.",
  pydesc:
    "Python è il primo linguaggio di programmazione che ho imparato, e di gran lunga quello che conosco di più. Ancora oggi è quello che uso quando il focus è la velocità di sviluppo.",
  fldesc:
    "Flask è la prima interfaccia server che ho utilizzato nella mia carriera di developer. Oggi lo utilizzo per scrivere API distaccati dal server dove risiede l'UI.",
  tsdesc:
    "TypeScript e JavaScript hanno preso il primo posto in termini di linguaggio che utilizzo di più. Questo stesso portfolio è scritto in TypeScript, supportato da React.",
  flutdesc:
    "Flutter è il mio framework preferenziale per sviluppare app mobile. La possibilità di esportare sia per Android che per iOS senza sacrificare performance lo rende, a mio avviso, un must da imparare meglio.",
  pgdesc:
    "PostgreSQL è il database che ho usato in assoluto di più per i miei progetti. eLT1, ad esempio, è supportato da PSQL sul backend.",
  gcdesc:
    "Ho sperimentato molto con Cloud Compute sulla piattaforma Google Cloud. Ho inoltre utilizzato Cloud SQL e Functions.",
  awsdesc:
    "AWS è la piattaforma che ospita la maggior parte dei miei progetti, compreso eLT1. Questi vengono eseguiti su istanze EC2, e utilizzo RDS per il database.",
  csdesc:
    "C# è il linguaggio che utilizzo quando ho bisogno di produrre un eseguibile da passare tra pc e sistemi operativi diversi. Mentre potrei decisamente conoscerlo meglio, con l'aiuto di Google generalmente si arriva al risultato.",
  gitdesc:
    "Git è l'esempio di sistema che mi piacerebbe conoscere meglio, ma le sue potenzialità non emergono quando c'è solo un developer al lavoro. Ciononostante il sistema di branching mi è stato utile per testare funzionalità senza compromettere il prodotto principale.",
  sassdesc:
    "Imparare SASS è stato uno dei migliori investimenti di tempo in termini di velocità di sviluppo. Ad esempio, il controllo granulare delle animazioni su questo portfolio avrebbe richiesto centinaia di righe di CSS in più senza SASS.",
  reactdesc:
    "React è la libreria che utilizzo virtualmente per ogni progetto sul web. Anche se non posso dichiararmi un esperto, ho scritto migliaia di righe di codice con React e Typescript.",
};

const Tools: { [key: string]: JSX.Element } = {
  firebase: (
    <ToolWindow
      title="Firebase"
      score="8/10"
      description={toolDescriptions.fbdesc}
    />
  ),
  aws: (
    <ToolWindow
      title="AWS"
      score="7/10"
      description={toolDescriptions.awsdesc}
    />
  ),
  gcloud: (
    <ToolWindow
      title="Google Cloud"
      score="7/10"
      description={toolDescriptions.gcdesc}
    />
  ),
  git: (
    <ToolWindow
      title="Git"
      score="7/10"
      description={toolDescriptions.gitdesc}
    />
  ),
  python: (
    <ToolWindow
      title="Python"
      score="9.5/10"
      description={toolDescriptions.pydesc}
    />
  ),
  ts: (
    <ToolWindow
      title="TypeScript"
      score="9.5/10"
      description={toolDescriptions.tsdesc}
    />
  ),
  cs: (
    <ToolWindow title="C#" score="8/10" description={toolDescriptions.csdesc} />
  ),
  react: (
    <ToolWindow
      title="React"
      score="9.5/10"
      description={toolDescriptions.reactdesc}
    />
  ),
  flutter: (
    <ToolWindow
      title="Flutter"
      score="6.5/10"
      description={toolDescriptions.flutdesc}
    />
  ),
  sass: (
    <ToolWindow
      title="SASS"
      score="9/10"
      description={toolDescriptions.sassdesc}
    />
  ),
  pg: (
    <ToolWindow
      title="PostgreSQL"
      score="8.5/10"
      description={toolDescriptions.pgdesc}
    />
  ),
  django: (
    <ToolWindow
      title="Django"
      score="9/10"
      description={toolDescriptions.djdesc}
    />
  ),
  flask: (
    <ToolWindow
      title="Flask"
      score="9.5/10"
      description={toolDescriptions.fldesc}
    />
  ),
};

export default Tools;
