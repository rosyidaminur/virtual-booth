import { Accordion } from "react-bootstrap";
import Popup from "./Popup/popup";
import QnaFive from "./QnA/qnaFive";
import QnaFour from "./QnA/qnaFour";
import QnaOne from "./QnA/qnaOne";
import QnaSix from "./QnA/qnaSix";
import QnaThree from "./QnA/qnaThree";
import Video from "./Video";

/**
 * Component popup QnA information
 */
const PopupQnA = (props) => {
  const onClose = props.onClose;
  const show = props.show;

  return (
    <>
      <Popup
        onClose={onClose}
        show={show}
        title="Daftar Q &amp; A"
      >
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Q &amp; A Sesi 1</Accordion.Header>
            <Accordion.Body>
              <QnaOne />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Q &amp; A Sesi 2</Accordion.Header>
            <Accordion.Body>
              <i>Q &amp; A belum tersedia</i>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Q &amp; A Sesi 3</Accordion.Header>
            <Accordion.Body>
              <QnaThree />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Q &amp; A Sesi 4</Accordion.Header>
            <Accordion.Body>
              <QnaFour />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Q &amp; A Sesi 5</Accordion.Header>
            <Accordion.Body>
              <QnaFive />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Q &amp; A Sesi 6</Accordion.Header>
            <Accordion.Body>
              <QnaSix />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Popup>
    </>
  );
};

export default PopupQnA;
