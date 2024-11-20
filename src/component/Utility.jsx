import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Utility = () => {
  const [inputtext, setinputtext] = useState("");
  const qrRef = useRef();

  const handleChange = (e) => {
    setinputtext(e.target.value);
  };

  //function to handle downloads
  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${inputtext || "qr-code"}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="input-container" id="qr-page">
        <div className="input-box">
          <h1>Enter Text or URL</h1>
          <input
            type="text"
            placeholder="Enter Text or Url"
            value={inputtext}
            onChange={handleChange}
          />
        </div>
        {inputtext && (
          <div className="qr-code-container" ref={qrRef}>
            <QRCodeCanvas
              value={inputtext}
              size={200}
              bgColor='#ffffff'
              fgColor='#000000'
              level="H"
              margin={10}
            />
            <button
              className="butn"
              onClick={handleDownload}
              style={{ marginTop: "10px" }}
            >
              Download as PNG
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Utility;
