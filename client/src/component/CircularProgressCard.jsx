import React, { useState, useEffect } from 'react';

const CircularProgressCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Start');
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState(10);

  useEffect(() => {
    let interval;

    if (isLoading) {
      interval = setInterval(() => {
        setValue1((prevValue) => (prevValue < 25 ? prevValue + 1 : prevValue));
      }, 40);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  const getGradientColor = (percentage) => {
    const red = Math.min(255, Math.round((percentage / 25) * 255));
    const green = Math.min(255, Math.round(((25 - percentage) / 25) * 255));
    return `rgb(${red}, ${green}, 0)`;
  };

  const handleButtonClick = () => {
    if (isLoading) {
      setIsLoading(false);
      setButtonLabel('Start');
      setValue1(0);
    } else if (buttonLabel === 'Reset') {
      setButtonLabel('Start');
      setValue1(0);
    } else {
      setIsLoading(true);
      setButtonLabel('Reset');
      // Increment the value by a small amount to prevent abrupt shift
      setValue1((prevValue) => prevValue + 0.1);
    }
  };

  const handleReloadClick = () => {
    setValue2(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <div style={{ position: 'relative', width: '50px', height: '50px' }}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '14px',
            }}
          >
            {value1}%
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: `4px solid ${getGradientColor(value1)}`,
              borderTop: '4px solid transparent',
              animation: `${isLoading ? 'spin 1s linear infinite' : 'none'}`,
            }}
          ></div>
        </div>
        <button onClick={handleButtonClick} style={{ padding: '5px', fontSize: '12px' }}>
          {buttonLabel}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <div style={{ position: 'relative', width: '50px', height: '50px' }}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '14px',
            }}
          >
            {value2}%
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: `4px solid ${getGradientColor(value2)}`,
              borderTop: '4px solid transparent',
            }}
          ></div>
        </div>
        <button onClick={handleReloadClick} style={{ padding: '5px', fontSize: '12px' }}>
          Reload
        </button>
      </div>
    </div>
  );
};

export default CircularProgressCard;
