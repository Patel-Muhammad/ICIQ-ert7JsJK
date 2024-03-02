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
              <p><strong>Health Impact:</strong> {ingredient.health_impact}</p>
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

export default MatchingIngredientsCard;
