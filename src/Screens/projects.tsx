import React, {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import strings from "../strings";
import "../Styles/projectsScreen.scss";
import "../Styles/transition_def.scss";
import "../Styles/imageViewer.scss";
import eltLogo from "../Media/elt1_logo.png";
import awLogo from "../Media/awlogo.png";
import { ReactComponent as DownArrow } from "../Media/arrow_down.svg";
import { ReactComponent as UpArrow } from "../Media/arrow_up.svg";
import { CorpusImageViewer, EltImageViewer } from "./Helpers/ImageViewer";

export const galleryCtx = createContext<Function>(() => {});

interface Props {
  exitRef?: RefObject<HTMLDivElement>;
}

interface ProjProps {
  time: string;
  title: string;
  place: string;
  description: string;
  clickable: boolean;
  image?: string;
  imageViewer?: JSX.Element;
  key: string;
  navRef?: RefObject<HTMLDivElement>;
  animRef?: RefObject<HTMLDivElement>;
}

const projects1: ProjProps[] = [
  {
    title: "Tirocinante - Sviluppo di eLT1",
    place: "Università di Trento (2020 – Presente)",
    time: "2020 – Presente",
    description: strings.elt1Desc,
    key: "01",
    clickable: true,
    image: eltLogo,
    imageViewer: EltImageViewer,
  },
  {
    title: "Sviluppo del Corpus per l'Eton",
    place: "Università di Francoforte (11/2019 – 04/2020)",
    time: "11/2019 – 04/2020",
    description: strings.etonDesc,
    key: "02",
    clickable: true,
    image: awLogo,
    imageViewer: CorpusImageViewer,
  },
];

const projects2: ProjProps[] = [
  {
    title: "Assistente alla Mobilità",
    place: "Università di Trento",
    time: "01/2019 – 09/2019",
    description: strings.mobilityDesc,
    key: "03",
    clickable: false,
  },
  {
    title: "Bibliotecario Volontario",
    place: "Comune di Badia Calavena",
    time: "2012 - 2015",
    description: strings.libraryDesc,
    key: "04",
    clickable: false,
  },
];
function ProjectListTile(props: ProjProps) {
  const switcher = useContext(galleryCtx);
  const cls = !props.clickable
    ? "projects-image"
    : "projects-image projects-image-clickable";
  return (
    <div className="projects-list-item">
      <div
        className={cls}
        onClick={() => {
          switcher(props.imageViewer, true);
        }}
      >
        {props.clickable ? (
          <img src={props.image} alt="" />
        ) : (
          <span>{props.time}</span>
        )}
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.place}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

const getPart1 = () => {
  return projects1.map((i) => <ProjectListTile {...i} key={i.key} />);
};
const getPart2 = () => {
  return projects2.map((i) => <ProjectListTile {...i} key={i.key} />);
};

function Projects(props: Props) {
  const animationRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const [firstPartOn, setFirstPartOn] = useState(true);
  const [imageView, setImageView] = useState<JSX.Element | null | undefined>(
    null
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [firstPartOn]);

  const handleScroll = (e: WheelEvent) => {
    if (firstPartOn) {
      if (e.deltaY > 0) {
        // scrolling up while first part is on
        changeDisplay();
      }
    } else {
      if (!(e.deltaY > 0)) {
        changeDisplay();
      }
    }
  };

  const changeDisplay = () => {
    const clToAdd = firstPartOn ? "exit-fadetotop" : "exit-fadetobot";
    animationRef.current?.classList.add(clToAdd);
    navigationRef.current?.classList.add("exiting");
    setTimeout(() => {
      setFirstPartOn(firstPartOn ? false : true);
      animationRef.current?.classList.remove(clToAdd);
      navigationRef.current?.classList.remove("exiting");
    }, 500);
  };

  const switchToGallery = (view: JSX.Element | null, state: boolean) => {
    if (state) {
      props.exitRef?.current?.classList.add("exiting");
      setTimeout(() => {
        props.exitRef?.current?.classList.remove("exiting");
        setImageView(view);
      }, 500);
    } else {
      setImageView(null);
    }
  };

  const body = imageView ? (
    imageView
  ) : (
    <>
      {" "}
      <div
        className={
          firstPartOn ? "proj-animation-wrapper" : "proj-animation-wrapper-top"
        }
      >
        <div
          ref={navigationRef}
          onClick={() => {
            changeDisplay();
          }}
          className={
            firstPartOn
              ? "proj-edu-pointer proj-pointer-down"
              : "proj-edu-pointer proj-pointer-up"
          }
        >
          {firstPartOn ? <DownArrow /> : <UpArrow />}
        </div>
      </div>
      <div className="projects-list" ref={animationRef}>
        {/* <div className="join-line"></div> */}
        {firstPartOn ? getPart1() : getPart2()}
      </div>
    </>
  );
  return (
    <galleryCtx.Provider value={switchToGallery}>
      <div ref={props.exitRef} className="projects">
        {body}
      </div>
    </galleryCtx.Provider>
  );
}

export default Projects;
