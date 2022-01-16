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

function Booth(props) {
  const {base,name,sponsorfile,token} =props
  importScript(`${publicRuntimeConfig.base}/js/jquery.magnific-popup.min.js`);
  importScript(`${publicRuntimeConfig.base}/js/main.js`);

  const [sponsor, setSponsor] = useState("Sponsor");
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
            popup={filesponsor[0].File} //undefined files
            iconName="no-icon"
            top="42%"
            right="28%"
          />
          <Hotspot
            popup={filesponsor[1].File}
            // popup="https://www.youtube.com/watch?v=OeGpf1MyM2M"
            iconName="no-icon"
            top="42%"
            right="36%"
          />
          <Hotspot
            popup={filesponsor[2].File}
            // popup="https://www.youtube.com/watch?v=OeGpf1MyM2M"
            iconName="no-icon"
            top="42%"
            right="43%"
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
      const datasponsor = await axios.get(process.env.BASE_URL + "/get-by-sponsorid/"+'SP-4', {
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

export default Booth;