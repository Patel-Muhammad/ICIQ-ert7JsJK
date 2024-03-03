import React, { useState, useRef, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import { useNavigate } from 'react-router-dom';

const TextScanner = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [scannedText, setScannedText] = useState('');
  const navigate = useNavigate();
  const videoRef = useRef();

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: 'environment',
        },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
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

  const scanImage = () => {
    if (imageSrc) {
      Tesseract.recognize(imageSrc, 'eng', { logger: (info) => console.log(info) }).then(
        ({ data: { text } }) => {
          setScannedText(text);
          sendTextToApi(text);
        }
      );
    } else {
      console.error('No image selected for scanning');
    }
  };

  const sendTextToApi = async (text) => {
    try {
      const response = await fetch('http://13.51.200.158:5000/api/text_match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      // Handle the API response as needed
      console.log('API response:', responseData);

      // Navigate to the result page with the response data
      navigate('/result', { state: { resultData: responseData, imageSrc} });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Cleanup function when the component unmounts
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="scanner-container">
      <h2 className="scanner-heading">Image Text Scanner</h2>
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
          <div>
            <button onClick={takePhoto} className="photo-button">
              Take Photo
            </button>
            <button onClick={startCamera} className="start-camera-button">
              Start Camera
            </button>
          </div>
        </>
      )}
      {scannedText && (
        <div className="scanned-text">
          <h3>Scanned Text:</h3>
          <p>{scannedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextScanner;
