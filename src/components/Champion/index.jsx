import React, { useState } from "react";
import { useRef } from "react";
import './index.css';

export const data = [
    {
        id: 1,
        class: '',
        origin: 'Threat',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Aatrox.png`),        
        className: "image coin4",
        alt: "Aatrox",
        coin: 'coin4',
    },
    {
        id: 2,
        class: ['Mascot','Aegis'],
        origin: 'Ox Force',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Alistar.png`),
        className: "image coin3",
        alt: "Alistar",
        coin: 'coin3',
    },
    {
        id: 3,
        class: 'Spellslinger', 
        origin: ['Gadgeteen','Ox Force'],
        src: (`https://rerollcdn.com/characters/Skin/8.5/Annie.png`),
        className: "image coin2",
        alt: "Annie",
        coin: 'coin2',
    },
    {
        
        id: 4,
        class: 'Sureshot',
        origin: 'LaserCorps',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Ashe.png`),
        className: "image coin1",
        alt: "Ashe",
        coin: 'coin1',
    },
    {
        id: 5,
        class: '',
        origin: 'Threat',
        src: (`https://rerollcdn.com/characters/Skin/8.5/AurelionSol.png`),
        className: "image coin4",
        alt: "Aurelion Sol",
        coin: 'coin4'
    },
    {
        id: 6,
        class: '',
        origin: 'Threat',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Belveth.png`),
        className: "image coin4",
        alt: "Belveth",
        coin: 'coin4'
    },
    {
        id: 7,
        class: 'Brawler',
        origin: 'A.D.M.I.N',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Blitzcrank.png`),
        className: "image coin1",
        alt: "Blitzcrank",
        coin: 'coin1',
    },
    {
        id: 8,
        class: 'Renegade',
        origin: 'A.D.M.I.N',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Camille.png`),
        className: "image coin2",
        alt: "Camille",
        coin: 'coin2',
    },
    {
        id: 9,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Draven.png`),
        className: "image coin2",
        alt: "Draven",
        coin: 'coin2',
    },
    {
        id: 10,
        class: ['Prankster','Aegis'],
        origin: 'Star Guardian',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Ekko.png`),
        className: "image coin4",
        alt: "Ekko",
        coin: 'coin4'
    },
    {
        id: 11,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Ezreal.png`),
        className: "image coin2",
        alt: "Ezreal",
        coin: 'coin2',
    },
    {
        id: 12,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Fiddlesticks.png`),
        className: "image coin5",
        alt: "Fiddlesticks",
        coin: 'coin5'
    },
    {
        id: 13,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Fiora.png`),
        className: "image coin2",
        alt: "Fiora",
        coin: 'coin2',
    },
    {
        id: 14,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Gangplank.png`),
        className: "image coin1",
        alt: "Gangplank",
        coin: 'coin1',
    },
    {
        id: 15,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Garen.png`),        
        className: "image coin4",
        alt: "Garen",
        coin: 'coin4'
    },
    {
        id: 16,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Gnar.png`),
        className: "image coin3",
        alt: "Gnar",
        coin: 'coin3'
    },
    {
        id: 17,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Janna.png`),
        className: "image coin5",
        alt: "Janna",
        coin: 'coin5'
    },
    {
        id: 18,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Jax.png`),
        className: "image coin3",
        alt: "Jax",
        coin: 'coin3'
    },
    {
        id: 19,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Jhin.png`),
        className: "image coin4",
        alt: "Jhin",
        coin: 'coin4'
    },
    {
        id: 20,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Jinx.png`),
        className: "image coin2",
        alt: "Jinx",
        coin: 'coin2',
    },
    {
        id: 21,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Kaisa.png`),
        className: "image coin3",
        alt: "Kaisa",
        coin: 'coin3'
    },
    {
        id: 22,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Kayle.png`),
        className: "image coin1",
        alt: "Kayle",
        coin: 'coin1',
    },
    {
        id: 23,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Leblanc.png`),
        className: "image coin3",
        alt: "Leblanc",
        coin: 'coin3'
    },
    {
        id: 24,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/LeeSin.png`),
        className: "image coin2",
        alt: "Lee Sin",
        coin: 'coin2',
    },
    {
        id: 25,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Leona.png`),
        className: "image coin5",
        alt: "Leona",
        coin: 'coin5'
    },
    {
        id: 26,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Lucian.png`),
        className: "image coin1",
        alt: "Lucian",
        coin: 'coin1',
    },
    {
        id: 27,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Lulu.png`),
        className: "image coin1",
        alt: "Lulu",
        coin: 'coin1',
    },
    {
        id: 28,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Lux.png`),
        className: "image coin1",
        alt: "Lux",
        coin: 'coin1',
    },
    {
        id: 29,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Malphite.png`),
        className: "image coin2",
        alt: "Malphite",
        coin: 'coin2',
    },
    {
        id: 30,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/MissFortune.png`),
        className: "image coin4",
        alt: "Miss Fortune",
        coin: 'coin4'
    },
    {
        id: 31,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Mordekaiser.png`),
        className: "image coin5",
        alt: "Mordekaiser",
        coin: 'coin5'
    },
    {
        id: 32,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Morgana.png`),
        className: "image coin3",
        alt: "Morgana",
        coin: 'coin3'
    },
    {
        id: 33,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Nasus.png`),
        className: "image coin1",
        alt: "Nasus",
        coin: 'coin1',
    },
    {
        id: 34,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Neeko.png`),
        className: "image coin4",
        alt: "Neeko",
        coin: 'coin4'
    },
    {
        id: 35,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Nilah.png`),
        className: "image coin3",
        alt: "Nilah",
        coin: 'coin3'
    },
    {
        id: 36,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Nunu.png`),
        className: "image coin5",
        alt: "Nunu",
        coin: 'coin5'
    },
    {
        id: 37,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Pantheon.png`),
        className: "image coin1",
        alt: "Pantheon",
        coin: 'coin1',
    },
    {
        id: 38,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Poppy.png`),        
        className: "image coin1",
        alt: "Poppy",
        coin: 'coin1',
    },
    {
        id: 39,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Pyke.png`),
        className: "image coin2",
        alt: "Pyke",
        coin: 'coin2',
    },
    {
        id: 40,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Rammus.png`),
        className: "image coin3",
        alt: "Rammus",
        coin: 'coin3'
    },
    {
        id: 41,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Rell.png`),
        className: "image coin2",
        alt: "Rell",
        coin: 'coin2',
    },
    {
        id: 42,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Renekton.png`),
        className: "image coin1",
        alt: "Renekton",
        coin: 'coin1',
    },
    {
        id: 43,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Riven.png`),
        className: "image coin3",
        alt: "Riven",
        coin: 'coin3'
    },
    {
        id: 44,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Samira.png`),
        className: "image coin4",
        alt: "Samira",
        coin: 'coin4'
    },
    {
        id: 45,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Shen.png`),
        className: "image coin3",
        alt: "Shen",
        coin: 'coin3'
    },
    {
        id: 46,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Sivir.png`),
        className: "image coin2",
        alt: "Sivir",
        coin: 'coin2',
    },
    {
        id: 47,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Sona.png`),
        className: "image coin3",
        alt: "Sona",
        coin: 'coin3'
    },
    {
        id: 48,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Sylas.png`),
        className: "image coin1",
        alt: "Sylas",
        coin: 'coin1',
    },
    {
        id: 49,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Syndra.png`),
        className: "image coin5",
        alt: "Syndra",
        coin: 'coin5'
    },
    {
        id: 50,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/TwistedFate.png`),
        className: "image coin4",
        alt: "Twisted Fate",
        coin: 'coin4'
    },
    {
        id: 51,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/UltimateEzreal.png`),
        className: "image coin5",
        alt: "Ultimate Ezreal",
        coin: 'coin5'
    },
    {
        id: 52,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Urgot.png`),
        className: "image coin5",
        alt: "Urgot",
        coin: 'coin5'
    },
    {
        id: 53,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Vayne.png`),
        className: "image coin3",
        alt: "Vayne",
        coin: 'coin3'
    },
    {
        id: 54,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Vex.png`),
        className: "image coin3",
        alt: "Vex",
        coin: 'coin3'
    },
    {
        id: 55,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Vi.png`),
        className: "image coin2",
        alt: "Vi",
        coin: 'coin2',
    },
    {
        id: 56,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Viego.png`),
        className: "image coin4",
        alt: "Viego",
        coin: 'coin4'
    },
    {
        id: 57,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Warwick.png`),
        className: "image coin4",
        alt: "Warwick",
        coin: 'coin4'
    },
    {
        id: 58,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Wukong.png`),
        className: "image coin1",
        alt: "Wukong",
        coin: 'coin1',
    },
    {
        id: 59,
        class: 'Ace',
        origin: 'Mecha: PRIME',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Yasuo.png`),
        className: "image coin2",
        alt: "Yasuo",
        coin: 'coin2',

    }, 
]





