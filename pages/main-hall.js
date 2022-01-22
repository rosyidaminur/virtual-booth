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

// import VideoIntro from "components/VideoIntro";

{/* <VideoIntro videoSrc={`https://iframe.mediadelivery.net/embed/20390/0c423cce-4162-42f7-bd7d-685b498d4e07?autoplay=false`} /> */}

export const getServerSideProps = async (context) => protectPage(context);
export default function MainHall(props) {
  const router = useRouter();
  const from = router.query.fromB;
  const [showSertif, setShowSertif] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const popupCloseHandler = () => {
    setShowSertif(false);
    setShowRecord(false);
    setErrorMsg("");
  };
  

  const clickBooth = (e, nama) => {
    console.log(nama);
    e.preventDefault();
    axios
      .get(process.env.BASE_URL + "/display-by-sponsor", {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "success") {
          localStorage.setItem("sponsor", nama);
          localStorage.setItem("files", JSON.stringify(res.data.data));
          if (nama == "Bioderma") {
            router.push("/booth_bioderma");
          } else if (nama == "Derma XP") {
            router.push("/booth_dermaxp");
          } else if (nama == "Galaderma") {
            router.push("/booth_galaderma");
          } else if (nama == "Hyphens") {
            router.push("/booth_hyphens");
          } else if (nama == "Surya Dermato Medica") {
            router.push("/booth_sdm");
          } else {
            router.push("/booth");
          }
        } else {
          console.log(res.data);
          setErrorMsg(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const toWebinar = (e) => {
    e.preventDefault();
    // router.push("/webinar");
    setErrorMsg("Simposium & Workshop sedang dipersiapkan");
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
        <source src={`${props.base}/booth/bioderma_out.mp4`} type="video/mp4" />
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
        <source src={`${props.base}/booth/dermaxp_out.mp4`} type="video/mp4" />
      </video>
    );
  } else if (from === "galaderma") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/booth/galaderma_out.mp4`}
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
        <source src={`${props.base}/booth/hyphens_out.mp4`} type="video/mp4" />
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
        <source src={`${props.base}/booth/sdm_out.mp4`} type="video/mp4" />
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
          src={`${props.base}/booth/booth_silver_out.mp4`}
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
        <source src={`${props.base}/booth/hall.mp4`} type="video/mp4" />
      </video>
    );
  }
  async function generatePdf(e,h) {
        const noser='';
        if(h==1){
          noser='No. 930/PKB/IDI-WJ/2021'
        } else if(h==2){
          noser='No. 931/PKB/IDI-WJ/2021'
        }else if(h==3){
          noser='No. 932/PKB/IDI-WJ/2021'
        }else if(h==4){
          noser='No. 933/PKB/IDI-WJ/2021'
        }else if(h==5){
          noser='No. 934/PKB/IDI-WJ/2021'
        }else if(h==6){
          noser='No. 930/PKB/IDI-WJ/2021'
        }
        console.log(noser);

        const doc = new jsPDF('l');
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        doc.setFontSize(40);
        const imgData = props.base+'/sertifikat/sertifikat.jpeg'
        doc.addImage(imgData, 'JPEG', 0, 0, width, height);
        doc.setFont("Time-Roman", "italic")
        doc.setFontSize(35);
        doc.setTextColor('#474745');
        doc.text(props.name, 153, 90, 'center');
        doc.setFontSize(14);
        doc.text(noser, 147, 205, 'center');
        doc.output('save', 'Sertifikat '+props.name+'/'+noser+'.pdf');
}

  return (
    <>
      <Head>
        <title>Main Hall - Virtual Booth</title>
        <meta name="description" content="PKBKULIT - FKUWKS" />
      </Head>

      {video}

      <div id="sikuen2" className="hide">
        {/* <img
          id="latar"
          className="latar"
          src={`${props.base}/booth/hall.png`}
        /> */}
        <div id="hotspots">
          <HotspotImg
            onClick={(e) => clickBooth(e, "Bernofarm")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-bernofarm.png"
            top="7%"
            right="26%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Ikapharma")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-ikapharma.png"
            top="9%"
            right="37%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Ferron")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-ferron.png"
            top="10%"
            right="47%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Interbat")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-interbat.png"
            top="12%"
            left="34%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Proderma")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-proderma.png"
            top="14%"
            left="23%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Roi Surya Prima")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-roi.png"
            top="17%"
            left="11%"
            small
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Surya Dermato Medica")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-sdm.png"
            top="36%"
            right="4%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Hyphens")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-hyphens.png"
            top="25%"
            right="25%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Derma XP")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-dermaxp.png"
            top="33%"
            left="17%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Galaderma")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-galaderma.png"
            top="43%"
            right="22%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Bioderma")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-bioderma.png"
            top="32%"
            right="46%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, "Laroche")}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-laroche.png"
            top="60%"
            right="78%"
          />
          <Hotspot
            onClick={(e) => toWebinar(e)}
            iconName="bi-person-video2"
            top="60%"
            left="45%"
          />
          {/* <HotspotBtn
            onClick={(e) => setShowSertif(true)}
            text="Sertifikat"
            bottom="1%"
            right="1%"
          />
          <HotspotBtn
            onClick={(e) => setShowRecord(true)}
            text="Rekaman"
            bottom="1%"
            right="17%"
          /> */}
          <div style={{position: 'absolute', bottom: '0', right: '0'}}>
            <a className="btn-hall" onClick={(e) => setShowSertif(true)}>Sertifikat</a>
            <a className="btn-hall" onClick={(e) => setShowRecord(true)}>Rekaman</a>
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
                  <Button  onClick={(e) => generatePdf(e, 1)}>Unduh Sertifikat</Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Sertifikat Hari ke 2</Accordion.Header>
                <Accordion.Body>
                  <Button  onClick={(e) => generatePdf(e, 2)}>Unduh Sertifikat</Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Sertifikat Hari ke 3</Accordion.Header>
                <Accordion.Body>
                  <Button  onClick={(e) => generatePdf(e, 3)}>Unduh Sertifikat</Button>
                </Accordion.Body>
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
                  <iframe src="videos/pkbkulit-intro.mp4" allowFullScreen />
                  {/* <div> */}
                    <div className="video-responsive">
                      {/* <iframe
                        src='https://iframe.mediadelivery.net/embed/20390/0c423cce-4162-42f7-bd7d-685b498d4e07?autoplay=false'
                        loading="lazy" 
                        style={{border: 'none', position: 'absolute', top: '0', height: '100%', width: '100%'}}
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                        allowFullScreen={true}
                        title="Intro PKB Kulit"
                      />
                  </div> */}
                </div> 
                  {/* <Button onClick={generatePdf}>Lihat Rekaman</Button> */}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Rekaman Hari ke 2</Accordion.Header>
                <Accordion.Body>
                <iframe src="videos/pkbkulit-intro.mp4" allowFullScreen />
                </Accordion.Body>
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
            <p>{errorMsg}</p>
          </Popup>
        </div>
      </div>
    </>
  );
}
