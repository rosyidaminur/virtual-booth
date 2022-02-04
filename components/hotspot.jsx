import axios from "axios";
/**
 * This component for marking the hotspot.
 * property iconName, onClick, top, bottom, right, left, sponsorcode, nourut, token
 */
const Hotspot = (props) => {
  const iconName = props.iconName; //use https://icons.getbootstrap.com/
  const onClick = props.onClick;
  const popup = props.popup == "" ? 'notfound.png' : props.popup;
  const top = props.top !== undefined ? `${props.top}` : "unset";
  const bottom = props.bottom !== undefined ? `${props.bottom}` : "unset";
  const right = props.right !== undefined ? `${props.right}` : "unset";
  const left = props.left !== undefined ? `${props.left}` : "unset";

  const visitCount = (code, urut) => {
    onClick
    if (code && urut) {
      const data = { "sponsorid": code, "nourut": urut }
      axios.post(
        process.env.BASE_URL + "/view-file", data,
        { headers: { Authorization: `Bearer ${props.token}` } }
      ).then(function (response) {
      })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  return (
    <>
      <a
        onClick={(e) => visitCount(props.sponsorcode, props.nourut)}
        href={props.type === "List Kontak/WA" ? `${'sales?kontak=' + popup}` : props.type === "Gambar" ? `${'gambar?sos=' + popup}` : popup}
        className={popup ? "iframe-popup hotspot" : "hotspot"}
        style={{ top: top, bottom: bottom, right: right, left: left }}
      >
        <span>
          <i className={iconName}></i>
        </span>
      </a>
    </>
  );
};

export default Hotspot;
