import React, { useContext, useEffect, useState } from "react";
import eltHome from "../../Media/Screenschots/elt1/home.png";
import eltGen from "../../Media/Screenschots/elt1/exegen.png";
import eltExe from "../../Media/Screenschots/elt1/exe.png";
import eltPost from "../../Media/Screenschots/elt1/post.png";
import corpusQuery from "../../Media/Screenschots/corpus/query.png";
import corpusDocs from "../../Media/Screenschots/corpus/docs.png";
import corpusCompare from "../../Media/Screenschots/corpus/compare.png";
import corpusResult from "../../Media/Screenschots/corpus/result.png";
import { galleryCtx } from "../projects";

const eltImages: string[] = [eltHome, eltGen, eltExe, eltPost];
const corpusImages: string[] = [
  corpusQuery,
  corpusDocs,
  corpusCompare,
  corpusResult,
];

export const EltImageViewer = (
  <ImageViewer
    images={eltImages}
    title="Galleria eLT1"
    footer="Clicca fuori per chiudere"
  />
);
export const CorpusImageViewer = (
  <ImageViewer
    images={corpusImages}
    title="Galleria Eton Corpus"
    footer="Clicca fuori per chiudere"
  />
);

interface Props {
  images: string[];
  title: string;
  footer: string;
}

function ImageViewer(props: Props) {
  const [image, setImage] = useState(props.images[0]);
  const switcher = useContext(galleryCtx);

  const handleOutsideClick = (e: any) => {
    if (
      document.getElementById("imgView")?.contains(e.target) ||
      document.getElementById("navbar")?.contains(e.target)
    ) {
      return;
    } else {
      switcher(null, false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      handleOutsideClick(e);
      return () => {
        window.removeEventListener("click", () => {
          handleOutsideClick(e);
        });
      };
    });
  }, []);

  return (
    <div className="image-viewer" id="imgView">
      {/* <div className="title">
        <h2>{props.title}</h2>
      </div> */}
      <div className="display-wrapper">
        <div className="image-display">
          <img src={image} alt="" />
        </div>
        <div className="image-row">
          {props.images.map((img) => {
            return (
              <div
                className="image-tile"
                key={img}
                onClick={() => {
                  setImage(img);
                }}
              >
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="image-display-footer">
        <p>{props.footer}</p>
      </div>
    </div>
  );
}

export default ImageViewer;
