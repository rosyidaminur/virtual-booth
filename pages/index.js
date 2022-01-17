/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import Hotspot from "components/hotspot";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { protectPage } from "../services/withAuth";
import Popup from "components/Popup/popup";

function Home(props) {
  const [visibility, setVisibility] = useState(true);
  const popupCloseHandler = () => {
    setVisibility(false);
  };

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
          <Popup
            width="40%"
            height="25%"
            onClose={popupCloseHandler}
            show={visibility}
            title="Virtual Booth FKUWKS - PKB Kulit"
          >
            <p>{`Selamat datang di Lobby, ${props.name}`}</p>
            <p>Silahkan klik pintu sebelah kiri untuk masuk ke Pameran</p>
            <a onClick={(e) => popupCloseHandler()} className="btn-ori">
              OK, Siap
            </a>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => protectPage(context);
export default Home;