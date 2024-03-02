import React from 'react';
import { useLocation } from 'react-router-dom';
import MatchingIngredientsCard from '../component/MatchingIngredientCard';  // Update the path based on your project structure
import StarRating from '../component/start';

const UploadResults = () => {
  const location = useLocation();
  const resultData = location.state?.resultData || null;
  const selectedFile = location.state?.selectedFile || null;

  return (
    <div className='upload-result'>
      <h2>Upload Results</h2>
      {resultData ? (
        <div>
          {/* Display the selected image */}
          {selectedFile && (
            <div>
              <p>Selected Image:</p>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Image"
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            </div>
          )}

          {/* Display individual properties of resultData as needed */}
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'rgb(99 195 167)', display:'flex', gap:"20px", alignItems:"center" }}>
            Overall Rating: {parseFloat(resultData.overall_rating).toFixed(2)}
            <StarRating rating={parseFloat(resultData.overall_rating)} />
          </p>

          <MatchingIngredientsCard matchingIngredients={resultData.matching_ingredients} />
        </div>
      ) : (
        <p>No result data available.</p>
      )}
    </div>
  );
};

export default UploadResults;
