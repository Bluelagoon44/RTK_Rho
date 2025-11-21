import { useEffect, useState } from "react"
import Categories from "./Categories/Categories"
import "./home.css"
import Recipes from "./Recipes/recipes"
import { useOutletContext } from "react-router-dom"
import { useGetRecipesByCategoryQuery } from "../../services/theMealDbApi"

function Home() {
  const [category, setCategory] = useState("Beef")
  const [ fetchType, setFetchType ] = useState("category")
  const { resultSearch } = useOutletContext()
  const resultCategory = useGetRecipesByCategoryQuery(category)
  
  useEffect(()=>{
    setFetchType("search")
  }, [resultSearch])
  
  useEffect(()=>{
    setFetchType("category")
  }, [category])

  return (
    <>
      <section>
        <Categories categoryProp={category} setCategory={setCategory} /> 
        <Recipes category={category} result={fetchType === "category" ? resultCategory : resultSearch} />
      </section>
    </>
  )
}

export default Home