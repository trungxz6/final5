import './index.css';
import logo from './PenguinTactic.png';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate()
  return (
    <div className="Header">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div>
        <a href="/"><img src={logo} alt="logo" className='logo'/></a>
      </div>
      <form className='Search-bar'>
        <input placeholder='Search Champion Name' className='Search'></input>
        <span class="material-symbols-outlined">search</span>
      </form>
      <div className='user'>
          <button className="signup" onClick={()=>{
            navigate('/signup')
          }}>Sign Up</button>
          <button className="login" onClick={()=>{
            navigate('/login')
          }}>Log in</button>
      </div>
    </div>
  );
}

export default Header;