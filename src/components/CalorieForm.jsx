import React, { useState } from "react";

const CalorieForm = ({
  onSubmit,
  dailyCalorieGoal,
  onDailyCalorieGoalChange,
}) => {
  const [mealName, setMealName] = useState("");
  const [caloriesConsumed, setCaloriesConsumed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      mealName,
      caloriesConsumed: parseFloat(caloriesConsumed),
    });
    setMealName("");
    setCaloriesConsumed("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Meal Name:
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Calories Consumed in a Meal:
        <input
          type="number"
          value={caloriesConsumed}
          onChange={(e) => setCaloriesConsumed(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Daily Calorie Goal:
        <input
          type="number"
          value={dailyCalorieGoal}
          onChange={(e) => onDailyCalorieGoalChange(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Meal</button>
    </form>
  );
};

export default CalorieForm;
