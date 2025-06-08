import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { RewardContext } from '../context/RewardContext';

const Rewards = () => {
  const { rewardPoints } = useContext(RewardContext);

  const recent = [
    { activity: 'Booked a ride on June 8', points: 20 },
    { activity: 'Referred a friend', points: 50 },
  ];

  const redeemOptions = [
    { label: '₹50 Off Coupon', cost: 200 },
    { label: 'Free Ride (within 5km)', cost: 300 },
  ];

  return (
    <motion.div
      className="p-8 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center drop-shadow-md">
        Your Rewards
      </h1>

      {/* Points Balance */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-200">
        <p className="text-xl font-semibold text-gray-900">
          Points Balance:
          <span className="ml-3 text-3xl font-extrabold text-green-600 drop-shadow-sm">
            {rewardPoints}
          </span>
        </p>
      </div>

      {/* Recent Activity */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-5 border-b border-gray-200 pb-3">
          Recent Activity
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 font-medium">
          {recent.map((item, i) => (
            <li key={i} className="flex justify-between items-center">
              <span>{item.activity}</span>
              <span className="text-green-600 font-semibold">+{item.points} pts</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Redeem Options */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
          Redeem Rewards
        </h2>
        <div className="flex flex-col gap-4">
          {redeemOptions.map((option, i) => (
            <button
              key={i}
              disabled={rewardPoints < option.cost}
              className={`w-full py-3 rounded-xl text-white text-lg font-semibold
                transition-all duration-300
                ${
                  rewardPoints >= option.cost
                    ? "bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-400/50"
                    : "bg-indigo-300 cursor-not-allowed"
                }
              `}
            >
              {option.label} — {option.cost} pts
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Rewards;
