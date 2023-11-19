"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMealIdeas = async (ingredient) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch meal ideas`);
      }
      const data = await response.json();
      console.log('Fetched meal ideas data:', data);
      return data.meals || [];
    } catch (error) {
      console.error(error);
      return [];
    } finally {
      setLoading(false);
    }
  };

const cleanMealName = (name) => {
  const cleanedName = name.split(/,|;/)[0];
  return cleanedName.replace(/[^\x00-\x7F]+/g, '').trim();
};

const loadMealIdeas = async () => {
  if (ingredient && ingredient.trim() !== "") {
    const cleanedIngredient = cleanMealName(ingredient);
    const ideas = await fetchMealIdeas(cleanedIngredient);
    setMeals(ideas);
  }
};

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  let cleanedIngredientName = '';
  if (ingredient) {
    cleanedIngredientName = ingredient.replace(/,.*$/, '').trim();
  }

  return (
    <div>
      <h2 className="font-bold text-2xl">Meal Ideas</h2>
      {ingredient && (
        <h2>
          {meals.length > 0
            ? `Here are some meal ideas using ${cleanedIngredientName}:`
            : `No meal ideas found for ${cleanedIngredientName}`}
        </h2>
      )}
      {!ingredient && <p>Select an item to see meal ideas</p>}
      {ingredient && loading && <p>Loading...</p>}
      {ingredient && meals.length > 0 && (
        <div>
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-indigo-900 rounded-lg p-2 mb-2 w-full max-w-md"
            >
              {meal.strMeal}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}