function Champion() {
    
    
    const [showCoin, setShowCoin] = useState(false)
    const [showOrigin, setShowOrigin] = useState(false)
    const [showClass, setShowClass] = useState(false)
    const [newData,setNewData] = useState([])
    
    
    
    
    
    const open1 = () => {
        setShowCoin(current => !current);
    }
    const open2 = () => {
        setShowOrigin(current => !current);
    }
    const open3 = () => {
        setShowClass(current => !current);
    }

    const ref = useRef([]);

    const Unchecked = () => {
        console.log(ref.current.length);
        for (let i = 0; i < ref.current.length; i++) {
          ref.current[i].checked = false;
        }
        setNewData([])
        
    };
    const handleChange = (e) => {
        if(e.target.checked){
            if(newData.length>0){
                const coinFilter = data.filter(item => item.coin === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>[...pre, item])
                })
            }
            else{
                const coinFilter = data.filter(item => item.coin === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>[...pre, item])
                })
            }
            
        }
        else{
            if(newData.length>0){
                const coinFilter = newData.filter(item => item.coin === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>{
                        return [...pre.filter(abc=>abc!==item)]
                    })
                })  
            }
            else{
                const coinFilter = data.filter(item => item.coin === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>{
                        return [...pre.filter(abc=>abc!==item)]
                    })
                })
            }
        }
    }
    const originChange = (e) => {
        if(e.target.checked){
            if(newData.length>0){
                const coinFilter = data.filter(item => item.origin === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>[...pre, item])
                })
            }
            else{
                const coinFilter = data.filter(item => item.origin === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>[...pre, item])
                })
            }    
        }
        else{
            if(newData.length>0){
                const coinFilter = newData.filter(item => item.origin === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>{
                        return [...pre.filter(abc=>abc.origin !== item.origin)]
                    })
                })  
            }
            else{
                const coinFilter = data.filter(item => item.origin === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>{
                        return [...pre.filter(abc=>abc!==item)]
                    })
                })
            }
        }
    }
    const classChange = (e) => {
        if(e.target.checked){
            if(newData.length>0){
                const coinFilter = data.filter(item => item.class === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>[...pre, item])
                })
            }
            else{
                const coinFilter = data.filter(item => item.class === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>[...pre, item])
                })
            }    
        }
        else{
            if(newData.length>0){
                const coinFilter = newData.filter(item => item.class === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>{
                        return [...pre.filter(abc=>abc.class !== item.class)]
                    })
                })  
            }
            else{
                const coinFilter = data.filter(item => item.class === e.target.value)
                coinFilter.map((item)=>{
                    setNewData(pre =>{
                        return [...pre.filter(abc=>abc!==item)]
                    })
                })
            }
        }
    }

    
    
    newData.sort((a,b)=>a.alt > b.alt ? 1 : -1,)
    console.log(newData)

    
            
    

    


    return (
      <div className="champion">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <div className="filter">
            <div className='top-filter'>
                <div>Filters</div>
                <button className="reset" onClick={Unchecked}>Reset</button>
            </div>
            <div className="bottom-filter">
                <div className='title'>
                    <div className='filter-title' onClick={open1}>
                        <div className='filter-name'>Cost</div>
                        <span class="material-symbols-outlined icon">expand_less</span>
                    </div>
                    {showCoin ? 
                    <div className="showcoin">
                        <div className="coinlogo">
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">1</div>
                                </div>
                            </div> 
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">2</div>
                                </div>
                            </div> 
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">3</div>
                                </div>
                            </div> 
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">4</div>
                                </div>
                            </div> 
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">5</div>
                                </div>
                            </div> 
                        </div>
                        <div className="input">
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[0] = element;}} value='coin1' onChange={handleChange} />
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[1] = element;}} value='coin2' onChange={handleChange}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[2] = element;}} value='coin3' onChange={handleChange}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[3] = element;}} value='coin4' onChange={handleChange}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[4] = element;}} value='coin5' onChange={handleChange}/>
                        </div>
                     </div>
                    : <></>}
                </div>
                <div className='title' >
                    <div className='filter-title' onClick={open2}>
                        <div className='filter-name'>Origin</div>
                        <span class="material-symbols-outlined icon">expand_less</span>
                    </div>
                    {showOrigin ? 
                    <div className="show-origin">
                        <div className="coin" >
                            <div className="origin">A.D.M.I.N</div>
                            <div className="origin">Anima Squad</div>
                            <div className="origin">Corrupted</div>
                            <div className="origin">Forecaster</div>
                            <div className="origin">Gadgeteen</div>
                            <div className="origin">InfiniTeam</div>
                            <div className="origin">LaserCorps</div>
                            <div className="origin">Mecha: PRIME</div>
                            <div className="origin">Ox Force</div>
                            <div className="origin">Parallel</div>
                            <div className="origin">Riftwalker</div>
                            <div className="origin">Star Guardian</div>
                            <div className="origin">Supers</div>
                            <div className="origin">Threat</div>
                            <div className="origin">The Underground</div>
                        </div>
                        <div className="input-origin">
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[5] = element;}} value='A.D.M.I.N' onChange={originChange}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[6] = element;}} value='Anima Squad' onChange={originChange}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[7] = element;}} value='Corrupted' onChange={originChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[8] = element;}} value='Forecaster' onChange={originChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[9] = element;}} value='Gadgeteen' onChange={originChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[10] = element;}} value='InfiniTeam' onChange={originChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[11] = element;}} value='LaserCorps' onChange={originChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[12] = element;}} value='Mecha: PRIME' onChange={originChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[13] = element;}} value='Ox Force' onChange={originChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[14] = element;}} value='Parallel' onChange={originChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[15] = element;}} value='Riftwalker' onChange={originChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[16] = element;}} value='Star Guardian' onChange={originChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[17] = element;}} value='Supers' onChange={originChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[18] = element;}} value='Threat' onChange={originChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[19] = element;}} value='The Underground' onChange={originChange}/>                         
                        </div>    
                    </div> 
                    : <></>}
                </div>
                <div className='title'> 
                    <div className='filter-title' onClick={open3}>
                        <div className='filter-name'>Class</div>
                        <span class="material-symbols-outlined icon">expand_less</span>
                    </div>
                    {showClass ? 
                    <div>
                        <div className="coin" >
                            <div className="class">Ace</div>
                            <div className="class">Aegis</div>
                            <div className="class">Brawler</div>
                            <div className="class">Defender</div>
                            <div className="class">Duelist</div>
                            <div className="class">Hacker</div>
                            <div className="class">Heart</div>
                            <div className="class">Mascot</div>
                            <div className="class">Prankster</div>
                            <div className="class">Quickdraw</div>
                            <div className="class">Renegade</div>
                            <div className="class">Spellslinger</div>
                            <div className="class">Sureshot</div>
                        </div>
                        <div>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[20] = element;}} value='Ace' onChange={classChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[21] = element;}} value='Aegis' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[22] = element;}} value='Brawler' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[23] = element;}} value='Defender' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[24] = element;}} value='Duelist' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[25] = element;}} value='Hacker' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[26] = element;}} value='Heart' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[27] = element;}} value='Mascot' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[28] = element;}} value='Prankster' onChange={classChange}/>                        
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[29] = element;}} value='Quickdraw' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[30] = element;}} value='Renegade' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[31] = element;}} value='Spellslinger' onChange={classChange}/>                         
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[32] = element;}} value='Sureshot' onChange={classChange}/>      
                        </div>
                    </div> 
                    : <></>}
                </div>
            </div>
        </div>
        <div className="list">
            <div className="text">TFT Champions List</div>
            <div className="champion-list">
                {newData.length > 0 ? newData.map((item)=>{
                    return(
                        <div className="champion1">
                            <img src={item.src} className={item.className} alt={item.alt} />
                            <div className="name">{item.alt}</div>
                        </div>
                    )}) 
                    :data.map((item)=>{
                        return(
                            <div className="champion1">
                                <img src={item.src} className={item.className} alt={item.alt} />
                                <div className="name">{item.alt}</div>
                                </div>
                                )}) 
                            }       
            </div>
        </div>
      </div>
    );
  }
  
export default Champion;
                                               