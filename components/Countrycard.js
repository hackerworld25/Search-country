import { Link } from "react-router-dom"

const Countrycard = ({name,population,region,capital,source}) => {
  return (
    <Link className="card" to={`/${name}`}>
            <img src={source} alt="flag"/>
                        
            <div className="card-container">
                <h3 className="card-title">{name}</h3>
                    <p><b>Population:</b> {population}</p>
                    <p><b>Region:</b> {region}</p>
                    <p><b>Capital:</b> {capital}</p>
            </div>
     </Link>
  )
}

export default Countrycard
