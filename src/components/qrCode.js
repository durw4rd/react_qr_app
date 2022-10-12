import QRCode from "react-qr-code";
import { withLDConsumer } from "launchdarkly-react-client-sdk";

//Change QRURL to the URL where you'll be hosting this app
// const QRURL = "https://durw4rd.github.io/react_qr_app/";

const qrCodeHome = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactQRCode");
  
  return showFeature ? (
    <div>
      <br />
      <span style={{ color: 'black' }}><center>Scan me!</center></span>
      <div className="qr-wrapper">
        <QRCode value={process.env.REACT_APP_QURL} />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(qrCodeHome);
