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
const { publicRuntimeConfig } = getConfig();

function BoothBioderma(props) {
  const {base,name,sponsorfile,token} =props
  importScript(`${publicRuntimeConfig.base}/js/jquery.magnific-popup.min.js`);
  importScript(`${publicRuntimeConfig.base}/js/main.js`);

  const [sponsor, setSponsor] = useState("Bioderma");
  const [filesponsor, setFileSponsor] = useState(sponsorfile);

  
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
    let fillle = JSON.parse(localStorage.getItem("files"))
    router.beforePopState(({ as }) => {
      if (window.getPopup() !== null) window.closePopup();

      if (as === `${publicRuntimeConfig.base}main-hall`) {
        router.replace(
          {
            pathname: "/main-hall",
            query: { fromB: "bioderma" },
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
          src={`${props.base}/booth/bioderma_in.mp4`}
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
          <Hotspot
            popup={filesponsor[0] === undefined ? '' : filesponsor[0].File}
            iconName="no-icon"
            top="63.5%"
            left="21.3%"
          />
          <Hotspot
            popup={filesponsor[1] === undefined ? '' : filesponsor[1].File}
            iconName="no-icon"
            top="37%"
            left="26%"
          />
          <Hotspot
            popup={filesponsor[2] === undefined ? '' : filesponsor[2].File}
            iconName="no-icon"
            top="44%"
            left="33.2%"
          />
          <Hotspot
            popup={filesponsor[3] === undefined ? '' : filesponsor[3].File}
            iconName="no-icon"
            top="37%"
            left="39.5%"
          />
          <Hotspot
            popup={filesponsor[4] === undefined ? '' : filesponsor[4].File}
            iconName="no-icon"
            top="53%"
            left="39.5%"
          />
          <Hotspot
            popup={filesponsor[5] === undefined ? '' : filesponsor[5].File}
            iconName="no-icon"
            top="37%"
            left="45%"
          />
          <Hotspot
            popup={filesponsor[6] === undefined ? '' : filesponsor[6].File}
            iconName="no-icon"
            top="53%"
            left="45%"
          />
          <Hotspot
            popup={filesponsor[7] === undefined ? '' : filesponsor[7].File}
            iconName="no-icon"
            top="37%"
            left="50.5%"
          />
          <Hotspot
            popup={filesponsor[8] === undefined ? '' : filesponsor[8].File}
            iconName="no-icon"
            top="53%"
            left="50.5%"
          />
          <Hotspot
            popup={filesponsor[9] === undefined ? '' : filesponsor[9].File}
            iconName="no-icon"
            top="42%"
            right="34%"
          />
          <Hotspot
            popup={filesponsor[10] === undefined ? '' : filesponsor[10].File}
            iconName="no-icon"
            top="42%"
            right="19%"
          />
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
      const datasponsor = await axios.get(process.env.BASE_URL + '/get-by-sponsorid/SP-4', {
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