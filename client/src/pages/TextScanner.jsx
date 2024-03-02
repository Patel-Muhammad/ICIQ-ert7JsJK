import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Tesseract from "tesseract.js";
const TextScanner = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [scannedText, setScannedText] = useState("");
  const videoRef = useRef();
  const [loading, setLoading] = useState(false); 
  const [resultData, setResultData] = useState(null); 
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const takePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg");
    setImageSrc(dataUrl);
    stopCamera();
  };

  const handleClick = async () => {
    try {
      setLoading(true);
  
      const blob = await fetchImageBlob(imageSrc);
      const response = await sendApiRequest(blob);
  
      setResultData(response);
      console.log(response)
      navigate("/result", {
        state: { resultData: response, selectedFile: blob },
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const sendApiRequest = async (file) => {
    const form = new FormData();
    form.append("image", file, "image.jpg");
  
    try {
      const response = await fetch("http://127.0.0.1:5000/api/ocr", {
        method: "POST",
        body: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };
  
  
  
  const fetchImageBlob = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };
  

  const scanImage = () => {
    if (imageSrc) {
      Tesseract.recognize(imageSrc, "eng", {
        logger: (info) => console.log(info),
      }).then(({ data: { text } }) => {
        setScannedText(text);
        console.log("Text:", scannedText);
      });
    } else {
      console.error("No image selected for scanning");
    }
  };

  return (
    <div className="scanner-container">
      <h2 className="scanner-heading">Image Scanner</h2>
      {imageSrc ? (
        <>
          <img src={imageSrc} alt="Scanned" className="scanned-image" />
          <button onClick={handleClick} className="scan-button">
            Scan Image
          </button>
        </>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            className="webcam-preview"
          ></video>
          <div className="button-div">
            <button onClick={takePhoto} className="photo-button">
              Take Photo
            </button>
            <button onClick={startCamera} className="start-camera-button">
              Start Camera
            </button>
          </div>
          {loading && (
            <div className="loader-overlay">
              <HashLoader color="#36d7b7" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TextScanner;
