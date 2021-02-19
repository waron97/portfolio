import { exit } from "process";
import React, { RefObject, useRef, useState } from "react";
import Navbar from "./Navbar";
import Screen from "./Screen";
import HomeScreen from "./Screens/HomeScreen";
import Info from "./Screens/Info";
import "./Styles/index.scss";
import "./Styles/screen.scss";
import precacheImages from "./utils/precache";

function App() {
  precacheImages();

  const exitRef = useRef(null);

  const [section, setSection] = useState(<HomeScreen exitRef={exitRef} />);
  const [current, setCurrent] = useState("Bio");

  const changeScreen = (
    ref: RefObject<HTMLDivElement | null> | undefined,
    toDisplay: JSX.Element,
    stringCurrent: string
  ) => {
    if (stringCurrent === current) return;
    ref?.current?.classList.add("exiting");
    setTimeout(() => {
      setSection(toDisplay);
      setCurrent(stringCurrent);
    }, 500);
  };

  return (
    <>
      <Navbar changeSection={changeScreen} exitRef={exitRef} />
      <Info />
      <Screen section={section} />
    </>
  );
}

export default App;
