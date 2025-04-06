import { useState } from "react";

const InterestInput = ({
  interestInput,
  setInterestInput,
  interests,
  setInterests,
}) => {
  const handleAddInterest = () => {
    const trimmed = interestInput.trim();
    if (trimmed && !interests.includes(trimmed)) {
      setInterests([...interests, trimmed]);
      setInterestInput("");
    }
  };

  const handleRemoveInterest = (index) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2 col-span-1 md:col-span-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={interestInput}
          onChange={(e) => setInterestInput(e.target.value)}
          placeholder="e.g. Gaming, Reading, Trekking"
          className="p-3 bg-[#e0e5ec] text-[#222] rounded-lg neumorphism w-full"
        />
        <button
          type="button"
          onClick={handleAddInterest}
          className=" px-4 py-2 bg-[#e0e5ec] text-[#222] text-2xl rounded-lg neumorphism hover:neumorphism-dark"
        >
          +
        </button>
      </div>

      {/* Display added interests */}
      <div className="flex flex-wrap gap-2">
        {interests.map((item, index) => (
          <span
            key={index}
            className=" bg-[#e0e5ec] text-[#222] rounded-lg neumorphism px-3 py-1 flex items-center gap-2"
          >
            {item}
            <button
              type="button"
              onClick={() => handleRemoveInterest(index)}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default InterestInput;
