import React, { useState, useEffect } from 'react';
import CalorieForm from './components/CalorieForm';
import CalorieList from './components/CalorieList';

const App = () => {
  const [calorieEntries, setCalorieEntries] = useState([]);
  const [dailyCalorieGoal, setDailyCalorieGoal] = useState(2000);
  const [totalCaloriesConsumed, setTotalCaloriesConsumed] = useState(0);

  useEffect(() => {
    if (totalCaloriesConsumed >= dailyCalorieGoal) {
      alert('Congratulations! You have reached your daily calorie goal!');
    }
  }, [totalCaloriesConsumed, dailyCalorieGoal]);

  const handleAddMeal = ({ mealName, caloriesConsumed }) => {
    setCalorieEntries([...calorieEntries, { mealName, caloriesConsumed }]);
    setTotalCaloriesConsumed((prevTotal) => prevTotal + caloriesConsumed);
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
      <CalorieList calorieEntries={calorieEntries} />
      <p>Total Calories Consumed Today: {totalCaloriesConsumed}</p>
    </div>
  );
};

export default App;
