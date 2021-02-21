import React, { RefObject, useRef } from "react";
import HomeScreen from "./Screens/HomeScreen";
import Projects from "./Screens/projects";
import Toolkit from "./Screens/Toolkit";
import "./Styles/nav.scss";

interface Props {
  changeSection: (
    ref: RefObject<HTMLDivElement | null> | undefined,
    toDisplay: JSX.Element,
    stringCurrent: string
  ) => void;
  exitRef?: RefObject<HTMLDivElement>;
}

function Navbar(props: Props) {
  const myRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={myRef} className="navbar row pos1" id="navbar">
      <div className="navbar-nav row">
        <div
          onClick={() => {
            const cl = myRef.current?.classList;
            cl?.remove(cl[cl.length - 1]);
            cl?.add("pos1");
            props.changeSection(
              props.exitRef,
              <HomeScreen exitRef={props.exitRef} />,
              "Bio"
            );
          }}
        >
          Chi sono
        </div>
        <div
          onClick={() => {
            const cl = myRef.current?.classList;
            cl?.remove(cl[cl.length - 1]);
            cl?.add("pos2");
            props.changeSection(
              props.exitRef,
              <Projects exitRef={props.exitRef} />,
              "Projects"
            );
          }}
        >
          Progetti
        </div>
        <div
          onClick={() => {
            const cl = myRef.current?.classList;
            cl?.remove(cl[cl.length - 1]);
            cl?.add("pos3");
            props.changeSection(
              props.exitRef,
              <Toolkit exitRef={props.exitRef} />,
              "Toolkit"
            );
          }}
        >
          Strumenti
        </div>
      </div>
    </div>
  );
}

export default Navbar;
