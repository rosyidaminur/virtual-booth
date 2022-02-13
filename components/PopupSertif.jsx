import Popup from "./Popup/popup";
import { jsPDF } from "jspdf";
import { Button } from "react-bootstrap";
import getConfig from "next/config";

/**
 * Component popup Sertifikat information
 */
const PopupSertif = (props) => {
  const { publicRuntimeConfig } = getConfig();
  const onClose = props.onClose;
  const show = props.show;
  const jenisPeserta = props.jp;
  const name = props.name;

  async function generatePdf(j, d) {
    const doc = new jsPDF("l");
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    doc.setFontSize(40);
    doc.addImage(d, "JPEG", 0, 0, width, height);
    doc.setFont("Time-Roman", "italic");
    doc.setFontSize(30);
    doc.setTextColor("#474745");
    doc.text(name, 153, 90, "center");

    doc.output(
      "save",
      "Sertifikat " + j + " FKUWKS-PKBKULIT " + name + " 2022.pdf"
    );
  }

  return (
    <>
      <Popup
        onClose={onClose}
        show={show}
        title="Daftar Sertifikat"
      >
        <p>
          Sertifikat Simposium FKUWKS - PKBKULIT 2022
          <br />
          <Button
            onClick={(e) =>
              generatePdf(
                "Simposium",
                publicRuntimeConfig.base + "/sertifikat/simposium.jpg"
              )
            }
          >
            Unduh Sertifikat
          </Button>
        </p>
        {jenisPeserta === "Pameran, Simposium dan Workshop" ? <p>
          Sertifikat Workshop FKUWKS - PKBKULIT 2022
          <br />
          <Button
            onClick={(e) =>
              generatePdf(
                "Workshop",
                publicRuntimeConfig.base + "/sertifikat/workshop.jpg"
              )
            }
          >
            Unduh Sertifikat
          </Button>
        </p> : ''}
      </Popup>
    </>
  );
};

export default PopupSertif;
