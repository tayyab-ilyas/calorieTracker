import React from 'react';

const CalorieList = ({ calorieEntries, onDelete }) => {
  return (
    <ul class>
      {calorieEntries.map((entry, index) => (
        <li key={index}>
          Meal: {entry.mealName} - Calories: {entry.caloriesConsumed}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CalorieList;
