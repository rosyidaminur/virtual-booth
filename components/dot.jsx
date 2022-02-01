import axios from "axios";
/**
 * This component for marking the DOT hotspot.
 * property iconName, onClick, top, bottom, right, left
 */
const Dot = (props) => {
  const iconName = props.iconName; //use https://icons.getbootstrap.com/
  // const token =
  const onClick = props.onClick;
  const popup = props.popup == "" ? 'notfound.png' : props.popup;
  const top = props.top !== undefined ? `${props.top}` : "unset";
  const bottom = props.bottom !== undefined ? `${props.bottom}` : "unset";
  const right = props.right !== undefined ? `${props.right}` : "unset";
  const left = props.left !== undefined ? `${props.left}` : "unset";

  const visitCount = (code,urut) => {
    onClick
    if(code && urut){
      const data ={ "sponsorid":code, "nourut": urut }
      axios.post(
        process.env.BASE_URL + "/view-file",data,
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
        // onClick={onClick}
        onClick={(e) => visitCount(props.sponsorcode,props.nourut)}
        href={popup}
        className={popup ? "iframe-popup dot" : "dot"}
        style={{ top: top, bottom: bottom, right: right, left: left }}
      >
        <i className={iconName}></i>
      </a>
    </>
  );
};

export default Dot;
