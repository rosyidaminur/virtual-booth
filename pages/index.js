/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import Hotspot from "components/hotspot";

export default function Home(props) {
  const router = useRouter();
  const handleOnClick = (e) => {
    e.preventDefault();
    router.push("/main-hall");
  };

  return (
    <div>
      <Head>
        <title>Lobby - Virtual Booth</title>
        <meta name="description" content="PKBKULIT - FKUWKS" />
      </Head>

      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/videos/01 - sikuen lobby.mp4`}
          type="video/mp4"
        />
      </video>

      <div id="sikuen2" className="hide">
        <video id="latar" className="latar" autoPlay muted loop>
          <source src={`${props.base}/videos/lobby.mp4`} type="video/mp4" />
        </video>
        <div id="hotspots">
          <Hotspot
            onClick={(e) => handleOnClick(e)}
            iconName="bi-door-open"
            top="50%"
            left="9%"
          />
        </div>
      </div>
    </div>
  );
}
