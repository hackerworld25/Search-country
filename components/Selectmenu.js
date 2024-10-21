const Selectmenu = ({setQuery}) => {
  return (
    <select className="select" onChange={(e) => setQuery(e.target.value.toLowerCase())} >
        <option value="Africa" hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    
    </select>
  )
}

export default Selectmenu
