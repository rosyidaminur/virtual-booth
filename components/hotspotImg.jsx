/* eslint-disable @next/next/no-img-element */
/**
 * This component for marking the hotspot.
 * property imgSrc, onClick, top, bottom, right, left
 */
const HotspotImg = (props) => {
  const imgSrc = props.imgSrc;
  const onClick = props.onClick;
  const top = props.top !== undefined ? `${props.top}` : "unset";
  const bottom = props.bottom !== undefined ? `${props.bottom}` : "unset";
  const right = props.right !== undefined ? `${props.right}` : "unset";
  const left = props.left !== undefined ? `${props.left}` : "unset";

  return (
    <>
      <a
        onClick={onClick}
        className="hotspot-img"
        style={{ top: top, bottom: bottom, right: right, left: left }}
      >
        <span>
          <img src={imgSrc} alt="" />
        </span>
      </a>
    </>
  );
};

export default HotspotImg;