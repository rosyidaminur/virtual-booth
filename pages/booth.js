/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import importScript from "components/importScript";
import getConfig from "next/config";
import Head from "next/head";
import Hotspot from "components/hotspot";
import { protectPage } from "../services/withAuth";

const { publicRuntimeConfig } = getConfig();

export const getServerSideProps = async (context) => protectPage(context);
export default function Booth(props) {
  importScript(`${publicRuntimeConfig.base}/js/jquery.magnific-popup.min.js`);
  importScript(`${publicRuntimeConfig.base}/js/main.js`);

  const [sponsor, setSponsor] = useState("Sponsor");
  const [files, setFiles] = useState([]);

  const router = useRouter();
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log("Kembali ke home");
    router.push("/");
  };

  const sortFiles = (prop) => {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  };

  useEffect(() => {
    // setSponsor(localStorage.getItem("sponsor"));
    // setFiles(JSON.parse(localStorage.getItem("files")));

    let fillle = JSON.parse(localStorage.getItem("files"))
    console.log(fillle)

    router.beforePopState(({ as }) => {
      if (window.getPopup() !== null) window.closePopup();

      if (as === `${publicRuntimeConfig.base}main-hall`) {
        router.replace(
          {
            pathname: "/main-hall",
            query: { fromH: "booth" },
          },
          "/main-hall"
        );
        return false;
      }

      return true;
    });
  }, [router]);

  return (
    <>
      <Head>
        <title>{sponsor} - Virtual Booth</title>
        <meta name="description" content="PKBKULIT - FKUWKS" />
      </Head>

      <video
        id="sikuen"
        className="latar"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/videos/03 - sikuen booth.mp4`}
          type="video/mp4"
        />
      </video>

      <div id="sikuen2" className="hide">
        <img
          id="latar"
          className="latar"
          src={`${props.base}/images/booth_platinum.jpg`}
        />
        <div id="hotspots">
          <Hotspot
            // popup="https://www.youtube.com/watch?v=OeGpf1MyM2M"
            popup={files[2]['File']} //undefined files
            iconName="no-icon"
            top="42%"
            right="28%"
          />
          <Hotspot
            popup={files[1]['File']}
            iconName="no-icon"
            top="42%"
            right="36%"
          />
          <Hotspot
            popup={files[0]['File']}
            iconName="no-icon"
            top="42%"
            right="43%"
          />
        </div>
      </div>
    </>
  );
}
