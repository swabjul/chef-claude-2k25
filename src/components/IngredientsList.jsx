export default function IngredientsList(props) {

  return (
    <section>
      <h2 className="add-ingredients-heading">Ingredients on hand:</h2>
      <ul className="add-ingredient-list">
        {props.list}
      </ul>

      {
        props.list.length > 3 &&
          <section className="generate-recipe">
            <div className="generate-recipe__text">
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <div className="generate-recipe__button">
              <button onClick={props.toggle}>Get a recipe</button>
            </div>
          </section>
      }

    </section>
  )
}