import { Accordion } from "react-bootstrap";
import Popup from "./Popup/popup";
import Video from "./Video";

/**
 * Component popup Records information
 */
const PopupRecords = (props) => {
  const onClose = props.onClose;
  const show = props.show;
  const recordps = props.recordps;
  const recordps2 = props.recordps2;

  return (
    <>
      <Popup
        onClose={onClose}
        show={show}
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
              {recordps ? (
                <Video
                  videoSrc={`https://iframe.mediadelivery.net/embed/20390/6c12d842-63d7-4849-a5a0-0308565ff470?autoplay=false`}
                />
              ) : (
                <i>Rekaman tidak tersedia</i>
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Rekaman Hari ke 6</Accordion.Header>
            <Accordion.Body>
            {recordps2 ? (
                <Video
                  videoSrc={`https://iframe.mediadelivery.net/embed/20390/3695d14c-f9e5-4f93-8776-f23a91d9f06a?autoplay=false`}
                />
              ) : (
                <i>Rekaman tidak tersedia</i>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Popup>
    </>
  );
};

export default PopupRecords;
