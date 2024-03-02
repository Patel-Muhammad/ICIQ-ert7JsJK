import React, { useState } from "react";
import Tesseract from "tesseract.js";

const TextScanner = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [scannedText, setScannedText] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const scanImage = () => {
    if (imageSrc) {
      Tesseract.recognize(
        imageSrc,
        'eng',
        { logger: (info) => console.log(info) }
      ).then(({ data: { text } }) => {
        setScannedText(text);
      });
    } else {
      console.error("No image selected for scanning");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Image Text Scanner</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <button
        onClick={scanImage}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Scan Image
      </button>
      {imageSrc && (
        <img src={imageSrc} alt="Scanned" className="mt-4 rounded-md" />
      )}
      {scannedText && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Scanned Text:</h3>
          <p>{scannedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextScanner;
