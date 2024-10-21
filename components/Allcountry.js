import Countrycard from "./Countrycard";
import { useEffect, useState } from "react";
import CountrylistShemer from "./CountrylistShemer";
// import Data from '../countrydata'
const Allcountry = ({ query }) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
        // console.log(Data)
      });
  }, []);

  const dataarray = Data.filter((country) => {
    return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query);
  }).map((country) => {
    return (
      <Countrycard
        key={country.name.common}
        name={country.name.common}
        population={country.population}
        region={country.region}
        capital={country.capital}
        source={country.flags.svg}
      />
    );
  });
 
    
     if(Data.length !==0){
        return (
        <div className="country">
          {dataarray}
        </div>
      )
    }
      else{
          return (
            <CountrylistShemer/>
          )
      }
 
  }

export default Allcountry;
