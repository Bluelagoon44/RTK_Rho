import { Link, Outlet, useLocation } from "react-router-dom"
import headerBg from "../../assets/header_bg.webp"
import "./header.css"
import Searchbar from "./Searchbar/Searchbar"
import reactLogo from "../../assets/react.svg"
import reduxLogo from "../../assets/redux.svg"
import { useEffect, useState } from "react"
import { getRecipesBySearch } from "../../services/endpoints/getRecipes"

export default function Header(){
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [resultSearch, setSearchResult] = useState()
  const triggerSearchAction = (value)=>{
    getRecipesBySearch(search, setSearchResult)
    setSearch(value)
  }
  useEffect(()=>{
    getRecipesBySearch(search, setSearchResult)
  }, [search])
  
  return (
    <>
        <header>
            <div>
              <div>
                <img src={reactLogo} />
                <img src={reduxLogo} />
              </div>
              <p>Demo React + Redux Toolkit + RTK Query</p>
            </div>
            <h1>R<span>ecipes</span>I7</h1>
            <img src={headerBg} alt="Background du header" />
            {location.pathname === "/" ?
              <Searchbar search={search} setSearch={triggerSearchAction} />
              : null}
            <nav>
              <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/planning">Planning</Link></li>
              </ul>
            </nav>
        </header>
        <main>
            <Outlet context={location.pathname === "/" ? {resultSearch, setSearchResult} : null}/>
        </main>
    </>
  )
}