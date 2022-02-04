/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useRouter } from "next/router";
import importScript from "components/importScript";
import getConfig from "next/config";
import Head from "next/head";
import Hotspot from "components/hotspot";
import HotspotBtn from "components/hotspotBtn";

const { publicRuntimeConfig } = getConfig();

export default function Webinar(props) {
  importScript(`${publicRuntimeConfig.base}/js/jquery.magnific-popup.min.js`);
  importScript(`${publicRuntimeConfig.base}/js/main.js`);

  const router = useRouter();

  const handleOnClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as === `${publicRuntimeConfig.base}main-hall`) {
        router.replace(
          {
            pathname: "/main-hall",
            query: { fromB: "webinar" },
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
        <title>Webinar - Virtual Booth</title>
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
          src={`${props.base}/booth3/webinar_in.mp4`}
          type="video/mp4"
        />
      </video>

      <div id="sikuen2" className="hide">
        <img
          id="latar"
          className="latar"
          src={`${props.base}/booth3/webinar.jpg`}
        />
        <div id="hotspots">
          <Hotspot
            onClick={(e) => toWebinar(e)}
            iconName="bi-play-circle"
            top="50%"
            left="50%"
          />
          <HotspotBtn text="Lihat Rekaman" bottom="1%" right="1%" />
        </div>
      </div>
    </>
  );
}
