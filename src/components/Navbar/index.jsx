import { NavLink } from 'react-router-dom';
import './index.css';


function Navbar() {

    const navLinkStyle = ({isActive}) => {
      return{
        textDecoration: isActive? '5px orange solid underline':'none', 
        textUnderlineOffset: isActive? '34px':'none',
        // textDecoration-offset      
        // borderBottom: isActive? '1px orange solid' : 'none',
        color: isActive? 'orange' : '#0c88e7',
      }     
    }

    return (
      <div className="Navbar">
        <NavLink to='/team-comps' className="item" style={navLinkStyle}>Team Comps</NavLink>
        <NavLink to='/champion' className="champions item" style={navLinkStyle}>Champions</NavLink>
        <NavLink to='/tier-list' className="tierlist item" style={navLinkStyle}>Tier List</NavLink>
        <NavLink to='/team-builder' className="teambuilder item" style={navLinkStyle}>Team Builder</NavLink>
        <NavLink to='/database' className="database item" style={navLinkStyle}>Database</NavLink>
      </div>
    );
  }
  
  export default Navbar;