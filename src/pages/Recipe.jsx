import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [selectedButton, setSelectedButton] = useState("instructions");

  useEffect(() => {
    picksData(id);
  }, [id]);

  const picksData = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=1db27816f3f84f5191960da94a87e429
`
    );
    const data = await api.json();
    setRecipe(data);
  };

  const toggleDisplay = (e) => {
    setSelectedButton(e.target.name);
  };

  return (
    <div>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div>
        <button name="instructions" onClick={toggleDisplay}>
          Intructions
        </button>
        <button name="ingredients" onClick={toggleDisplay}>
          Ingredients
        </button>
        {selectedButton === "instructions" ? (
          <div>
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          </div>
        ) : (
          <div>
            {recipe && recipe.extendedIngredients && (
              <ul>
                {recipe.extendedIngredients.map((instructions, index) => (
                  <li key={index}>{instructions.original}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
