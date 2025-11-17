const RecipeModal = ({recipe, addToCalendar, dateInput}) => {
  return (
    <>
        <h2>Ajouter une recette au planning</h2>
        <p>{recipe.strMeal}</p>
        <form onSubmit={addToCalendar}>
            <input type="datetime-local" ref={dateInput} />
            <button>Ajouter</button>
        </form>
    </>
  )
}
export default RecipeModal