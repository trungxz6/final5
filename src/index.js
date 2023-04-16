import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Champion from './components/Champion';
import TeamComp from './components/Team-comps';
import Home from './components/Home';
import AuthProtect from './components/AuthProtect';
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import AppFake from './components/AppFake';
import { dataInfo } from './components/dataChampInfo';
import ChampInfo from './components/ChampInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<AuthProtect><App /></AuthProtect>}>
          <Route path='/' element={<Home /> }></Route>
          <Route path='/team-comps' element={<TeamComp/>}></Route>
          {dataInfo.map((item)=>{

            return(
              <Route path={`/${item.alt.replace(/\s+/g,'')}`} element={
                <div className="ChampInfo" >
                  <div className="champDes" >
                      <img src={item.src} alt={item.alt} className="imagehehe" />
                      <div style={{marginTop:"20px"}}>TFT {item.alt}</div>
                      <div className='item-build' >Item Build</div>
                      <div className='item-list1'>
                        <img src={item.firstGear} alt={item.alt} className="item-gear"/>
                        <img src={item.secondGear} alt={item.alt} className="item-gear"/>
                        <img src={item.thirdGear} alt={item.alt} className="item-gear"/>
                      </div>
                      <div className='item-build' >Stats</div>
                      <div className='stats-list1'>
                        <div className='stats-item'>Cost: {item.cost} </div>
                        <div className='stats-item'>Health: {item.health}</div>
                        <div className='stats-item'>Mana: {item.mana}</div>
                        <div className='stats-item'>Armor: {item.armor}</div>
                        <div className='stats-item'>MR: {item.MR}</div>
                        <div className='stats-item'>DPS: {item.DPS}</div>
                        <div className='stats-item'>Damage: {item.damage}</div>
                        <div className='stats-item'>Atk Spd: {item.atkSpd}</div>
                        <div className='stats-item'>Crit Rate: {item.critRate}</div>
                        <div className='stats-item'>Range: {item.range}</div>
                      </div>
                  </div>       
                  <div className="moreInfo">
                    <div>Abilities</div>
                    <div className='abi-list'>
                      <div className='abi-item'>{item.abilityName}</div>
                      <div className='abi-item'>{item.form}</div>
                      <div className='abi-item'>{item.info}</div>
                      <div className='abi-item'>{item.more}</div>

                    </div>
                  </div>
                </div>
              }>
              </Route>
            )
          })}
          <Route path='/champion' element={<Champion/>}></Route>
          <Route path='/tier-list' element={<Champion/>}></Route>
          <Route path='/team-builder' element={<Champion/>}></Route>
          <Route path='/database' element={<Champion/>}></Route>  
        </Route>
        <Route path='/' element={<AuthProtect><AppFake /></AuthProtect>}>
          <Route path='/signup' element={<SignupForm/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
        </Route>

      </Routes>
        
    </BrowserRouter>
    
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
