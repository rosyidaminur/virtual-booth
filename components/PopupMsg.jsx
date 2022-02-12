import { Button } from "react-bootstrap";
import Popup from "./Popup/popup";

/**
 * Component popup Message
 */
const PopupMsg = (props) => {
  const onClose = props.onClose;
  const msg = props.msg;
  const zoomStatus = props.zoomStatus;
  const urlZoom = props.urlZoom;

  return (
    <>
      <Popup
            onClose={onClose}
            show={msg !== ""}
            title="Perhatian"
          >
            {zoomStatus ? (
              <a href={urlZoom} target="_blank" rel="noopener noreferrer">
                <Button>Join Zoom </Button>
              </a>
            ) : (
              <p>{msg}</p>
            )}
          </Popup>
    </>
  );
};

export default PopupMsg;
