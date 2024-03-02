import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbTextScan2 } from "react-icons/tb";
import { HashLoader } from "react-spinners";

const CardIcon = ({ icon, text, myfun }) => {
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleClick = async () => {
    try {
      // Create an input element to trigger file selection
      const inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.accept = "image/*";

      // Handle file selection
      inputElement.addEventListener("change", async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
          try {
            setLoading(true); // Set loading to true when starting the API request

            const response = await sendApiRequest(selectedFile);
            console.log("API response:", response);

            // Store the result data in state
            setResultData(response);

            // Navigate to the result page with state
            navigate("/result", { state: { resultData: response, selectedFile } });
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setLoading(false); // Set loading to false when the API request is completed
          }
        }
      });

      // Trigger the file selection dialog
      inputElement.click();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendApiRequest = async (file) => {
    const form = new FormData();
    form.append('image', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/ocr', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="card-wrapper" onClick={handleClick}>
      <div className="icon-wrapper">{icon}</div>
      <p className="disc">{text}</p>
      {loading && (
        <div className="loader-overlay">
          <HashLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};

export default CardIcon;
