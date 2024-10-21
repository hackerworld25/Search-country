import { useState } from "react"

 const Header = () => {
    const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    if(isDark){
        document.body.classList.add('dark_mode')
    }
    else{
        document.body.classList.remove('dark_mode')
    }
  return (
        <header className="headerContainer">
            <div className="headerContent">
                <h2 className="title">
                    <a href="/">
                    Where in the world?
                    </a>
                </h2>
                <p className="themeChanger" onClick={()=>{
                    setisDark(!isDark)
                    localStorage.setItem('isDarkMode',!isDark)
                }}>
                    <i className={`fa-regular fa-${isDark ? 'sun':'moon'}`} id="moon"></i>&nbsp;&nbsp;<span className="light">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </p>
            </div>
        </header>
  )
}

export default Header
