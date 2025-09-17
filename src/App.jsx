import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.min.css";

const samsungModels = {
  Phone: {
    "Galaxy S21": "$799",
    "Galaxy S20": "$699",
    "Galaxy Note 20": "$999",
    "Galaxy A71": "$499",
    "Galaxy Z Flip": "$1399"
  },
  Tablet: {
    "Galaxy Tab S7+": "$849",
    "Galaxy Tab S6 Lite": "$349",
    "Galaxy Tab A7": "$229",
    "Galaxy Tab S5e": "$399",
    "Galaxy Fold": "$1999"
  },
  Laptop: {
    "Galaxy Book Flex": "$1349",
    "Galaxy Book Ion": "$1199",
    "Galaxy Chromebook": "$999",
    "Galaxy Book S": "$999",
    "Galaxy Book Flex α": "$849"
  }
};

const App = () => {
  const [device, setDevice] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [models, setModels] = useState([]);
  
  useEffect(() => {
    if (device) {
      setModels(Object.keys(samsungModels[device]));
      setModel("");
      setPrice("");
    } else {
      setModels([]);
      setModel("");
      setPrice("");
    }
  }, [device]);

  useEffect(() => {
    if (device && model) {
      setPrice(samsungModels[device][model]);
    } else {
      setPrice("");
    }
  }, [device, model]);

  return (
    <div className="section" style={{background: "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <form className="box" style={{padding: "2rem", width: "300px"}}>
        <label className="label">Device</label>
        <div className="select is-fullwidth">
          <select value={device} onChange={e => setDevice(e.target.value)}>
            <option value="" disabled>Select a Device</option>
            {Object.keys(samsungModels).map(dev => <option key={dev} value={dev}>{dev}</option>)}
          </select>
        </div>
        <br />
        <label className="label">Model</label>
        <div className="select is-fullwidth">
          <select value={model} onChange={e => setModel(e.target.value)} disabled={!device}>
            <option value="" disabled>{device ? "Select a Model" : "First select a Device"}</option>
            {models.map(mod => <option key={mod} value={mod}>{mod}</option>)}
          </select>
        </div>
        <br />
        <label className="label">Price</label>
        <div className="select is-fullwidth">
          <select value={price} readOnly disabled={!model}>
            <option value="">{model ? price : "First Select a Model"}</option>
          </select>
        </div>
      </form>
    </div>
  );
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(<App />);

export default App;
