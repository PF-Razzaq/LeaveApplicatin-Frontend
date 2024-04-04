import React, { useState } from "react";

const arr = ["Pak", "Ind", "Afg"];

const ArrayQuestion = () => {
  const [arrayCopy, setArrayCopy] = useState(arr);
  const [checkedItems, setCheckedItems] = useState(
    new Array(arr.length).fill(false)
  );

  const handleCheck = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleDelete = (index) => {
    const filteredArr = arrayCopy.filter((_, i) => i !== index);
    setArrayCopy(filteredArr);
  };

  return (
    <>
      <div>
        {arrayCopy.map((country, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => handleCheck(index)}
            />
            {country}{" "}
            {!checkedItems[index] && (
              <button onClick={() => handleDelete(index)}>Delete</button>
            )}
          </li>
        ))}
      </div>
    </>
  );
};

export default ArrayQuestion;
