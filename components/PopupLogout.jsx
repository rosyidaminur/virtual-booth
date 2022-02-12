import Popup from "./Popup/popup";

/**
 * Component popup Logout information
 */
const PopupLogout = (props) => {
  const onClose = props.onClose;
  const show = props.show;
  const logout = props.logout;

  return (
    <>
      <Popup
        width="40%"
        height="30%"
        onClose={onClose}
        show={show}
        title="Keluar"
      >
        <p>Apakah Anda yakin akan meninggalkan Main Hall?</p>
        <div style={{}}>
          <a className="btn-hall" onClick={(e) => onClose()}>
            Tidak
          </a>
          <a className="btn-logout" onClick={(e) => logout()}>
            Ya
          </a>
        </div>
      </Popup>
    </>
  );
};

export default PopupLogout;
