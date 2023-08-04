import React from "react";

const CalorieList = ({ calorieEntries }) => {
  return (
    <ul>
      {calorieEntries.map((entry, index) => (
        <li key={index}>
          Meal: {entry.mealName} - Calories: {entry.caloriesConsumed}
        </li>
      ))}
    </ul>
  );
};

export default CalorieList;
