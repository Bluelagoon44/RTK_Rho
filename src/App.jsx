import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Courses from './pages/courses/Courses'
import Planning from './pages/planning/Planning'
import Header from './components/header/Header'
import RecipeDetails from './pages/Recipe/RecipeDetails'

function App() {

  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/recipe/:idRecipe" element={<RecipeDetails />} />
      </Route>
    </Routes>
  )
}

export default App