const Seachbar = ({setQuery}) => {
 
  return (
    <div className="search-container">
         <i className="fa-solid fa-magnifying-glass"></i>
        <input className="inputs" type="text" placeholder="Search for a country..." onChange={(e)=> setQuery(e.target.value.toLowerCase())}/>
    </div>
  )
}

export default Seachbar
