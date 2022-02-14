import { Accordion } from "react-bootstrap";
import Popup from "./Popup/popup";
import Video from "./Video";

/**
 * Component popup winners information
 */
const PopupWinners = (props) => {
  const onClose = props.onClose;
  const show = props.show;

  return (
    <>
      <Popup
        onClose={onClose}
        show={show}
        title="Daftar Pemenang Door Prize"
      >
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Pemenang Hari ke 1</Accordion.Header>
            <Accordion.Body>
              <p>
                Pemenang:
                <br />
                1. Fesdia Sari
                <br />
                2. Erfin Dimas Fernanda
                <br />
                3. Ida Kurniawati
                <br />
                4. dr. Luh Putu Mahatya Valdini Putri, S.Ked
                <br />
                5. dr. Andi Anwar Arsyad, Sp.KK
              </p>
              <p>
                Selamat kepada pemenang, bagi yang namanya tertera di atas
                dipersilahkan menghubungi panitia untuk klaim hadiah
                <br />
                Putri (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/6285954135553"
                  target="_blank"
                  rel="noreferrer"
                >
                  085954135553
                </a>
                )
              </p>
              <p>Terimakasih</p>

              {show ? (
                <Video
                  videoSrc={`https://iframe.mediadelivery.net/embed/20390/c802b71e-6338-4bdb-aa92-ff0e23b12897?autoPlay=false`}
                />
              ) : (
                ""
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pemenang Hari ke 2</Accordion.Header>
            <Accordion.Body>
              <p>
                Pemenang:
                <br />
                1. dr. Gede Agus Nusantara, SpKK, FINSDV
                <br />
                2. dr. Frea Astrilia Tamarina, SpKK
                <br />
                3. dr. Agatha Anindhita, M.Ked.Klin, SpDV
                <br />
                4. Prasti Adhi Dharmasanti, dr., SpKK., FINSDV
                <br />
                5. Dr. dr. Nanda Earlia, SpKK, FINSDV, FAADV
              </p>
              <p>
                Selamat kepada pemenang, bagi yang namanya tertera di atas
                dipersilahkan menghubungi panitia untuk klaim hadiah
                <br />
                Putri (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/6285954135553"
                  target="_blank"
                  rel="noreferrer"
                >
                  085954135553
                </a>
                )
              </p>
              <p>Terimakasih</p>

              {show ? (
                <Video
                  videoSrc={`https://iframe.mediadelivery.net/embed/20390/59db3866-a446-400b-ba9c-9974165d0f12?autoPlay=false`}
                />
              ) : (
                ""
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Pemenang Hari ke 3</Accordion.Header>
            <Accordion.Body>
              <p>
                Pemenang:
                <br />
                1. dr. Julia Melisa, SpKK
                <br />
                2. dr. Reika Ravenski Novsa
                <br />
                3. dr Wiwiek Andayani
                <br />
                4. dr. Lindayani H, Sp.KK
                <br />
                5. Reghina Salsabila Ayuantia Nainatika
              </p>
              <p>
                Selamat kepada pemenang, bagi yang namanya tertera di atas
                dipersilahkan menghubungi panitia untuk klaim hadiah
                <br />
                Putri (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/6285954135553"
                  target="_blank"
                  rel="noreferrer"
                >
                  085954135553
                </a>
                )
              </p>
              <p>Terimakasih</p>

              {show ? (
                <Video
                  videoSrc={`https://iframe.mediadelivery.net/embed/20390/33a6d0cb-58c9-46be-9c02-2ddc44c1a345?autoPlay=false`}
                />
              ) : (
                ""
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Pemenang Hari ke 4</Accordion.Header>
            <Accordion.Body>
              <p>
                Pemenang:
                <br />
                1. dr. Eva Aguswulandari Suwito
                <br />
                2. dr. Meily Rizkinta Putri
                <br />
                3. dr. Dyah Ratri Anggarini, SpDV
                <br />
                4. Liliani Labitta
                <br />
                5. dr. Hasrulliana Ningsih Wahyuli, SpKK, FINSDV
              </p>
              <p>
                Selamat kepada pemenang, bagi yang namanya tertera di atas
                dipersilahkan menghubungi panitia untuk klaim hadiah
                <br />
                Roosi (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/6285755952199"
                  target="_blank"
                  rel="noreferrer"
                >
                  085755952199
                </a>
                )
              </p>
              <p>Terimakasih</p>

              {show ? (
                <Video
                  videoSrc={`https://iframe.mediadelivery.net/embed/20390/4aaf9a9c-ed33-4687-a419-362b43834736?autoPlay=false`}
                />
              ) : (
                ""
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Pemenang Hari ke 5</Accordion.Header>
            <Accordion.Body>
              <p>
                Pemenang:
                <br />
                1. dr. Rudy Wartono, SpKK
                <br />
                2. Galuh Dyah Puspitasari
                <br />
                3. dr. Jasmin Thalib, SpKK, FINSDV
                <br />
                4. dr. Sri Agustina S., SpKK
                <br />
                5. dr. Bertha Susanna Syah, SpKK
              </p>
              <p>
                Selamat kepada pemenang, bagi yang namanya tertera di atas
                dipersilahkan menghubungi panitia untuk klaim hadiah
                <br />
                Farizah (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/62895396120289"
                  target="_blank"
                  rel="noreferrer"
                >
                  0895396120289
                </a>
                )
              </p>
              <p>Terimakasih</p>

              {show ? (
                <Video
                  videoSrc={`https://iframe.mediadelivery.net/embed/20390/e8c208d2-d4fc-4fc7-a277-26d51f1174b3?autoPlay=false`}
                />
              ) : (
                ""
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Pemenang Hari ke 6</Accordion.Header>
            <Accordion.Body>
              <i>Info pemenang belum tersedia</i>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Pemenang Lomba TikTok Edukasi PKB 2 FK UWKS
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Juara I - dr. Rizki Hapsari Nugraha
                <br />
                Juara II - dr. Linda Purwasih
                <br />
                Juara III - dr. Dwi Intan
                <br />
                Juara Favorit - dr. Najwa Amalia
                <br />
              </p>
              <p>
                Silahkan menghubungi contact person
                <br />
                Farizah (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/62895396120289"
                  target="_blank"
                  rel="noreferrer"
                >
                  0895396120289
                </a>
                )
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Pemenang Post Test Simposium</Accordion.Header>
            <Accordion.Body>
              <p>
                Juara I - dr. Desiana Widityaning Sari, Sp.DV, M.Ked.Klin
                <br />
                Juara II - dr. Alfadea Irbah Allizaputri, AIFO-K
                <br />
                Juara III - dr. Dinar Witasari, Sp.DV
                <br />
              </p>
              <p>
                Silahkan menghubungi contact person
                <br />
                Farizah (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/62895396120289"
                  target="_blank"
                  rel="noreferrer"
                >
                  0895396120289
                </a>
                )
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Pemenang Post Test Workshop Dermatitis Atopik</Accordion.Header>
            <Accordion.Body>
              <p>
                Juara I - dr Pretty Clarresa
                <br />
                Juara II - dr. Dinar Witasari, Sp. KK
                <br />
                Juara III - dr. Felicia Emiliana Hosea
                <br />
              </p>
              <p>
                Silahkan menghubungi contact person
                <br />
                Farizah (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/62895396120289"
                  target="_blank"
                  rel="noreferrer"
                >
                  0895396120289
                </a>
                )
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Pemenang Post Test Workshop Akne</Accordion.Header>
            <Accordion.Body>
              <p>
                Juara I - dr. Istiana Fiatiningsih, Sp. KK
                <br />
                Juara II - dr. Nathasia Ayunda Pardina, Sp. DV
                <br />
                Juara III - dr. Dyah Ratri Anggarini, Sp. DV
                <br />
              </p>
              <p>
                Silahkan menghubungi contact person
                <br />
                Farizah (WA:{" "}
                <a
                  className="link-info"
                  href="https://wa.me/62895396120289"
                  target="_blank"
                  rel="noreferrer"
                >
                  0895396120289
                </a>
                )
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Popup>
    </>
  );
};

export default PopupWinners;
