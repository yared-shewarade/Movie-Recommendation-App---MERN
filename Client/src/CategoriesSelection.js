// src/CategoriesSelection.js
import React, { useState } from 'react';

function CategoriesSelection({ onNext }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="categories-selection">
      <h2>Select Categories</h2>
      <label>
        <input
          type="checkbox"
          value="Action"
          onChange={() => handleCategoryToggle('Action')}
          checked={selectedCategories.includes('Action')}
        />
        Action
      </label>
      {/* Add more checkboxes for other categories */}
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default CategoriesSelection;