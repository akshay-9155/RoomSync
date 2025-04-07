import { useState } from "react";

const ArrayInputField = ({
  tag,
  setTag,
  tagArray,
  setTagArray,
  placeholder
}) => {
  const handleAddInterest = () => {
    const trimmed = tag.trim();
    if (trimmed && !tagArray.includes(trimmed)) {
      setTagArray([...tagArray, trimmed]);
      setTag("");
    }
  };

  const handleRemoveInterest = (index) => {
    setTagArray(tagArray.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2 col-span-1 md:col-span-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder={placeholder}
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

      {/* Display added tagArray */}
      <div className="flex flex-wrap gap-2">
        {tagArray.map((item, index) => (
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

export default ArrayInputField;
