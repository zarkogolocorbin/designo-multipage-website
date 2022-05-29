import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("./LocationMaps.js"), { ssr: false });
import styles from "../../styles/location.module.css";

export default function Location() {
  return (
    <section className={styles.locations}>
      <div className={styles["first-section"]}>
        <div className={styles.maps}>
          <MapComponent coords={[43.64818, -79.37575]} />
        </div>
        <div className={styles.content}>
          <h2>Canada</h2>
          <div className={styles["content-info"]}>
            <div className={styles.address}>
              <p style={{ fontWeight: "bold" }}>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className={styles.contact}>
              <p style={{ fontWeight: "bold" }}>Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["second-section"]}>
        <div className={styles.maps}>
          <MapComponent coords={[-30.32953, 149.78819]} />
        </div>
        <div className={styles.content}>
          <h2>Austraila</h2>
          <div className={styles["content-info"]}>
            <div className="address">
              <p style={{ fontWeight: "bold" }}>Designo Central Office</p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div className={styles.contact}>
              <p style={{ fontWeight: "bold" }}>Contact</p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["third-section"]}>
        <div className={styles.maps}>
          <MapComponent coords={[53.84351485137656, -1.3697314992689997]} />
        </div>
        <div className={styles.content}>
          <h2 style={{ fontSize: "32px" }}>United Kingdom</h2>
          <div className={styles["content-info"]}>
            <div className="address">
              <p style={{ fontWeight: "bold" }}>Designo Central Office</p>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div className={styles.contact}>
              <p style={{ fontWeight: "bold" }}>Contact</p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
