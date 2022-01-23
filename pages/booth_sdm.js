/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import importScript from "components/importScript";
import getConfig from "next/config";
import Head from "next/head";
import Hotspot from "components/hotspot";
import cookies from "next-cookies";
import { protectPage } from "../services/withAuth";
import axios from "axios";
import Dot from "components/dot";
const { publicRuntimeConfig } = getConfig();

function BoothBioderma(props) {
  const {base,name,sponsorfile,token} =props
  importScript(`${publicRuntimeConfig.base}/js/jquery.magnific-popup.min.js`);
  importScript(`${publicRuntimeConfig.base}/js/main.js`);

  const [sponsor, setSponsor] = useState("Surya Dermato Medica");
  const [filesponsor, setFileSponsor] = useState(sponsorfile);

  
  const [files, setFiles] = useState([]);
  const router = useRouter();
  const toMainHall = (e) => {
    router.replace(
      {
        pathname: "/main-hall",
        query: { fromB: "sdm" },
      },
      "/main-hall"
    );
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
    let fillle = JSON.parse(localStorage.getItem("files"))
    router.beforePopState(({ as }) => {
      if (window.getPopup() !== null) window.closePopup();

      if (as === `${publicRuntimeConfig.base}main-hall`) {
        router.replace(
          {
            pathname: "/main-hall",
            query: { fromB: "sdm" },
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
          src={`${props.base}/booth/sdm_in.mp4`}
          type="video/mp4"
        />
      </video>

      <div id="sikuen2" className="hide">
        {/* <img
          id="latar"
          className="latar"
          src={`${props.base}/images/booth_platinum.jpg`}
        /> */}
        <div id="hotspots">
          <Dot
            popup={filesponsor[0] === undefined ? '' : filesponsor[0].File}
            iconName="bi-record-circle"
            top="42%"
            left="28%"
          />
          <Dot
            popup={filesponsor[1] === undefined ? '' : filesponsor[1].File}
            iconName="bi-record-circle"
            top="42%"
            left="35.4%"
          />
          <Dot
            popup={filesponsor[2] === undefined ? '' : filesponsor[2].File}
            iconName="bi-record-circle"
            top="42%"
            left="44%"
          />
          <Dot
            popup={filesponsor[3] === undefined ? '' : filesponsor[3].File}
            iconName="bi-record-circle"
            top="42%"
            left="52.4%"
          />
          <Dot
            popup={filesponsor[4] === undefined ? '' : filesponsor[4].File}
            iconName="bi-play-circle"
            top="40%"
            left="62%"
          />
          <div style={{ position: "absolute", bottom: "0", left: "0" }}>
            <a className="btn-hall" onClick={(e) => toMainHall(true)}>
              Kembali Ke Main Hall
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  //const params= ctx.params; //baca parameter perspnsor
//  const query= ctx.query; //baca query perspnsor

  const token = cookies(ctx).token;
  if (token) {
    try {
      const res = await axios.get(process.env.BASE_URL + "/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const datasponsor = await axios.get(process.env.BASE_URL + '/get-by-sponsorid/SP-5', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return {
        props: {
          token,
          name: res.data.data.name,
          sponsorfile:datasponsor.data.data,

        },
      };
    } catch (err) {
      console.log(err)
      return {
        redirect: {
          destination: process.env.REDIRECT_LOGIN,
          permanent: false,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: process.env.REDIRECT_LOGIN,
        permanent: false,
      },
    };
  }
};

export default BoothBioderma;