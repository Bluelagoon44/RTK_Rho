import axios from "axios"

export const getCategories = async (setCategories)=>{
    try{
        setCategories(await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`))
    }
    catch(error){
        setCategories({error:error.message})
    }
}