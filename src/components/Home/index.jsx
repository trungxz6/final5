import './index.css';
import { useNavigate } from 'react-router-dom';
import partners from './partners-bg.png';
 
function Home() {
    const home = useNavigate()
    return (
      <div className="Home">
        <h1 className='titleh1'>Your Companion for Teamfight Tactics</h1>
        <h2 className='titleh2'>Become the Next Little Legend</h2>
        <h4 className='titleh4'>Play smarter and climb the ranks in TFT with constantly updated item guides, team <br></br> recommendations, and deep champion stat analysis. Now available in-game!</h4>
        <button onClick={() => {
            home('/champion')
            // window.location.assign('/')
        }}>JOIN NOW</button>
        <div className='partner-banner' style={{backgroundImage: `url(${partners})`}}>
            <h2>Are You a Content Creator or Streamers?</h2>
            <h4>Join Our Partners Program</h4>
        </div>
      </div>
    );
  }
  
  export default Home;