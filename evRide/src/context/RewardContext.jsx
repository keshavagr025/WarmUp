// context/RewardContext.js
import React, { createContext, useState } from 'react';

export const RewardContext = createContext();

export const RewardProvider = ({ children }) => {
  const [rewardPoints, setRewardPoints] = useState(0);

  const addRewardPoints = (points) => {
    setRewardPoints(prev => prev + points);
  };

  return (
    <RewardContext.Provider value={{ rewardPoints, addRewardPoints }}>
      {children}
    </RewardContext.Provider>
  );
};
