import { useState } from "react"
import Seachbar from "./Seachbar"
import Selectmenu from "./Selectmenu"
import Allcountry from "./Allcountry"


const Home = () => {
    const [query,setQuery] = useState('')
  return (
    <>
    <div className="serch-filter-container">
        <Seachbar setQuery = {setQuery}/>
        <Selectmenu setQuery = {setQuery}/>
    </div>
    <main>
    <Allcountry query={query}/>
    </main>
    </>
  )
}

export default Home
