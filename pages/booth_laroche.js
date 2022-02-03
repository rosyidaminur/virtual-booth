/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useRouter } from "next/router";
import importScript from "components/importScript";
import getConfig from "next/config";
import Head from "next/head";
import cookies from "next-cookies";
import axios from "axios";
import Dot from "components/dot";
const { publicRuntimeConfig } = getConfig();

function BoothLaroche(props) {
  importScript(`${publicRuntimeConfig.base}/js/jquery.magnific-popup.min.js`);
  importScript(`${publicRuntimeConfig.base}/js/main.js`);

  const sponsor = "La Roche Posay";
  const filesponsor = props.sponsorfile;
  const sponsorcode = props.sponsorcode;

  const router = useRouter();
  const toMainHall = (e) => {
    router.replace(
      {
        pathname: "/main-hall",
        query: { fromB: "laroche" },
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
    router.beforePopState(({ as }) => {
      if (window.getPopup() !== null) window.closePopup();

      if (as === `${publicRuntimeConfig.base}main-hall`) {
        router.replace(
          {
            pathname: "/main-hall",
            query: { fromB: "laroche" },
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
        <source src={`${props.base}/booth2/laroche_in.mp4`} type="video/mp4" />
      </video>

      <div id="sikuen2" className="hide">
        <video id="latar" className="latar" autoPlay muted loop>
          <source
            src={`${props.base}/booth2/laroche_loop.mp4`}
            type="video/mp4"
          />
        </video>
        <div id="hotspots">
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[0] === undefined ? "xxx" : filesponsor[0].Nourut}
            popup={filesponsor[0] === undefined ? "" : filesponsor[0].File}
            type={filesponsor[0] === undefined ? "" : filesponsor[0].Jenis_file}
            iconName="bi-record-circle"
            top="43.5%"
            left="17.3%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[1] === undefined ? "xxx" : filesponsor[1].Nourut}
            popup={filesponsor[1] === undefined ? "" : filesponsor[1].File}
            type={filesponsor[1] === undefined ? "" : filesponsor[1].Jenis_file}
            iconName="bi-record-circle"
            top="41%"
            left="29.5%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[2] === undefined ? "xxx" : filesponsor[2].Nourut}
            popup={filesponsor[2] === undefined ? "" : filesponsor[2].File}
            type={filesponsor[2] === undefined ? "" : filesponsor[2].Jenis_file}
            iconName="bi-record-circle"
            top="54.5%"
            left="27.5%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[3] === undefined ? "xxx" : filesponsor[3].Nourut}
            popup={filesponsor[3] === undefined ? "" : filesponsor[3].File}
            type={filesponsor[3] === undefined ? "" : filesponsor[3].Jenis_file}
            iconName="bi-record-circle"
            top="43.5%"
            left="37%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[4] === undefined ? "xxx" : filesponsor[4].Nourut}
            popup={filesponsor[4] === undefined ? "" : filesponsor[4].File}
            type={filesponsor[4] === undefined ? "" : filesponsor[4].Jenis_file}
            iconName="bi-record-circle"
            top="54.5%"
            left="37%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[5] === undefined ? "xxx" : filesponsor[5].Nourut}
            popup={filesponsor[5] === undefined ? "" : filesponsor[5].File}
            type={filesponsor[5] === undefined ? "" : filesponsor[5].Jenis_file}
            iconName="bi-play-circle"
            top="41%"
            left="52%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[6] === undefined ? "xxx" : filesponsor[6].Nourut}
            popup={filesponsor[6] === undefined ? "" : filesponsor[6].File}
            type={filesponsor[6] === undefined ? "" : filesponsor[6].Jenis_file}
            iconName="bi-record-circle"
            top="59%"
            left="48.5%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[7] === undefined ? "xxx" : filesponsor[7].Nourut}
            popup={filesponsor[7] === undefined ? "" : filesponsor[7].File}
            type={filesponsor[7] === undefined ? "" : filesponsor[7].Jenis_file}
            iconName="bi-record-circle"
            top="59%"
            left="53.5%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[8] === undefined ? "xxx" : filesponsor[8].Nourut}
            popup={filesponsor[8] === undefined ? "" : filesponsor[8].File}
            type={filesponsor[8] === undefined ? "" : filesponsor[8].Jenis_file}
            iconName="bi-record-circle"
            top="42%"
            right="40%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[9] === undefined ? "xxx" : filesponsor[9].Nourut}
            popup={filesponsor[9] === undefined ? "" : filesponsor[9].File}
            type={filesponsor[9] === undefined ? "" : filesponsor[9].Jenis_file}
            iconName="bi-record-circle"
            top="51%"
            right="38.4%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[10] === undefined ? "xxx" : filesponsor[10].Nourut}
            popup={filesponsor[10] === undefined ? "" : filesponsor[10].File}
            type={filesponsor[10] === undefined ? "" : filesponsor[10].Jenis_file}
            iconName="bi-play-circle"
            top="44%"
            right="26%"
          />
          <Dot
            sponsorcode={sponsorcode}
            token={props.token}
            nourut={filesponsor[11] === undefined ? "xxx" : filesponsor[11].Nourut}
            popup={filesponsor[11] === undefined ? "" : filesponsor[11].File}
            type={filesponsor[11] === undefined ? "" : filesponsor[11].Jenis_file}
            iconName="bi-record-circle"
            top="51%"
            right="29.2%"
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
  const sponsorcode = "SP-6";
  const token = cookies(ctx).token;
  if (token) {
    try {
      const res = await axios.get(process.env.BASE_URL + "/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const datasponsor = await axios.get(
        process.env.BASE_URL + "/get-by-sponsorid/" + sponsorcode,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return {
        props: {
          token,
          name: res.data.data.name,
          sponsorfile: datasponsor.data.data,
          sponsorcode,
        },
      };
    } catch (err) {
      console.log(err);
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

export default BoothLaroche;
