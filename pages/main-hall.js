/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import axios from "axios";
import HotspotImg from "components/hotspotImg";
import cookies from "next-cookies";
import Popup from "components/Popup/popup";
import Head from "next/head";
import { useRouter } from "next/router";
import { Accordion, Button } from "react-bootstrap";
import { protectPage } from "../services/withAuth";
import { jsPDF, HTMLOptionImage } from "jspdf";
import Cookie from "js-cookie";

import Video from "components/Video";
import QnaOne from "components/QnA/qnaOne";

// export const getServerSideProps = async (context) => protectPage(context);
function MainHall(props) {
  const router = useRouter();
  const from = router.query.fromB;
  const [showSertif, setShowSertif] = useState(false);
  const [recordps, setRecordps] = useState(props.datavideo1);
  const [showRecord, setShowRecord] = useState(false);
  const [showQnA, setShowQnA] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [zoomStatus, setZoomStatus] = useState(false);
  const [Urlzoom, setUrlzoom] = useState("");
  const [noser, setNoser] = useState("");

  const popupCloseHandler = () => {
    setShowSertif(false);
    setShowRecord(false);
    setShowQnA(false);
    setShowWinners(false);
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
        playsInline
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/boothx/bioderma_out.mp4`}
          type="video/mp4"
        />
        Your browser does not support to access Virtual Booth
      </video>
    );
  } else if (from === "laroche") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        playsInline
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/boothx/laroche_out.mp4`} type="video/mp4" />
        Your browser does not support to access Virtual Booth
      </video>
    );
  } else if (from === "dermaxp") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        playsInline
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/boothx/dermaxp_out.mp4`} type="video/mp4" />
        Your browser does not support to access Virtual Booth
      </video>
    );
  } else if (from === "galderma") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        playsInline
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/boothx/galderma_out.mp4`}
          type="video/mp4"
        />
        Your browser does not support to access Virtual Booth
      </video>
    );
  } else if (from === "hyphens") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        playsInline
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/boothx/hyphens_out.mp4`} type="video/mp4" />
        Your browser does not support to access Virtual Booth
      </video>
    );
  } else if (from === "sdm") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        playsInline
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/boothx/sdm_out.mp4`} type="video/mp4" />
        Your browser does not support to access Virtual Booth
      </video>
    );
  } else if (from === "booth") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        playsInline
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/boothx/booth_silver_out.mp4`}
          type="video/mp4"
        />
        Your browser does not support to access Virtual Booth
      </video>
    );
  } else {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        playsInline
        muted
        onEnded={() => window.showHotspots()}
      >
        <source src={`${props.base}/boothx/hall.mp4`} type="video/mp4" />
        Your browser does not support to access Virtual Booth
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
        <video id="latar" className="latar" autoPlay playsInline muted loop>
          <source src={`${props.base}/boothx/hall_loop.mp4`} type="video/mp4" />
          Your browser does not support to access Virtual Booth
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
            <a className="btn-hall" onClick={(e) => setShowWinners(true)}>
              Pemenang Door Prize
            </a>
            <a className="btn-hall" onClick={(e) => setShowSertif(true)}>
              Sertifikat
            </a>
            <a className="btn-hall" onClick={(e) => setShowRecord(true)}>
              Rekaman
            </a>
            <a className="btn-hall" onClick={(e) => setShowQnA(true)}>
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
            show={showWinners}
            title="Daftar Pemenang Door Prize"
          >
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Pemenang Hari ke 1</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Pemenang:
                    <br />
                    1. Fesdia Sari
                    <br />
                    2. Erfin Dimas Fernanda
                    <br />
                    3. Ida Kurniawati
                    <br />
                    4. dr. Luh Putu Mahatya Valdini Putri, S.Ked
                    <br />
                    5. dr. Andi Anwar Arsyad, Sp.KK
                  </p>
                  <p>
                    Selamat kepada pemenang, bagi yang namanya tertera di atas
                    dipersilahkan menghubungi panitia untuk klaim hadiah
                    <br />
                    Putri (WA:{" "}
                    <a
                      className="link-info"
                      href="https://wa.me/6285954135553"
                      target="_blank"
                      rel="noreferrer"
                    >
                      085954135553
                    </a>
                    )
                  </p>
                  <p>Terimakasih</p>

                  {showWinners ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/c802b71e-6338-4bdb-aa92-ff0e23b12897?autoPlay=false`}
                    />
                  ) : (
                    ""
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Pemenang Hari ke 2</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Pemenang:
                    <br />
                    1. dr. Gede Agus Nusantara, SpKK, FINSDV
                    <br />
                    2. dr. Frea Astrilia Tamarina, SpKK
                    <br />
                    3. dr. Agatha Anindhita, M.Ked.Klin, SpDV
                    <br />
                    4. Prasti Adhi Dharmasanti, dr., SpKK., FINSDV
                    <br />
                    5. Dr. dr. Nanda Earlia, SpKK, FINSDV, FAADV
                  </p>
                  <p>
                    Selamat kepada pemenang, bagi yang namanya tertera di atas
                    dipersilahkan menghubungi panitia untuk klaim hadiah
                    <br />
                    Putri (WA:{" "}
                    <a
                      className="link-info"
                      href="https://wa.me/6285954135553"
                      target="_blank"
                      rel="noreferrer"
                    >
                      085954135553
                    </a>
                    )
                  </p>
                  <p>Terimakasih</p>

                  {showWinners ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/59db3866-a446-400b-ba9c-9974165d0f12?autoPlay=false`}
                    />
                  ) : (
                    ""
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Pemenang Hari ke 3</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Pemenang:
                    <br />
                    1. dr. Julia Melisa, SpKK
                    <br />
                    2. dr. Reika Ravenski Novsa
                    <br />
                    3. dr Wiwiek Andayani
                    <br />
                    4. dr. Lindayani H, Sp.KK
                    <br />
                    5. Reghina Salsabila Ayuantia Nainatika
                  </p>
                  <p>
                    Selamat kepada pemenang, bagi yang namanya tertera di atas
                    dipersilahkan menghubungi panitia untuk klaim hadiah
                    <br />
                    Putri (WA:{" "}
                    <a
                      className="link-info"
                      href="https://wa.me/6285954135553"
                      target="_blank"
                      rel="noreferrer"
                    >
                      085954135553
                    </a>
                    )
                  </p>
                  <p>Terimakasih</p>

                  {showWinners ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/33a6d0cb-58c9-46be-9c02-2ddc44c1a345?autoPlay=false`}
                    />
                  ) : (
                    ""
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Pemenang Hari ke 4</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Pemenang:
                    <br />
                    1. dr. Eva Aguswulandari Suwito
                    <br />
                    2. dr. Meily Rizkinta Putri
                    <br />
                    3. dr. Dyah Ratri Anggarini, SpDV
                    <br />
                    4. Liliani Labitta
                    <br />
                    5. dr. Hasrulliana Ningsih Wahyuli, SpKK, FINSDV
                  </p>
                  <p>
                    Selamat kepada pemenang, bagi yang namanya tertera di atas
                    dipersilahkan menghubungi panitia untuk klaim hadiah
                    <br />
                    Roosi (WA:{" "}
                    <a
                      className="link-info"
                      href="https://wa.me/6285755952199"
                      target="_blank"
                      rel="noreferrer"
                    >
                      085755952199
                    </a>
                    )
                  </p>
                  <p>Terimakasih</p>

                  {showWinners ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/4aaf9a9c-ed33-4687-a419-362b43834736?autoPlay=false`}
                    />
                  ) : (
                    ""
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Pemenang Hari ke 5</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Pemenang:
                    <br />
                    1. dr. Rudy Wartono, SpKK
                    <br />
                    2. Galuh Dyah Puspitasari
                    <br />
                    3. dr. Jasmin Thalib, SpKK, FINSDV
                    <br />
                    4. dr. Sri Agustina S., SpKK
                    <br />
                    5. dr. Bertha Susanna Syah, SpKK
                  </p>
                  <p>
                    Selamat kepada pemenang, bagi yang namanya tertera di atas
                    dipersilahkan menghubungi panitia untuk klaim hadiah
                    <br />
                    Farizah (WA:{" "}
                    <a
                      className="link-info"
                      href="https://wa.me/62895396120289"
                      target="_blank"
                      rel="noreferrer"
                    >
                      0895396120289
                    </a>
                    )
                  </p>
                  <p>Terimakasih</p>

                  {showWinners ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/e8c208d2-d4fc-4fc7-a277-26d51f1174b3?autoPlay=false`}
                    />
                  ) : (
                    ""
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Pemenang Hari ke 6</Accordion.Header>
                <Accordion.Body>
                  <i>Info pemenang belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Pemenang Lomba TikTok Edukasi PKB 2 FK UWKS
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Juara I - dr. Rizki Hapsari Nugraha
                    <br />
                    Juara II - dr. Linda Purwasih
                    <br />
                    Juara III - dr. Dwi Intan
                    <br />
                    Juara Favorit - dr. Najwa Amalia
                    <br />
                  </p>
                  <p>
                    Silahkan menghubungi contact person
                    <br />
                    Farizah (WA:{" "}
                    <a
                      className="link-info"
                      href="https://wa.me/62895396120289"
                      target="_blank"
                      rel="noreferrer"
                    >
                      0895396120289
                    </a>
                    )
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Pemenang Posttest</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Juara I - dr. Desiana Widityaning Sari, Sp.DV, M.Ked.Klin
                    <br />
                    Juara II - dr. Alfadea Irbah Allizaputri, AIFO-K
                    <br />
                    Juara III - dr. Dinar Chieko Triesayuningtyas
                    <br />
                  </p>
                  <p>
                    Silahkan menghubungi contact person
                    <br />
                    Farizah (WA:{" "}
                    <a
                      className="link-info"
                      href="https://wa.me/62895396120289"
                      target="_blank"
                      rel="noreferrer"
                    >
                      0895396120289
                    </a>
                    )
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <br />
          </Popup>

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
                  <i>Sertifikat belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Sertifikat Hari ke 2</Accordion.Header>
                <Accordion.Body>
                  <i>Sertifikat belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Sertifikat Hari ke 3</Accordion.Header>
                <Accordion.Body>
                  <i>Sertifikat belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Sertifikat Hari ke 4</Accordion.Header>
                <Accordion.Body>
                  <i>Sertifikat belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Sertifikat Hari ke 5</Accordion.Header>
                <Accordion.Body>
                  <i>Sertifikat belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Sertifikat Hari ke 6</Accordion.Header>
                <Accordion.Body>
                  <i>Sertifikat belum tersedia</i>
                </Accordion.Body>
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
                  {recordps ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/feeb1531-5504-44f4-9a31-c590daef5302?autoplay=false`}
                    />
                  ) : (
                    <i>Rekaman tidak tersedia</i>
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Rekaman Hari ke 2</Accordion.Header>
                <Accordion.Body>
                  {recordps ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/a2082f37-face-4135-96ca-ad68ce425cb7?autoplay=false`}
                    />
                  ) : (
                    <i>Rekaman tidak tersedia</i>
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Rekaman Hari ke 3</Accordion.Header>
                <Accordion.Body>
                  {recordps ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/00d56c23-4e67-49c5-8371-351111cb8d5f?autoplay=false`}
                    />
                  ) : (
                    <i>Rekaman tidak tersedia</i>
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Rekaman Hari ke 4</Accordion.Header>
                <Accordion.Body>
                  {recordps ? (
                    <Video
                      videoSrc={`https://iframe.mediadelivery.net/embed/20390/55ce6c5a-f2db-4ef6-a426-94744e35ecdc?autoplay=false`}
                    />
                  ) : (
                    <i>Rekaman tidak tersedia</i>
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Rekaman Hari ke 5</Accordion.Header>
                <Accordion.Body>
                  <i>Rekaman belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Rekaman Hari ke 6</Accordion.Header>
                <Accordion.Body>
                  <i>Rekaman belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Popup>

          <Popup
            onClose={popupCloseHandler}
            show={showQnA}
            title="Daftar Q &amp; A"
          >
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Q &amp; A Hari ke 1</Accordion.Header>
                <Accordion.Body>
                  <QnaOne />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Q &amp; A Hari ke 2</Accordion.Header>
                <Accordion.Body>
                  <i>Q &amp; A belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Q &amp; A Hari ke 3</Accordion.Header>
                <Accordion.Body>
                  <i>Q &amp; A belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Q &amp; A Hari ke 4</Accordion.Header>
                <Accordion.Body>
                  <i>Q &amp; A belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Q &amp; A Hari ke 5</Accordion.Header>
                <Accordion.Body>
                  <i>Q &amp; A belum tersedia</i>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Q &amp; A Hari ke 6</Accordion.Header>
                <Accordion.Body>
                  <i>Q &amp; A belum tersedia</i>
                </Accordion.Body>
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

export const getServerSideProps = async (ctx) => {
  const token = cookies(ctx).token;
  if (token) {
    try {
      const res = await axios.get(process.env.BASE_URL + "/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      let datavideo1 = false;
      if (
        res.data.data.reg_type === "Pameran dan Simposium" ||
        (res.data.data.reg_type === "Pameran, Simposium dan Workshop" &&
          res.data.data.paid == true)
      ) {
        datavideo1 = true;
      }
      return {
        props: {
          token,
          datavideo1,
          name: res.data.data.name,
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

export default MainHall;
