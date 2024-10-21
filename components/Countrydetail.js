import { useEffect, useState } from "react";
import "./Country.css";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const nameSearch = useParams().Country;
  const [countryData, setcountryData] = useState(null);
  const [Notfound, setNotfound] = useState(false);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${nameSearch}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data)
        setcountryData({
          name: data.name.common || data.name,
          nativeName: Object.values(data.name.nativeName || {})[0].common,
          polupation: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          currency: Object.values(data.currencies || {})[0].name,
          langugae: Object.values(data.languages || {}),
          borders: []
        })
        if(!data.borders) {
          data.borders = []
        }

        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) => {
          setcountryData((prevState) => ({...prevState, borders }))
        })
      })
      .catch((err) => {
        setNotfound(true);
      });
  }, [nameSearch]);
  if (Notfound) {
    return (
      <div>
        <img
          className="error"
          src="https://imgs.search.brave.com/ZDys2EOAasI0d-rD6cznPl8FmVBhcFJLgxf_B1VVuKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/VE5XcGhDMVFmVlBT/cXJ5TndmTGF0ZHRv/UlVubDdpb19reWNx/ZGQ5OFdCTllKXzBV/NXpXejB4b2UzdFN0/NU0tUHpuZVBZNjZG/VE5yckRLbF9VZFMt/X0x1Q19LTHRnTEFi/U0VJSWVoWFMxU3Rs/Q05DaGc3T2QwYlc2/Ujg3YTdTWmFfdzRV/TGlzaDRydGdJL3Mz/MjAvaTY4OHIuanBn"
          alt="image"
        />
      </div>
    );
  }
  return countryData === null ? (
    "loading..."
  ) : (
    <main>
      <div className="main_container">
        <a href="#" className="back-button" onClick={()=> history.back()}>
          <i className="fa-solid fa-arrow-left-long"></i>&nbsp;&nbsp;Back
        </a>

        <div className="country-detailes">
          <img src={countryData.flag} alt="flag" />
          <div className="country-text">
            <h1 className="headName">{countryData.name}</h1>
            <div className="text">
              <p>
                <b>Native Name: </b>
                <span className="para1"> {countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="para2">{countryData.polupation}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="para3">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="para4">{countryData.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="para5">{countryData.capital?.join(', ')}</span>
              </p>
              <p>
                <b>Top level domain: </b>
                <span className="para6">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="para7">{countryData.currency}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="para8">{countryData.langugae?.join(', ')}</span>
              </p>
            </div>
            {countryData.borders.length !== 0 && <div className="border">
              <b>Border Countries:</b>&nbsp;
              {
                countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
              }
            </div>
}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Country;
