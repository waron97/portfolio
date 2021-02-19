import React, { RefObject, useRef, useState } from "react";
import "../Styles/toolkitScreen.scss";
import "../Styles/transition_def.scss";
import reactLogo from "../Media/tools/react.png";
import djangoLogo from "../Media/tools/django.png";
import flaskLogo from "../Media/tools/flask.png";
import tsLogo from "../Media/tools/typescript.png";
import pythonLogo from "../Media/tools/python.png";
import flutterLogo from "../Media/tools/flutter.png";
import fbLogo from "../Media/tools/firebase.png";
import pgLogo from "../Media/tools/postgres.png";
import gcLogo from "../Media/tools/gcloud.png";
import gitLogo from "../Media/tools/git.png";
import awsLogo from "../Media/tools/aws.png";
import csLogo from "../Media/tools/cs.png";
import sassLogo from "../Media/tools/sass.png";
import Tools from "../utils/tools";

interface Props {
  exitRef?: RefObject<HTMLDivElement>;
}

export const exiter = React.createContext<Function>(() => {});

function Toolkit(props: Props) {
  const [toolWindow, setToolWindow] = useState<JSX.Element | null>(null);
  const [showingWindow, setShowingWindow] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const showWindow = (wnd: JSX.Element) => {
    if (showingWindow) return;
    gridRef?.current?.classList.add("blurred");
    setToolWindow(wnd);
    setShowingWindow(true);
  };
  const hideWindows = () => {
    setToolWindow(null);
    setShowingWindow(false);
    gridRef?.current?.classList.remove("blurred");
  };
  return (
    <exiter.Provider value={hideWindows}>
      <div ref={props.exitRef} className="toolkit">
        {toolWindow}
        <div ref={gridRef} className="toolkit-grid">
          <div onClick={() => showWindow(Tools.firebase)} className="tool">
            <img src={fbLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.django)} className="tool">
            <img src={djangoLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.python)} className="tool">
            <img src={pythonLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.flask)} className="tool">
            <img src={flaskLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.ts)} className="tool">
            <img src={tsLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.flutter)} className="tool">
            <img src={flutterLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.pg)} className="tool">
            <img src={pgLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.gcloud)} className="tool">
            <img src={gcLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.aws)} className="tool">
            <img src={awsLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.cs)} className="tool">
            <img src={csLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.git)} className="tool">
            <img src={gitLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.sass)} className="tool">
            <img src={sassLogo} alt="" />
          </div>
          <div onClick={() => showWindow(Tools.react)} className="tool">
            <img src={reactLogo} alt="" />
          </div>
        </div>
      </div>
    </exiter.Provider>
  );
}

export default Toolkit;
