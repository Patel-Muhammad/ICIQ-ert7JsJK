import React from "react";

interface CircularRatingProps {
  rating: number;
}

const CircularRating: React.FC<CircularRatingProps> = ({ rating }) => {
  const calculatePerimeterColor = (): string => {
    if (rating === 5) {
      return "border-green-500";
    } else if (rating === 4) {
      return "border-orange-500";
    } else if (rating === 3) {
      return "border-yellow-500";
    } else if (rating === 2 || rating === 1) {
      return "border-red-500";
    }
    return "border-gray-400"; // Default color for other values
  };

  return (
    <div className="relative inline-block">
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full border-5 ${calculatePerimeterColor()}`}
      >
        <span className="text-lg font-bold">{rating}</span>
      </div>
    </div>
  );
};

export default CircularRating;
