import { useState } from "react";

export default function Main() {


  const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))



  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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

        <h2 className="add-ingredients-heading">Ingredients on hand:</h2>
        <ul className="add-ingredient-list">
          {ingredientListItems}
        </ul>

      </div>










    </main>
  )
}