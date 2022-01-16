import { useEffect, useState } from "react";
import popupStyles from "./popup.module.css";
import PropTypes from "prop-types";

const Popup = (props) => {
  const [show, setShow] = useState(false);
  const width = props.width !== undefined ? `${props.width}` : "70%";
  const height = props.height !== undefined ? `${props.height}` : "70%";

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup} style={{width: width, height: height}}>
        <h3>{props.title}</h3>
        <span className={popupStyles.close} onClick={closeHandler}>
        <i className="bi bi-x-circle"></i>
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Popup;
