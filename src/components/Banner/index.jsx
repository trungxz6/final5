import './index.css';
import background from './background.png';

function Banner() {
    return (
      <div className="Banner">
        <a href="https://www.leagueoflegends.com/vi-vn/" className='banner' style={{backgroundImage: `url(${background})`}}>
            <div className='h1'>Play TFT with PenguinTactic rightnow</div>
            <div className='h2'>Download Here</div>
        </a>
      </div>
    );
  }
  
  export default Banner;