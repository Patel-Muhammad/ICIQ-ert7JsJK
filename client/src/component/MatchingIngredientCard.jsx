import React from 'react';

const MatchingIngredientsCard = ({ matchingIngredients }) => {
  return (
    <div className="matching-ingredients-card">
      <h3>Matching Ingredients</h3>
      {matchingIngredients && matchingIngredients.length > 0 ? (
        matchingIngredients.map((ingredient, index) => (
          <div key={index} className="ingredient-item-card">
            <div className="ingredient-item-header">
              <h4>{ingredient.name}</h4>
            </div>
            <div className="ingredient-item-details">
              <p><strong>Description:</strong> {ingredient.description}</p>
              <p style={{display:"flex"}}>
                <strong>Health Impact:</strong> <p style={{ backgroundColor: getHealthImpactColor(ingredient.health_impact), padding:"2px 5px", color:"white", borderRadius:"5px" }}>{ingredient.health_impact}</p>
              </p>
              <p><strong>Rating:</strong> {ingredient.rating}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No matching ingredients found.</p>
      )}
    </div>
  );
};

const getHealthImpactColor = (healthImpact) => {
  // Customize the conditions based on your requirements
  if (healthImpact.toLowerCase() === 'unhealthy') {
    return 'red';
  } else if (healthImpact.toLowerCase() === 'controversial') {
    return 'darkorange';
  } else {
    return 'green';
  }
};

export default MatchingIngredientsCard;
