import { useState } from "react"
import { useEffect } from "react"
import { getCategories } from "../../../services/endpoints/getCategories";

const Categories = ({categoryProp, setCategory}) => {
    const [categories, setCategories] = useState([]);

    const changeCategory = (e)=>{        
        setCategory(e.target.innerText)
    }

    useEffect(()=>{
        getCategories(setCategories)
    }, [])

    return (
        <ul id="categories">
            {categories?.data ?
                categories.data.categories.length > 0 ? 
                    categories.data.categories.map((category)=>(
                        <li key={category.idCategory} onClick={changeCategory} className={categoryProp === category.strCategory ? "active" : ""}>
                            {category.strCategory}
                        </li>
                    ))
                :
                    <p>Aucun résultat trouvé...</p>
            :
                categories?.error ?
                    <p>{categories.error}</p>
                :
                    <p>Loading...</p>
            }
        </ul>
    )
}

export default Categories