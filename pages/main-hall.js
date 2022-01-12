/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Hotspot from "components/hotspot";
import HotspotImg from "components/hotspotImg";
import Head from "next/head";
import { useRouter } from "next/router";

export default function MainHall(props) {
  const router = useRouter();
  const from = router.query.fromH;
  
  const clickBooth = (e, nama) => {
    e.preventDefault();
    router.push({
      pathname: "/booth",
      query: { sponsor: nama },
    });
  };
  const toWebinar = (e) => {
    e.preventDefault();
    router.push("/webinar");
  };

  let video;
  if (from === "webinar") {
    video = (
      <video
        className="latar"
        id="sikuen"
        autoPlay
        muted
        onEnded={() => window.showHotspots()}
      >
        <source
          src={`${props.base}/videos/06 - sikuen workshop reverse.mp4`}
          type="video/mp4"
        />
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
          src={`${props.base}/videos/04 - sikuen booth reverse.mp4`}
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
        <source
          src={`${props.base}/videos/02 - sikuen hall.mp4`}
          type="video/mp4"
        />
      </video>
    );
  }

  return (
    <>
      <Head>
        <title>Main Hall - Virtual Booth</title>
        <meta name="description" content="PKBKULIT - FKUWKS" />
      </Head>

      {video}

      <div id="sikuen2" className="hide">
        <img
          id="latar"
          className="latar"
          src={`${props.base}/images/hall.jpeg`}
        />
        <div id="hotspots">
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Bernofarm')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-bernofarm.png"
            top="17%"
            left="20%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Ikapharma')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-ikapharma.png"
            top="15%"
            left="33%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Ferron')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-ferron.png"
            top="12%"
            right="45%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Interbat')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-interbat.png"
            top="10%"
            right="30%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Proderma')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-proderma.png"
            top="34%"
            left="25%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Roi Surya Prima')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-roi.png"
            top="31%"
            left="43%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Surya Dermato Medica')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-sdm.png"
            top="29%"
            right="35%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Hypens')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-hyphens.png"
            top="25%"
            right="20%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Derma XP')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-dermaxp.png"
            top="60%"
            left="42%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Galaderma')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-galaderma.png"
            top="54%"
            right="28%"
          />
          <HotspotImg
            onClick={(e) => clickBooth(e, 'Bioderma')}
            imgSrc="https://cdn.fkuwks.com/images/sponsors/logo-bioderma.png"
            top="50%"
            right="8%"
          />
          <Hotspot
            onClick={(e) => toWebinar(e)}
            iconName="bi-person-video2"
            top="76%"
            left="16%"
          />
        </div>
      </div>
    </>
  );
}
