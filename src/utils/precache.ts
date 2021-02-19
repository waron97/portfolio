import mePic from "../Media/me_square.jpg";
import eltLogo from "../Media/elt1_logo.png";
import awLogo from "../Media/awlogo.png";
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
import eltHome from "../Media/Screenschots/elt1/home.png";
import eltGen from "../Media/Screenschots/elt1/exegen.png";
import eltExe from "../Media/Screenschots/elt1/exe.png";
import eltPost from "../Media/Screenschots/elt1/post.png";
import corpusQuery from "../Media/Screenschots/corpus/query.png";
import corpusDocs from "../Media/Screenschots/corpus/docs.png";
import corpusCompare from "../Media/Screenschots/corpus/compare.png";
import corpusResult from "../Media/Screenschots/corpus/result.png";

async function precacheImages() {
  const images = [
    sassLogo,
    gitLogo,
    csLogo,
    flaskLogo,
    flutterLogo,
    tsLogo,
    pythonLogo,
    fbLogo,
    pgLogo,
    eltLogo,
    awLogo,
    mePic,
    reactLogo,
    djangoLogo,
    awsLogo,
    gcLogo,
    eltExe,
    eltGen,
    eltHome,
    eltPost,
    corpusCompare,
    corpusDocs,
    corpusQuery,
    corpusResult,
  ].map((str) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = str;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  await Promise.all(images);
}

export default precacheImages;
