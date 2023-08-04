import React, { useState, useEffect } from "react";
import CalorieForm from "./components/CalorieForm";
import CalorieList from "./components/CalorieList";

const App = () => {
  const [calorieEntries, setCalorieEntries] = useState(() => {
    const savedCalorieEntries = localStorage.getItem("calorieEntries");
    return savedCalorieEntries ? JSON.parse(savedCalorieEntries) : [];
  });
  const [dailyCalorieGoal, setDailyCalorieGoal] = useState(() => {
    const savedDailyCalorieGoal = localStorage.getItem("dailyCalorieGoal");
    return savedDailyCalorieGoal ? parseFloat(savedDailyCalorieGoal) : "";
  });
  const [totalCaloriesConsumed, setTotalCaloriesConsumed] = useState(() => {
    const total = calorieEntries.reduce(
      (total, entry) => total + entry.caloriesConsumed,
      0
    );
    return total;
  });

  useEffect(() => {
    localStorage.setItem("calorieEntries", JSON.stringify(calorieEntries));
    localStorage.setItem("dailyCalorieGoal", dailyCalorieGoal.toString());

    if (totalCaloriesConsumed >= dailyCalorieGoal) {
      alert("Congratulations! You have reached your daily calorie goal!");
    }
  }, [calorieEntries, dailyCalorieGoal, totalCaloriesConsumed]);

  const handleAddMeal = ({ mealName, caloriesConsumed }) => {
    setCalorieEntries([...calorieEntries, { mealName, caloriesConsumed }]);
    setTotalCaloriesConsumed((prevTotal) => prevTotal + caloriesConsumed);
  };

  const handleDeleteMeal = (index) => {
    const updatedCalorieEntries = [...calorieEntries];
    const deletedCalories = updatedCalorieEntries.splice(index, 1)[0]
      .caloriesConsumed;
    setCalorieEntries(updatedCalorieEntries);
    setTotalCaloriesConsumed((prevTotal) => prevTotal - deletedCalories);
  };

  const handleDailyCalorieGoalChange = (value) => {
    setDailyCalorieGoal(parseFloat(value));
  };

  return (
    <div>
      <h1>Calorie Tracker App</h1>
      <h3>Daily Calorie Goal: {dailyCalorieGoal}</h3>
      <CalorieForm
        onSubmit={handleAddMeal}
        dailyCalorieGoal={dailyCalorieGoal}
        onDailyCalorieGoalChange={handleDailyCalorieGoalChange}
      />
      <CalorieList
        calorieEntries={calorieEntries}
        onDelete={handleDeleteMeal}
      />
      <p>Total Calories Consumed Today: {totalCaloriesConsumed}</p>
    </div>
  );
};

export default App;
