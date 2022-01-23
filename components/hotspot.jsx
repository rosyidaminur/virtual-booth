/**
 * This component for marking the hotspot.
 * property iconName, onClick, top, bottom, right, left
 */
const Hotspot = (props) => {
  const iconName = props.iconName;
  const onClick = props.onClick;
  const popup = props.popup == "" ? 'notfound.png' : props.popup;
  const top = props.top !== undefined ? `${props.top}` : "unset";
  const bottom = props.bottom !== undefined ? `${props.bottom}` : "unset";
  const right = props.right !== undefined ? `${props.right}` : "unset";
  const left = props.left !== undefined ? `${props.left}` : "unset";

  return (
    <>
      <a
        onClick={onClick}
        href={popup}
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
