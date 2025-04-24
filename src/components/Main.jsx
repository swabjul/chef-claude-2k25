import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {

  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);

  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))

  const [recipeShown, setRecipeShown] = useState(false)

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  function toggleRecipeShown() {
    setRecipeShown(prevShown => !prevShown)
  }

  return (
    <main>
      <div className="main__inner">
        <form className="add-ingredient-form" action={addIngredients}>
          <div className="add-ingredient-input">
            <input
              type="text"
              placeholder="e.g. oregano"
              aria-label="add ingredient"
              name="ingredient"
            />
            <button>Add ingredient</button>
          </div>
        </form>

        { ingredients.length > 0 && <IngredientsList 
          list={ingredientListItems}
          toggle={toggleRecipeShown}
        /> }


        { recipeShown && <ClaudeRecipe />}
      </div>










    </main>
  )
}