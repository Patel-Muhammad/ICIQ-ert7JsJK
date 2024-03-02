import React, { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
const TextScanner = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [scannedText, setScannedText] = useState('');
  const videoRef = useRef();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing webcam:', error);
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
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setImageSrc(dataUrl);
    stopCamera();
  };

  const handleScanner = () =>{
    
  }

  const scanImage = () => {
    if (imageSrc) {
      Tesseract.recognize(imageSrc, 'eng', { logger: (info) => console.log(info) }).then(
        ({ data: { text } }) => {
          setScannedText(text);
          console.log('Text:', scannedText);
        }
      );
    } else {
      console.error('No image selected for scanning');
    }
  };

  return (
    <div className="scanner-container">
      <h2 className="scanner-heading">Image Scanner</h2>
      {imageSrc ? (
        <>
          <img src={imageSrc} alt="Scanned" className="scanned-image" />
          <button onClick={scanImage} className="scan-button">
            Scan Image
          </button>
        </>
      ) : (
        <>
          <video ref={videoRef} autoPlay muted className="webcam-preview"></video>
          <div className="button-div">
            <button onClick={takePhoto} className="photo-button">
              Take Photo
            </button>
            <button onClick={startCamera} className="start-camera-button">
              Start Camera
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TextScanner;
