import { useState } from "react";

export default function Main() {




  const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))



  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")

    setIngredients(prevIngredients => [...prevIngredients, newIngredient])

    // console.log(ingredients)
    clearInput()
  }

  function clearInput() {
    const inputText = document.querySelector(".add-ingredient-input input")
    inputText.value = ""
  }



  return (
    <main>
      <div className="main__inner">
        <form className="add-ingredient-form" onSubmit={handleSubmit}>
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