/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import axios from "axios";
import Hotspot from "components/hotspot";
import HotspotBtn from "components/hotspotBtn";
import HotspotImg from "components/hotspotImg";
import Popup from "components/Popup/popup";
import Head from "next/head";
import { useRouter } from "next/router";
import { Accordion, Button } from "react-bootstrap";
import { protectPage } from "../services/withAuth";
import { jsPDF, HTMLOptionImage } from "jspdf";
import Cookie from "js-cookie";

import Video from "components/Video";

export const getServerSideProps = async (context) => protectPage(context);
export default function MainHall(props) {
  const router = useRouter();
  const from = router.query.fromB;
  const [showSertif, setShowSertif] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [zoomStatus, setZoomStatus] = useState(false);
  const [Urlzoom, setUrlzoom] = useState("");
  const [noser, setNoser] = useState("");

  const popupCloseHandler = () => {
    setShowSertif(false);
    setShowRecord(false);
    setShowLogout(false);
    setErrorMsg("");
  };

  const logout = () => {
    localStorage.clear();
    Cookie.remove("token");
    router.reload();
  };

  const clickBooth = (e, nama, sponsorId) => {
    e.preventDefault();
    axios
      .get(process.env.BASE_URL + "/get-by-sponsorid/" + sponsorId, {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then((res) => {
        if (res.data.status == "success") {
          localStorage.setItem("sponsor", nama);
          localStorage.setItem("sponsorId", sponsorId);
          localStorage.setItem("files", JSON.stringify(res.data.data));
          router.push("/booth_" + nama);
        } else {
          // console.log(res.data);
          setErrorMsg(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toWebinar = (e) => {
    e.preventDefault();
    axios
      .get(process.env.BASE_URL + "/zoom/join-zoom", {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then((res) => {
        if (res.data.status == "success") {
          setZoomStatus(true);
          setUrlzoom(res.data.data.Zoom_joinurl);
          setErrorMsg(res.data.message);
        } else {
          setErrorMsg(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let video;
  if (from === "bioderma") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/booth2/bioderma_out.mp4`} type="video/mp4" />
      </video>
    );
  } else if (from === "laroche") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/booth2/laroche_out.mp4`} type="video/mp4" />
      </video>
    );
  } else if (from === "dermaxp") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/booth2/dermaxp_out.mp4`} type="video/mp4" />
      </video>
    );
  } else if (from === "galderma") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/booth2/galderma_out.mp4`}
          type="video/mp4"
        />
      </video>
    );
  } else if (from === "hyphens") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/booth2/hyphens_out.mp4`} type="video/mp4" />
      </video>
    );
  } else if (from === "sdm") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/booth2/sdm_out.mp4`} type="video/mp4" />
      </video>
    );
  } else if (from === "booth") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/booth2/booth_silver_out.mp4`}
          type="video/mp4"
        />
      </video>
    );
  } else {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/booth2/hall.mp4`} type="video/mp4" />
      </video>
    );
  }

  async function generatePdf(e, h) {
    // const noser = "";
    if (h == 1) {
      // noser = "No. 930/PKB/IDI-WJ/2021";
      setNoser("No. 930/PKB/IDI-WJ/2021");
    } else if (h == 2) {
      // noser = "No. 931/PKB/IDI-WJ/2021";
      setNoser("No. 931/PKB/IDI-WJ/2021");
    } else if (h == 3) {
      // noser = "No. 932/PKB/IDI-WJ/2021";
      setNoser("No. 932/PKB/IDI-WJ/2021");
    } else if (h == 4) {
      // noser = "No. 933/PKB/IDI-WJ/2021";
      setNoser("No. 933/PKB/IDI-WJ/2021");
    } else if (h == 5) {
      // noser = "No. 934/PKB/IDI-WJ/2021";
      setNoser("No. 934/PKB/IDI-WJ/2021");
    } else if (h == 6) {
      // noser = "No. 930/PKB/IDI-WJ/2021";
      setNoser("No. 930/PKB/IDI-WJ/2021");
    }

    const doc = new jsPDF("l");
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    doc.setFontSize(40);
    const imgData = props.base + "/sertifikat/sertifikat.jpeg";
    doc.addImage(imgData, "JPEG", 0, 0, width, height);
    doc.setFont("Time-Roman", "italic");
    doc.setFontSize(35);
    doc.setTextColor("#474745");
    doc.text(props.name, 153, 90, "center");
    doc.setFontSize(14);
    doc.text(noser, 147, 205, "center");
    doc.output("save", "Sertifikat " + props.name + "/" + noser + ".pdf");
  }

  return (
    <>
      <Head>
        <title>Main Hall - Virtual Booth</title>
        <meta name="description" content="PKBKULIT - FKUWKS" />
      </Head>

      {video}

      <div id="sikuen2" className="hide">
        <video id="latar" className="latar" autoPlay muted loop>
          <source src={`${props.base}/booth2/hall_loop.mp4`} type="video/mp4" />
        </video>
        <div id="hotspots">
          <HotspotImg
            onClick={(e) => clickBooth(e, "bernofarm", "SP-2")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-bernofarm.png"
            top="9%"
            right="28%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "ikapharmindo", "SP-2")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-ikapharma.png"
            top="11%"
            right="39%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "ferron", "SP-2")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-ferron.png"
            top="13%"
            right="48%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "interbat", "SP-8")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-interbat.png"
            top="15%"
            left="36.5%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "whoto", "SP-2")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-proderma.png"
            top="16%"
            left="26%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "roysurya", "SP-2")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-roi.png"
            top="18%"
            left="13%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "sdm", "SP-5")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-sdm.png"
            top="36%"
            right="4%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "hyphens", "SP-7")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-hyphens.png"
            top="25%"
            right="25%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "dermaxp", "SP-1")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-dermaxp.png"
            top="33%"
            left="17%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "galderma", "SP-3")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-galaderma.png"
            top="43%"
            right="22%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "bioderma", "SP-4")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-bioderma.png"
            top="32%"
            right="46%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "laroche", "SP-6")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-laroche.png"
            top="60%"
            right="78%"
          />
          <HotspotImg
            onClick={(e) => toWebinar(e)}
            imgSrc="zoom-logo.png"
            top="60%"
            left="45%"
          />
          <div style={{ position: "absolute", bottom: "0", right: "0" }}>
            <a className="btn-hall" onClick={(e) => setShowSertif(true)}>
              Sertifikat
            </a>
            <a className="btn-hall" onClick={(e) => setShowRecord(true)}>
              Rekaman
            </a>
            <a
              className="btn-hall"
              onClick={(e) =>
                setErrorMsg("Informasi Pemenang Door Prize sedang disiapkan")
              }
            >
              Pemenang Door Prize
            </a>
            <a
              className="btn-hall"
              onClick={(e) => setErrorMsg("Informasi Q & A sedang disiapkan")}
            >
              Q &amp; A
            </a>
          </div>
          <div style={{ position: "absolute", top: "0", left: "0" }}>
            <a className="btn-logout" onClick={(e) => setShowLogout(true)}>
              Keluar
            </a>
          </div>
          <Popup
            onClose={popupCloseHandler}
            show={showSertif}
            title="Daftar Sertifikat Simposium"
          >
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sertifikat Hari ke 1</Accordion.Header>
                <Accordion.Body>
                  {/* <Button onClick={(e) => generatePdf(e, 1)}>
                    Unduh Sertifikat
                  </Button> */}
                  Sertifikat belum tersedia
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Sertifikat Hari ke 2</Accordion.Header>
                <Accordion.Body>Sertifikat belum tersedia</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Sertifikat Hari ke 3</Accordion.Header>
                <Accordion.Body>Sertifikat belum tersedia</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Sertifikat Hari ke 4</Accordion.Header>
                <Accordion.Body>Sertifikat belum tersedia</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Sertifikat Hari ke 5</Accordion.Header>
                <Accordion.Body>Sertifikat belum tersedia</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Sertifikat Hari ke 6</Accordion.Header>
                <Accordion.Body>Sertifikat belum tersedia</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Popup>
          <Popup
            onClose={popupCloseHandler}
            show={showRecord}
            title="Daftar Rekaman"
          >
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Rekaman Hari ke 1</Accordion.Header>
                <Accordion.Body>
                  {/* {showRecord ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/0c423cce-4162-42f7-bd7d-685b498d4e07?autoplay=false`}
                      // videoSrc="videos/pkbkulit-intro.mp4"
                    />
                  ) : (
                    ""
                  )} */}
                  Rekaman belum tersedia
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Rekaman Hari ke 2</Accordion.Header>
                <Accordion.Body>Rekaman belum tersedia</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Rekaman Hari ke 3</Accordion.Header>
                <Accordion.Body>Rekaman belum tersedia</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Rekaman Hari ke 4</Accordion.Header>
                <Accordion.Body>Rekaman belum tersedia</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Rekaman Hari ke 5</Accordion.Header>
                <Accordion.Body>Rekaman belum tersedia</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Rekaman Hari ke 6</Accordion.Header>
                <Accordion.Body>Rekaman belum tersedia</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Popup>
          <Popup
            onClose={popupCloseHandler}
            show={errorMsg !== ""}
            title="Perhatian"
          >
            {zoomStatus ? (
              <a href={Urlzoom} target="_blank" rel="noopener noreferrer">
                <Button>Join Zoom </Button>
              </a>
            ) : (
              <p>{errorMsg}</p>
            )}
            {/* {Urlzoom?"":(<p >{errorMsg}</p>)} */}
          </Popup>
          <Popup
            width="40%"
            height="30%"
            onClose={popupCloseHandler}
            show={showLogout}
            title="Keluar"
          >
            <p>Apakah Anda yakin akan meninggalkan Main Hall?</p>
            <div style={{}}>
              <a className="btn-hall" onClick={(e) => popupCloseHandler()}>
                Tidak
              </a>
              <a className="btn-logout" onClick={(e) => logout()}>
                Ya
              </a>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
}
