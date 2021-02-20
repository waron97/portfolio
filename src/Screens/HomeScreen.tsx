import React, { RefObject, useEffect, useRef, useState } from "react";
import mePic from "../Media/me_square.jpg";
import "../Styles/homeScreen.scss";
import "../Styles/transition_def.scss";
import { ReactComponent as DownArrow } from "../Media/arrow_down.svg";
import { ReactComponent as UpArrow } from "../Media/arrow_up.svg";

interface Props {
  exitRef?: RefObject<HTMLDivElement>;
}

interface PartProps extends Props {
  changer: Function;
  animationRef: RefObject<HTMLDivElement>;
  navRef: RefObject<HTMLDivElement>;
}

function FirstPart(props: PartProps) {
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        props.changer(
          <SecondPart
            changer={props.changer}
            exitRef={props.exitRef}
            animationRef={props.animationRef}
            navRef={props.navRef}
          />,
          true
        );
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [props]);

  return (
    <div ref={props.exitRef} className="homeScreen">
      <div className="column" ref={props.animationRef}>
        <div className="row upper">
          <div className="logo">
            <div className="border" />
            <img src={mePic} alt="" />
          </div>
          <div className="bio">
            <div className="column">
              <span>
                Nome: <b>Aron Winkler</b>
              </span>
              <span>
                Sesso: <b>Maschile</b>
              </span>
              <span>
                Data di nascita: <b>5 Aprile 1997</b>
              </span>
              <span>
                Residenza: <b>Badia Calavena, VR</b>
              </span>
              <span>
                E-mail: <b>winkler.aron5@gmail.com</b>
              </span>
              <span>
                Telefono: <b>+39 3711140932</b>
              </span>
            </div>
          </div>
        </div>
        <span className="motto">
          Un giorno in cui si è imparato almeno una cosa nuova è un giorno ben
          speso.
        </span>
      </div>
      <div className="animation-wrapper">
        <div
          ref={props.navRef}
          className="edu-pointer pointer-down"
          onClick={() => {
            props.changer(
              <SecondPart
                navRef={props.navRef}
                changer={props.changer}
                exitRef={props.exitRef}
                animationRef={props.animationRef}
              />,
              true
            );
          }}
        >
          <span>Formazione</span>
          <DownArrow />
        </div>
      </div>
    </div>
  );
}

function SecondPart(props: PartProps) {
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) return;
      props.changer(
        <FirstPart
          navRef={props.navRef}
          changer={props.changer}
          exitRef={props.exitRef}
          animationRef={props.animationRef}
        />,
        false
      );
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [props]);
  return (
    <div ref={props.exitRef} className="homeScreen">
      <div className="animation-wrapper-top">
        <div
          ref={props.navRef}
          className="edu-pointer pointer-up"
          onClick={() => {
            props.changer(
              <FirstPart
                changer={props.changer}
                exitRef={props.exitRef}
                animationRef={props.animationRef}
                navRef={props.navRef}
              />
            );
          }}
        >
          <UpArrow />
          <span>Bio</span>
        </div>
      </div>
      <div className="column formation-list" ref={props.animationRef}>
        <FormationListItem
          place=""
          title={"Programmatore autodidatta"}
          time={"2018 - Presente"}
        />
        <FormationListItem
          place="Università di Trento"
          title={"Laurea in Lingue Moderne"}
          time={"2017 - 2020"}
        />
        <FormationListItem
          place="Liceo Niccolò Copernico (VR)"
          title={"Diploma Liceo Linguistico"}
          time={"2011  -2017"}
        />
        {/* <div className="attempt"></div> */}
      </div>
    </div>
  );
}

interface FormationProps {
  title: string;
  time: string;
  place: string;
  image?: string;
}

function FormationListItem(props: FormationProps) {
  return (
    <div className="formation-list-item row">
      <div className="list-point-image"></div>
      <div className="text">
        <span className="title">{props.title}</span>
        <span className="place">{props.place}</span>
        <span className="time">{props.time}</span>
      </div>
    </div>
  );
}

function HomeScreen(props: Props) {
  const animationRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState<JSX.Element>();

  useEffect(() => {
    const initial = (
      <FirstPart
        navRef={navigationRef}
        changer={changePart}
        exitRef={props.exitRef}
        animationRef={animationRef}
      />
    );
    setDisplay(initial);
  }, [setDisplay, props.exitRef]);

  const changePart = (newPart: JSX.Element, isFirstPartOn: boolean) => {
    const clToAdd = isFirstPartOn ? "exit-fadetotop" : "exit-fadetobot";
    animationRef.current?.classList.add(clToAdd);
    navigationRef.current?.classList.add("exiting");
    setTimeout(() => {
      setDisplay(newPart);
    }, 500);
  };

  return <>{display}</>;
}

export default HomeScreen;
