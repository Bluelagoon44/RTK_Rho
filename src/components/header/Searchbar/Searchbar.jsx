const Searchbar = ({search, setSearch}) => {
  return (
    <form>
        <input type="text" placeholder="Rechercher une recette" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
    </form>
  )
}

export default Searchbar