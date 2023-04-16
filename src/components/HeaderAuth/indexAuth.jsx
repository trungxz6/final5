import './index.css';
import logo from './PenguinTactic.png';
import { useNavigate } from "react-router-dom";
import { data } from '../Champion';
import { useState } from 'react';


function HeaderAuth() {
    const [isSearch, setIsSearch] = useState('')
    const [searchArray, setSearchArray] = useState([])
    const navigate = useNavigate()
    const getUser = JSON.parse(localStorage.getItem('crrUser'))
    const user = getUser.username
    // const logOut = () => {
    //   localStorage.removeItem('crrUser') 
    // }
    const searchChamp = (e) => {
      const searchData = e.target.value
      const filterSearch = data.filter(item => item.alt.toLowerCase().includes(searchData.toLowerCase()))
      setIsSearch(searchData)
      setSearchArray(filterSearch)
    }
    // const champData = (isSearch) => {
    //   navigate(`/${isSearch}`);
    // };
  return (
    <div className="HeaderAuth">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div>
        <a href="/"><img src={logo} alt="logo" className='logo'/></a>
      </div>
      <div>
        <form className='Search-bar'>
          <input placeholder='Search Champion Name' className='Search' onChange={searchChamp}></input>
          <span class="material-symbols-outlined">search</span>
        </form>
        {isSearch ? 
          <div className="champ-search-list">
            {searchArray.map((item)=>{
            return(
              <div className="champ-get-search" onClick={()=>{
                navigate(`/${item.alt.replace(/\s+/g,'')}`);
              }}>
                <img src={item.src} alt={item.alt} className="champ-search"/>
                <div className='name-search'>{item.alt}</div>
              </div>
          )
        })}
        </div>
        : <div></div>}
      </div>
      <div className='user'>
        <div>
          Welcome {user}
        </div>
        <button className='button' onClick={()=>{
          navigate('/login')
        }}>Log Out</button>
      </div>

    </div>
  );
}

export default HeaderAuth;