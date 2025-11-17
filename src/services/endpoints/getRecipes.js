import axios from "axios"

export const getRecipesBySearch = async (search, setSearchResult)=>{
    setSearchResult(await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`))
}

export const getRecipesByCategory = async (category, setSearchResult)=>{
    setSearchResult(await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`))
}

export const getRecipeById = async (id, setRecipe)=>{
    try{
        setRecipe(await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`))
    }
    catch(error){
        setRecipe({error:error.message})
    }
}