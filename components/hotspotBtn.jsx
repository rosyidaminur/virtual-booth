/**
 * This component for marking the hotspot.
 * property iconName, onClick, top, bottom, right, left
 */
const HotspotBtn = (props) => {
  const text = props.text;
  const onClick = props.onClick;
  const popup = props.popup;
  const top = props.top !== undefined ? `${props.top}` : "unset";
  const bottom = props.bottom !== undefined ? `${props.bottom}` : "unset";
  const right = props.right !== undefined ? `${props.right}` : "unset";
  const left = props.left !== undefined ? `${props.left}` : "unset";

  return (
    <>
      <a
        onClick={onClick}
        href={popup}
        className="btn-ori"
        style={{ top: top, bottom: bottom, right: right, left: left }}
      >
        {text}
      </a>
    </>
  );
};

export default HotspotBtn;
