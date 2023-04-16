import { useState } from 'react';
import { useRef } from "react";
import { data } from '../Champion';
import teamcomp1 from './teamcomp1.png'
import teamcomp2 from './teamcomp2.png'
import teamcomp3 from './teamcomp3.png'
import teamcomp4 from './teamcomp4.png'
import teamcomp5 from './teamcomp5.png'
import teamcomp6 from './teamcomp6.png'
import teamcomp7 from './teamcomp7.png'
import teamcomp8 from './teamcomp8.png'
import teamcomp9 from './teamcomp9.png'
import './index.css';


// dataTier1.push(data[40],[20],[34],[9],[14],[29],[33],[48])


// data[40],
// data[20],
// data[34],
// data[9],
// data[14],
// data[29],
// data[33],
// data[48],



function TeamComp() {


    const [showCoin, setShowCoin] = useState(true)
    const [showInfo2, setShowInfo2] = useState(false)
    const [showInfo3, setShowInfo3] = useState(false)
    const [showInfo4, setShowInfo4] = useState(false)
    const [showInfo5, setShowInfo5] = useState(false)
    const [showInfo6, setShowInfo6] = useState(false)
    const [showInfo7, setShowInfo7] = useState(false)
    const [showInfo8, setShowInfo8] = useState(false)
    const [showInfo9, setShowInfo9] = useState(false)
    const [showInfo10, setShowInfo10] = useState(false)
    
    const open1 = () => {
        setShowCoin(current => !current);
    }
    const open2 = () => {
        setShowInfo2(current => !current);
    }
    const open3 = () => {
        setShowInfo3(current => !current);
    }
    const open4 = () => {
        setShowInfo4(current => !current);
    }
    const open5 = () => {
        setShowInfo5(current => !current);
    }
    const open6 = () => {
        setShowInfo6(current => !current);
    }
    const open7 = () => {
        setShowInfo7(current => !current);
    }
    const open8 = () => {
        setShowInfo8(current => !current);
    }
    const open9 = () => {
        setShowInfo9(current => !current);
    }
    const open10 = () => {
        setShowInfo10(current => !current);
    }


    const smallItemList = [
        {   
            id: 1,
            name: 'B.F. Sword',
            src: 'https://rerollcdn.com/items/BFSword.png',
            des: '10 Attack damage',
        },
        {
            id: 2,
            name: 'Chain Vest',
            src: 'https://rerollcdn.com/items/ChainVest.png',
            des: '20 Armor',
        },
        {
            id: 3,
            name: "Giant's Belt",
            src: "https://rerollcdn.com/items/GiantsBelt.png",
            des: '150 Health',
        },
        {
            id: 4,
            name: 'Needlessly Large Rod',
            src: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png',
            des: '10 Ability Power',
        },
        {
            id: 5,
            name: 'Negatron Cloak',
            src: 'https://rerollcdn.com/items/NegatronCloak.png',
            des: '20 Magic resist',
        },
        {
            id: 6,
            name: 'Recurve Bow',
            src: 'https://rerollcdn.com/items/RecurveBow.png',
            des: '10% Attack speed',
        },
        {
            id: 7,
            name: 'Sparring Gloves',
            src: 'https://rerollcdn.com/items/SparringGloves.png',
            des: '5% Crit',
        },
        {
            id: 8,
            name: 'Spatula',
            src: 'https://rerollcdn.com/items/Spatula.png',
            des: 'It must do something...',
        },
        {
            id: 9,
            name: 'Tear of the Goddess',
            src: 'https://rerollcdn.com/items/TearoftheGoddess.png',
            des: '15 Mana.',
        },
    ]

    const bigItemList = [
        {
            name: "Archangel's Staff",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            tier: 'B',
            src: 'https://rerollcdn.com/items/ArchangelsStaff.png',
            recipe: [
                    smallItemList[3],
                    smallItemList[8]              
            ],
        },
        {
            name: "Bloodthirster",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/Bloodthirster.png',
            tier: 'S',
            recipe: [
                    smallItemList[0],
                    smallItemList[4]              
            ],
        },
        {
            name: "Blue Buff",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/BlueBuff.png',
            tier: 'S',
            recipe: [
                    smallItemList[8],
                    smallItemList[8]              
            ],
        },
        {
            name: "Bramble Vest",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/BrambleVest.png',
            tier: 'A',
            recipe: [
                    smallItemList[1],
                    smallItemList[1]              
            ],
        },
        {
            name: "Chalice of Power",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/ChaliceofPower.png',
            tier: 'A',
            recipe: [
                    smallItemList[3],
                    smallItemList[8]              
            ],
        },
        {
            name: "Deathblade",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/Deathblade.png',
            tier: 'A',
            recipe: [
                    smallItemList[0],
                    smallItemList[0]              
            ],
        },
        {
            name: "Dragon's Claw",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/DragonsClaw.png',
            tier: 'A',
            recipe: [
                    smallItemList[4],
                    smallItemList[4]              
            ],
        },
        {
            name: "Edge of Night",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/EdgeofNight.png',
            tier: 'A',
            recipe: [
                    smallItemList[0],
                    smallItemList[1]              
            ],
        },
        {
            name: "Gargoyle Stoneplate",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/GargoyleStoneplate.png',
            tier: 'A',
            recipe: [
                    smallItemList[1],
                    smallItemList[4]              
            ],
        },
        {
            name: "Giant Slayer",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/GiantSlayer.png',
            tier: 'A',
            recipe: [
                    smallItemList[0],
                    smallItemList[5]              
            ],
        },
        {
            name: "Guardbreaker",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/Guardbreaker.png',
            tier: 'A',
            recipe: [
                    smallItemList[2],
                    smallItemList[6]              
            ],
        },
        {
            name: "Guinsoo's Rageblade",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/GuinsoosRageblade.png',
            tier: 'A',
            recipe: [
                    smallItemList[3],
                    smallItemList[5]              
            ],
        },

        {
            name: "Hand of Justice",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/HandofJustice.png',
            tier: 'A',
            recipe: [
                    smallItemList[6],
                    smallItemList[8]              
            ],
        },
        {
            name: "Hextech Gunblade",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/HextechGunblade.png',
            tier: 'A',
            recipe: [
                    smallItemList[0],
                    smallItemList[3]              
            ],
        },
        {
            name: "Infinity Edge",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/InfinityEdge.png',
            tier: 'A',
            recipe: [
                    smallItemList[0],
                    smallItemList[6]              
            ],
        },
        {
            name: "Ionic Spark",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/IonicSpark.png',
            tier: 'A',
            recipe: [
                    smallItemList[3],
                    smallItemList[4]              
            ],
        },
        {
            name: "Jeweled Gauntlet",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/JeweledGauntlet.png',
            tier: 'A',
            recipe: [
                    smallItemList[3],
                    smallItemList[6]              
            ],
        },
        {
            name: "Last Whisper",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/LastWhisper.png',
            tier: 'A',
            recipe: [
                    smallItemList[5],
                    smallItemList[6]              
            ],
        },
        {
            name: "Locket of the Iron Solari",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/LocketoftheIronSolari.png',
            tier: 'A',
            recipe: [
                    smallItemList[3],
                    smallItemList[1]              
            ],
        },
        {
            name: "Morellonomicon",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/Morellonomicon.png',
            tier: 'A',
            recipe: [
                    smallItemList[3],
                    smallItemList[2]              
            ],
        },
        {
            name: "Protector's Vow",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/ProtectorsVow.png',
            tier: 'A',
            recipe: [
                    smallItemList[1],
                    smallItemList[8]              
            ],
        },
        {
            name: "Quicksilver",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/Quicksilver.png',
            tier: 'A',
            recipe: [
                    smallItemList[6],
                    smallItemList[4]              
            ],
        },
        {
            name: "Rabadon's Deathcap",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/RabadonsDeathcap.png',
            tier: 'A',
            recipe: [
                    smallItemList[3],
                    smallItemList[3]              
            ],
        },
        {
            name: "Rapid Firecannon",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/RapidFirecannon.png',
            tier: 'A',
            recipe: [
                    smallItemList[5],
                    smallItemList[5]              
            ],
        },
        {
            name: "Redemption",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/Redemption.png',
            tier: 'A',
            recipe: [
                    smallItemList[2],
                    smallItemList[8]              
            ],
        },
        {
            name: "Runaan's Hurricane",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/RunaansHurricane.png',
            tier: 'A',
            recipe: [
                    smallItemList[4],
                    smallItemList[5]              
            ],
        },
        {
            name: "Shroud of Stillness",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/ShroudofStillness.png',
            tier: 'A',
            recipe: [
                    smallItemList[1],
                    smallItemList[6]              
            ],
        },
        {
            name: "Spear of Shojin",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/SpearofShojin.png',
            tier: 'A',
            recipe: [
                    smallItemList[0],
                    smallItemList[8]              
            ],
        },
        {
            name: "Statikk Shiv",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/StatikkShiv.png',
            tier: 'A',
            recipe: [
                    smallItemList[5],
                    smallItemList[8]              
            ],
        },
        {
            name: "Sunfire Cape",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/SunfireCape.png',
            tier: 'A',
            recipe: [
                    smallItemList[1],
                    smallItemList[2]              
            ],
        },
        {
            name: "Tactician's Crown",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/TacticiansCrown.png',
            tier: 'A',
            recipe: [
                    smallItemList[7],
                    smallItemList[7]              
            ],
        },
        {
            name: "Thief's Gloves",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/ThiefsGloves.png',
            tier: 'A',
            recipe: [
                    smallItemList[6],
                    smallItemList[6]              
            ],
        },
        {
            name: "Titan's Resolve",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/TitansResolve.png',
            tier: 'A',
            recipe: [
                    smallItemList[1],
                    smallItemList[5]              
            ],
        },
        {
            name: "Warmog's Armor",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/WarmogsArmor.png',
            tier: 'A',
            recipe: [
                    smallItemList[2],
                    smallItemList[2]              
            ],
        },
        {
            name: "Zeke's Herald",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/ZekesHerald.png',
            tier: 'A',
            recipe: [
                    smallItemList[2],
                    smallItemList[0]              
            ],
        },
        {
            name: "Zephyr",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/Zephyr.png',
            tier: 'A',
            recipe: [
                    smallItemList[2],
                    smallItemList[4]              
            ],
        },
        {
            name: "Zz'Rot Portal",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/ZzRotPortal.png',
            tier: 'A',
            recipe: [
                    smallItemList[2],
                    smallItemList[5]              
            ],
        },
        {
            name: "A.D.M.I.N. Emblem",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/ADMINEmblem.png',
            tier: 'A',
            recipe: [
                    smallItemList[4],
                    smallItemList[7]              
            ],
        },
        {
            name: "Anima Squad Emblem",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/AnimaSquadEmblem.png',
            tier: 'A',
            recipe: [
                    smallItemList[3],
                    smallItemList[7]              
            ],
        },
        {
            name: "Duelist Emblem",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/DuelistEmblem.png',
            tier: 'A',
            recipe: [
                    smallItemList[5],
                    smallItemList[7]              
            ],
        },
        {
            name: "Heart Emblem",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/HeartEmblem.png',
            tier: 'A',
            recipe: [
                    smallItemList[8],
                    smallItemList[7]              
            ],
        },
        {
            name: "InfiniTeam Emblem",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/InfiniTeamEmblem.png',
            tier: 'A',
            recipe: [
                    smallItemList[0],
                    smallItemList[7]              
            ],
        },
        {
            name: "Mascot Emblem",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/MascotEmblem.png',
            tier: 'A',
            recipe: [
                    smallItemList[2],
                    smallItemList[7]              
            ],
        },
        {
            name: "Ox Force Emblem",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/OxForceEmblem.png',
            tier: 'A',
            recipe: [
                    smallItemList[1],
                    smallItemList[7]              
            ],
        },
        {
            name: "Renegade Emblem",
            des: 'Grant 10 bonus Ability Power. Combat start: Grant 20 Ability Power every 5 seconds.',
            src: 'https://rerollcdn.com/items/RenegadeEmblem.png',
            tier: 'A',
            recipe: [
                    smallItemList[6],
                    smallItemList[7]              
            ],
        },

    ]

    const dataTier = [
        {
            nameTeamComp: 'Aegis Quickdraw',
            type: 'Slow Roll(7)',
            Tier: 'S',
            champions: [    
                data[40],
                data[20],
                data[34],
                data[9],
                data[14],
                data[29],
                data[33],
                data[48],
            ],
            earlyComp:[
                data[21],
                data[10],
                data[23],
                data[54],
                data[20],
            ],
            trait:'6 Star Guardian 2 Quickdraw 2 Defender 1 Ace',
            opener: open2,
        },
        {
            nameTeamComp: 'Gadgeteens',
            type: 'Slow Roll(7)',
            Tier: 'S',
            champions: [    
                data[26],
                data[37],
                data[2],
                data[38],
                data[15],
                data[22],
                data[44],
                data[35],
            ],
            earlyComp:[
                data[37],
                data[2],
                data[20],
                data[1],
                data[15],
            ],
            trait:'5 Gadgeteens 3 Hacker 2 Defender 2 Spellslinger',
            opener: open3,
        },
        {
            nameTeamComp: 'InfiniTeams',
            type: 'Fast 8',
            Tier: 'S',
            champions: [    
                data[25],
                data[45],
                data[10],
                data[44],
                data[14],
                data[49],
                data[11],
                data[50],
            ],
            earlyComp:[
                data[25],
                data[10],
                data[40],
                data[45],
                data[44],
            ],
            trait:'1 Corrupted 1 Threat 2 Parallel 5 InfiniTeam',
            opener: open4,
        },
        {
            nameTeamComp: 'Ox Force Spellslinger',
            type: 'Standard',
            Tier: 'S',
            champions: [    
                data[2],
                data[12],
                data[1],
                data[46],
                data[9],
                data[33],
                data[49],
                data[55],
            ],
            earlyComp:[
                data[26],
                data[37],
                data[2],
                data[12],
                data[46],
            ],
            trait:'4 Ox Force 4 Spellslinger 2 Star Guardian 2 Aegis 2 Duelist 2 Heart',
            opener: open5,
        },
        {
            nameTeamComp: 'Quickdraws',
            type: 'Hyper Roll',
            Tier: 'A',
            champions: [    
                data[6],
                data[25],
                data[47],
                data[7],
                data[10],
                data[20],
                data[42],
                data[29],
            ],
            earlyComp:[
                data[6],
                data[25],
                data[47],
                data[7],
                data[10],
            ],
            trait:'4 Quickdraw 3 Renegade 3 Anima Squad 2 Brawler 2 A.D.M.I.N 1 Ace',
            opener: open6,
        },
        {
            nameTeamComp: 'Anima Squad',
            type: 'Standard',
            Tier: 'A',
            champions: [    
                data[32],
                data[19],
                data[1],
                data[42],
                data[52],
                data[9],
                data[14],
                data[29],
            ],
            earlyComp:[
                data[32],
                data[47],
                data[19],
                data[42],
                data[52],
            ],
            trait:'5 Anima Squad 2 Aegis 2 Prankster 2 Mascot 2 Defender 1 Ace',
            opener: open7,
        },
        {
            nameTeamComp: 'Aegis Threats',
            type: 'Fast 8',
            Tier: 'A',
            champions: [    
                data[57],
                data[0],
                data[5],
                data[9],
                data[14],
                data[11],
                data[24],
                data[51],
            ],
            earlyComp:[
                data[3],
                data[41],
                data[54],
                data[58],
                data[52],
            ],
            trait:'4 Threat 1 Corrupted 3 Mecha: Prime 2 Aegis 2 Defender',
            opener: open8,
        },
        {
            nameTeamComp: 'Carry Augment: Draven',
            type: 'Slow Roll(6)',
            Tier: 'A',
            champions: [    
                data[13],
                data[57],
                data[8],
                data[23],
                data[28],
                data[17],
                data[14],
                data[24],
            ],
            earlyComp:[
                data[37],
                data[57],
                data[8],
                data[54],
                data[17],
            ],
            trait:'5 Mecha: PRIME 3 Super 2 Defender 2 Brawler 1 Ace',
            opener: open9,
        },
        {
            nameTeamComp: 'Brawlers',
            type: 'Fast 8',
            Tier: 'A',
            champions: [    
                data[6],
                data[41],
                data[54],
                data[17],
                data[42],
                data[56],
                data[24],
                data[30],
            ],
            earlyComp:[
                data[3],
                data[41],
                data[54],
                data[58],
                data[52],
            ],
            trait:'6 Brawler 3 Laser Corp 2 A.D.M.I.N 2 Aegis 1 Ace',
            opener: open10,
        },
    ]
    // const [dataUpdate, setDataUpdate] = useState(dataTier)
    // console.log(dataUpdate[0].handleShowInfo)
    // console.log(showInfo2)


    const ref = useRef([]);

    const [newDataTier,setNewDataTier] = useState([])

    const Unchecked = () => {
        console.log(ref.current.length);
        for (let i = 0; i < ref.current.length; i++) {
          ref.current[i].checked = false;
        }
        
    };

    const handleTierList = (e) => {
        if(e.target.checked){
            const coinFilter = dataTier.filter(item => item.type === e.target.value)
            console.log(coinFilter)

            coinFilter.map((item)=>{
                
                setNewDataTier(pre =>[...pre, item])
            })
            
        }
        else{
            const coinFilter = newDataTier.filter(item => item.type === e.target.value)
            console.log(coinFilter)
            coinFilter.map((item)=>{
                setNewDataTier(pre =>{
                    return [...pre.filter(abc=>abc!==item)]
                })
            })  
        }
    }

    console.log(newDataTier)
    




    return (
    <div className="teamcomp">
        <div className="filter">
            <div className='top-filter'>
                <div>Filters</div>
                <button className="reset" onClick={Unchecked}>Reset</button>
            </div>
            <div className="bottom-filter">
                <div className='title'>
                    <div className='filter-title' onClick={open1}>
                        <div className='filter-name'>Playstyle</div>
                        <span class="material-symbols-outlined icon">expand_less</span>
                    </div>
                    {showCoin ? 
                    <div className="showcoin">
                        <div className="coinlogo">
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">Standard</div>
                                </div>
                            </div> 
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">Hyper Roll</div>
                                </div>
                            </div> 
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">Slow Roll (6)</div>
                                </div>
                            </div> 
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">Slow Roll (7)</div>
                                </div>
                            </div> 
                            <div className="coin" >
                                <div className="start">
                                    <img class="gold-icon" src="https://rerollcdn.com/ui/icon-gold.svg" alt="cost"></img>
                                    <div className="cost">Fast 8</div>
                                </div>
                            </div> 
                        </div>
                        <div className="input">
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[0] = element;}} value='Standard' onChange={handleTierList}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[1] = element;}} value='Hyper Roll' onChange={handleTierList}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[2] = element;}} value='Slow Roll(6)' onChange={handleTierList}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[3] = element;}} value='Slow Roll(7)' onChange={handleTierList}/>
                            <input type="checkbox" className="checkbox" ref={(element) => {ref.current[4] = element;}} value='Fast 8' onChange={handleTierList}/>
                        </div>
                     </div>
                    : <></>}
                </div>
                
            </div>
        </div>
        <div className="list">
            <div className="text">
                <div>
                    TFT Meta Team Comps Tier List
                </div>
                <div className="text2">
                    Patch 13.7
                </div>
            </div>
            <div className="team-comp-list">
                {showInfo2 ? 
                <div className='extra-part' onClick={open2}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[0].earlyComp[0].src} alt={dataTier[0].earlyComp[0].alt} className={dataTier[0].earlyComp[0].coin} />
                                <img src={dataTier[0].earlyComp[1].src} alt={dataTier[0].earlyComp[0].alt} className={dataTier[0].earlyComp[1].coin} />
                                <img src={dataTier[0].earlyComp[2].src} alt={dataTier[0].earlyComp[0].alt} className={dataTier[0].earlyComp[2].coin} />
                                <img src={dataTier[0].earlyComp[3].src} alt={dataTier[0].earlyComp[0].alt} className={dataTier[0].earlyComp[3].coin} />
                                <img src={dataTier[0].earlyComp[4].src} alt={dataTier[0].earlyComp[0].alt} className={dataTier[0].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[0].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[0].earlyComp[4].src} alt={dataTier[0].earlyComp[0].alt} className={dataTier[0].earlyComp[4].coin} />
                                    <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div>
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[11].src} alt={bigItemList[11].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[13].src} alt={bigItemList[13].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[28].src} alt={bigItemList[28].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[0].champions[2].src} alt={dataTier[0].champions[2].alt} className={dataTier[0].champions[2].coin} />
                                    <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div>
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[15].src} alt={bigItemList[15].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[24].src} alt={bigItemList[24].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[32].src} alt={bigItemList[32].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[10].src} alt={data[10].alt} className={data[10].coin} />
                                <img src={data[11].src} alt={data[11].alt} className={data[11].coin} />
                                <img src={data[24].src} alt={data[24].alt} className={data[24].coin} />
                            </div>
                            <div className='last'>
                                <img src={dataTier[0].champions[6].src} alt={dataTier[0].champions[6].alt} className={dataTier[0].champions[6].coin} />
                                <img src={dataTier[0].champions[7].src} alt={dataTier[0].champions[7].alt} className={dataTier[0].champions[7].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[25].src} alt={data[25].alt} className={data[25].coin} />
                                <img src={data[10].src} alt={data[10].alt} className={data[10].coin} />
                            </div>
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp1} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>}  
                {showInfo3 ? 
                <div className='extra-part' onClick={open3}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[1].earlyComp[0].src} alt={dataTier[1].earlyComp[0].alt} className={dataTier[1].earlyComp[0].coin} />
                                <img src={dataTier[1].earlyComp[1].src} alt={dataTier[1].earlyComp[0].alt} className={dataTier[1].earlyComp[1].coin} />
                                <img src={dataTier[1].earlyComp[2].src} alt={dataTier[1].earlyComp[0].alt} className={dataTier[1].earlyComp[2].coin} />
                                <img src={dataTier[1].earlyComp[3].src} alt={dataTier[1].earlyComp[0].alt} className={dataTier[1].earlyComp[3].coin} />
                                <img src={dataTier[1].earlyComp[4].src} alt={dataTier[1].earlyComp[0].alt} className={dataTier[1].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[1].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[1].earlyComp[4].src} alt={dataTier[1].earlyComp[4].alt} className={dataTier[1].earlyComp[4].coin} />
                                    <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div>
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[1].src} alt={bigItemList[1].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[14].src} alt={bigItemList[14].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[17].src} alt={bigItemList[17].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[1].champions[2].src} alt={dataTier[1].champions[2].alt} className={dataTier[1].champions[2].coin} />
                                    <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div>
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[15].src} alt={bigItemList[15].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[8].src} alt={bigItemList[8].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[33].src} alt={bigItemList[33].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[1].src} alt={data[1].alt} className={data[1].coin} />
                                <img src={data[9].src} alt={data[9].alt} className={data[9].coin} />
                                <img src={data[11].src} alt={data[11].alt} className={data[11].coin} />
                            </div>
                            <div className='last'>
                                <img src={dataTier[1].champions[0].src} alt={dataTier[1].champions[0].alt} className={dataTier[1].champions[0].coin} />
                                <img src={dataTier[1].champions[1].src} alt={dataTier[1].champions[1].alt} className={dataTier[1].champions[1].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[1].src} alt={data[1].alt} className={data[1].coin} />
                                <img src={data[9].src} alt={data[9].alt} className={data[9].coin} />
                            </div>
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp2} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>}  
                {showInfo4 ? 
                <div className='extra-part' onClick={open4}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[2].earlyComp[0].src} alt={dataTier[2].earlyComp[0].alt} className={dataTier[2].earlyComp[0].coin} />
                                <img src={dataTier[2].earlyComp[1].src} alt={dataTier[2].earlyComp[0].alt} className={dataTier[2].earlyComp[1].coin} />
                                <img src={dataTier[2].earlyComp[2].src} alt={dataTier[2].earlyComp[0].alt} className={dataTier[2].earlyComp[2].coin} />
                                <img src={dataTier[2].earlyComp[3].src} alt={dataTier[2].earlyComp[0].alt} className={dataTier[2].earlyComp[3].coin} />
                                <img src={dataTier[2].earlyComp[4].src} alt={dataTier[2].earlyComp[0].alt} className={dataTier[2].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[2].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[2].champions[7].src} alt={dataTier[2].champions[7].alt} className={dataTier[2].champions[7].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[9].src} alt={bigItemList[9].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[14].src} alt={bigItemList[14].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[17].src} alt={bigItemList[17].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[2].champions[4].src} alt={dataTier[2].champions[4].alt} className={dataTier[2].champions[4].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[15].src} alt={bigItemList[15].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[6].src} alt={bigItemList[6].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[24].src} alt={bigItemList[24].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[43].src} alt={data[43].alt} className={data[43].coin} />
                                <img src={data[16].src} alt={data[16].alt} className={data[16].coin} />
                                <img src={data[51].src} alt={data[51].alt} className={data[51].coin} />
                            </div>
                            <div className='last'>
                                <img src={data[11].src} alt={data[11].alt} className={data[11].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[36].src} alt={data[36].alt} className={data[36].coin} />
                                <img src={data[43].src} alt={data[43].alt} className={data[43].coin} />
                            </div>
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp3} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>}  
                {showInfo5 ? 
                <div className='extra-part' onClick={open5}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[3].earlyComp[0].src} alt={dataTier[3].earlyComp[0].alt} className={dataTier[3].earlyComp[0].coin} />
                                <img src={dataTier[3].earlyComp[1].src} alt={dataTier[3].earlyComp[0].alt} className={dataTier[3].earlyComp[1].coin} />
                                <img src={dataTier[3].earlyComp[2].src} alt={dataTier[3].earlyComp[0].alt} className={dataTier[3].earlyComp[2].coin} />
                                <img src={dataTier[3].earlyComp[3].src} alt={dataTier[3].earlyComp[0].alt} className={dataTier[3].earlyComp[3].coin} />
                                <img src={dataTier[3].earlyComp[4].src} alt={dataTier[3].earlyComp[0].alt} className={dataTier[3].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[3].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[3].champions[6].src} alt={dataTier[3].champions[6].alt} className={dataTier[3].champions[6].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[11].src} alt={bigItemList[11].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[16].src} alt={bigItemList[16].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[28].src} alt={bigItemList[28].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[3].champions[0].src} alt={dataTier[3].champions[0].alt} className={dataTier[3].champions[0].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[15].src} alt={bigItemList[15].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[8].src} alt={bigItemList[8].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[33].src} alt={bigItemList[33].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[11].src} alt={data[11].alt} className={data[11].coin} />
                                <img src={data[24].src} alt={data[24].alt} className={data[24].coin} />
                            </div>
                            <div className='last'>
                                <img src={data[46].src} alt={data[46].alt} className={data[46].coin} />
                                <img src={data[33].src} alt={data[33].alt} className={data[33].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[36].src} alt={data[36].alt} className={data[36].coin} />
                                <img src={data[44].src} alt={data[44].alt} className={data[44].coin} />
                            </div>
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp4} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>} 
                {showInfo6 ? 
                <div className='extra-part' onClick={open6}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[4].earlyComp[0].src} alt={dataTier[4].earlyComp[0].alt} className={dataTier[4].earlyComp[0].coin} />
                                <img src={dataTier[4].earlyComp[1].src} alt={dataTier[4].earlyComp[0].alt} className={dataTier[4].earlyComp[1].coin} />
                                <img src={dataTier[4].earlyComp[2].src} alt={dataTier[4].earlyComp[0].alt} className={dataTier[4].earlyComp[2].coin} />
                                <img src={dataTier[4].earlyComp[3].src} alt={dataTier[4].earlyComp[0].alt} className={dataTier[4].earlyComp[3].coin} />
                                <img src={dataTier[4].earlyComp[4].src} alt={dataTier[4].earlyComp[0].alt} className={dataTier[4].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[4].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[4].champions[1].src} alt={dataTier[4].champions[1].alt} className={dataTier[4].champions[1].coin} />
                                    <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div>
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[2].src} alt={bigItemList[2].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[16].src} alt={bigItemList[16].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[13].src} alt={bigItemList[13].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[4].champions[0].src} alt={dataTier[4].champions[0].alt} className={dataTier[4].champions[0].coin} />
                                    <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div>
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[15].src} alt={bigItemList[15].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[6].src} alt={bigItemList[6].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[29].src} alt={bigItemList[29].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[11].src} alt={data[11].alt} className={data[11].coin} />
                                <img src={data[51].src} alt={data[51].alt} className={data[51].coin} />
                            </div>
                            {/* <div className='last'>
                                <img src={data[46].src} alt={data[46].alt} className={data[46].coin} />
                                <img src={data[33].src} alt={data[33].alt} className={data[33].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[36].src} alt={data[36].alt} className={data[36].coin} />
                                <img src={data[44].src} alt={data[44].alt} className={data[43].coin} />
                            </div> */}
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp5} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>} 
                {showInfo7 ? 
                <div className='extra-part' onClick={open7}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[5].earlyComp[0].src} alt={dataTier[5].earlyComp[0].alt} className={dataTier[5].earlyComp[0].coin} />
                                <img src={dataTier[5].earlyComp[1].src} alt={dataTier[5].earlyComp[0].alt} className={dataTier[5].earlyComp[1].coin} />
                                <img src={dataTier[5].earlyComp[2].src} alt={dataTier[5].earlyComp[0].alt} className={dataTier[5].earlyComp[2].coin} />
                                <img src={dataTier[5].earlyComp[3].src} alt={dataTier[5].earlyComp[0].alt} className={dataTier[5].earlyComp[3].coin} />
                                <img src={dataTier[5].earlyComp[4].src} alt={dataTier[5].earlyComp[0].alt} className={dataTier[5].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[5].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[5].champions[7].src} alt={dataTier[5].champions[7].alt} className={dataTier[5].champions[7].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[9].src} alt={bigItemList[9].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[16].src} alt={bigItemList[16].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[27].src} alt={bigItemList[27].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[5].champions[3].src} alt={dataTier[5].champions[3].alt} className={dataTier[5].champions[3].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[15].src} alt={bigItemList[15].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[24].src} alt={bigItemList[24].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[29].src} alt={bigItemList[29].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[54].src} alt={data[54].alt} className={data[54].coin} />
                                <img src={data[11].src} alt={data[11].alt} className={data[11].coin} />
                                <img src={data[24].src} alt={data[24].alt} className={data[24].coin} />
                            </div>
                            <div className='last'>
                                <img src={data[14].src} alt={data[14].alt} className={data[14].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[36].src} alt={data[36].alt} className={data[36].coin} />
                                <img src={data[54].src} alt={data[54].alt} className={data[54].coin} />
                            </div>
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp6} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>} 
                {showInfo8 ? 
                <div className='extra-part' onClick={open8}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[6].earlyComp[0].src} alt={dataTier[6].earlyComp[0].alt} className={dataTier[6].earlyComp[0].coin} />
                                <img src={dataTier[6].earlyComp[1].src} alt={dataTier[6].earlyComp[0].alt} className={dataTier[6].earlyComp[1].coin} />
                                <img src={dataTier[6].earlyComp[2].src} alt={dataTier[6].earlyComp[0].alt} className={dataTier[6].earlyComp[2].coin} />
                                <img src={dataTier[6].earlyComp[3].src} alt={dataTier[6].earlyComp[0].alt} className={dataTier[6].earlyComp[3].coin} />
                                <img src={dataTier[6].earlyComp[4].src} alt={dataTier[6].earlyComp[0].alt} className={dataTier[6].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[6].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[6].champions[2].src} alt={dataTier[6].champions[2].alt} className={dataTier[6].champions[2].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[9].src} alt={bigItemList[9].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[13].src} alt={bigItemList[13].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[14].src} alt={bigItemList[14].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[6].champions[1].src} alt={dataTier[6].champions[1].alt} className={dataTier[6].champions[1].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[33].src} alt={bigItemList[33].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[24].src} alt={bigItemList[24].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[29].src} alt={bigItemList[29].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[54].src} alt={data[54].alt} className={data[54].coin} />
                            </div>
                            <div className='last'>
                                <img src={data[51].src} alt={data[51].alt} className={data[51].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[54].src} alt={data[54].alt} className={data[54].coin} />
                            </div>
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp7} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>} 
                {showInfo9 ?
                <div className='extra-part' onClick={open9}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[7].earlyComp[0].src} alt={dataTier[7].earlyComp[0].alt} className={dataTier[7].earlyComp[0].coin} />
                                <img src={dataTier[7].earlyComp[1].src} alt={dataTier[7].earlyComp[0].alt} className={dataTier[7].earlyComp[1].coin} />
                                <img src={dataTier[7].earlyComp[2].src} alt={dataTier[7].earlyComp[0].alt} className={dataTier[7].earlyComp[2].coin} />
                                <img src={dataTier[7].earlyComp[3].src} alt={dataTier[7].earlyComp[0].alt} className={dataTier[7].earlyComp[3].coin} />
                                <img src={dataTier[7].earlyComp[4].src} alt={dataTier[7].earlyComp[0].alt} className={dataTier[7].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[7].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[7].champions[2].src} alt={dataTier[7].champions[2].alt} className={dataTier[7].champions[2].coin} />
                                    <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div>
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[17].src} alt={bigItemList[17].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[13].src} alt={bigItemList[13].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[14].src} alt={bigItemList[14].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[7].champions[4].src} alt={dataTier[7].champions[4].alt} className={dataTier[7].champions[4].coin} />
                                    <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div>
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[33].src} alt={bigItemList[33].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[24].src} alt={bigItemList[24].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[29].src} alt={bigItemList[29].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[1].src} alt={data[1].alt} className={data[1].coin} />
                            </div>
                            <div className='last'>
                                <img src={data[14].src} alt={data[14].alt} className={data[14].coin} />
                                <img src={data[23].src} alt={data[23].alt} className={data[23].coin} />
                                <img src={data[28].src} alt={data[28].alt} className={data[28].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[54].src} alt={data[54].alt} className={data[54].coin} />
                                <img src={data[1].src} alt={data[1].alt} className={data[1].coin} />
                                <img src={data[9].src} alt={data[9].alt} className={data[9].coin} />
                            </div>
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp9} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>}
                {showInfo10 ?
                <div className='extra-part' onClick={open10}>
                    <div className="top1-content">
                        <div className="early-comp">
                            <div>Early Comp</div>
                            <div className="teamcomp-img">
                                <img src={dataTier[8].earlyComp[0].src} alt={dataTier[8].earlyComp[0].alt} className={dataTier[8].earlyComp[0].coin} />
                                <img src={dataTier[8].earlyComp[1].src} alt={dataTier[8].earlyComp[0].alt} className={dataTier[8].earlyComp[1].coin} />
                                <img src={dataTier[8].earlyComp[2].src} alt={dataTier[8].earlyComp[0].alt} className={dataTier[8].earlyComp[2].coin} />
                                <img src={dataTier[8].earlyComp[3].src} alt={dataTier[8].earlyComp[0].alt} className={dataTier[8].earlyComp[3].coin} />
                                <img src={dataTier[8].earlyComp[4].src} alt={dataTier[8].earlyComp[0].alt} className={dataTier[8].earlyComp[4].coin} />
                            </div>
                        </div>
                        <div className="traits">
                            {dataTier[8].trait}
                        </div>
                        <div className="item-for-champ">
                            <div>Requirement</div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[8].champions[5].src} alt={dataTier[8].champions[5].alt} className={dataTier[8].champions[5].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[1].src} alt={bigItemList[1].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[32].src} alt={bigItemList[32].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[14].src} alt={bigItemList[14].name} className="itemm"/>
                            </div>
                            <div className='requirement'>
                                <div className='cham-require'>
                                    <img src={dataTier[8].champions[4].src} alt={dataTier[8].champions[4].alt} className={dataTier[8].champions[4].coin} />
                                    {/* <div className='hehe' style={{color:'yellow',position:'absolute',top:'-12px',left:'50%',fontSize:'14px',WebkitTransform:'translateX(-50%)',transform:'translateX(-50%)',width:'100%',textAlign:'center',textShadow:'0 3px 3px #000',letterSpacing:'-3px',marginLeft:'-1px'}}>★★★</div> */}
                                </div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[33].src} alt={bigItemList[33].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[24].src} alt={bigItemList[24].name} className="itemm"/>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={bigItemList[29].src} alt={bigItemList[29].name} className="itemm"/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="option">
                            <div>Option</div>
                            <div className='first'>
                                <div className="lvl-up">Level Up</div>
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[14].src} alt={data[14].alt} className={data[14].coin} />
                            </div>
                            <div className='last'>
                                <img src={data[54].src} alt={data[54].alt} className={data[54].coin} />
                                <img src={data[18].src} alt={data[18].alt} className={data[18].coin} />
                                <img src={data[24].src} alt={data[24].alt} className={data[24].coin} />
                                <span class="material-symbols-outlined icon1">expand_less</span>
                                <img src={data[3].src} alt={data[3].alt} className={data[3].coin} />
                                <img src={data[58].src} alt={data[58].alt} className={data[58].coin} />
                                <img src={data[14].src} alt={data[14].alt} className={data[14].coin} />
                            </div>
                        </div>
                        <div className="positioning">
                            <div>Positioning</div>
                            <img src={teamcomp8} alt="teamcomp1" className='teamcomp1'/>
                        </div>
                    </div>
                </div> 
                : <></>}
                { newDataTier.length > 0 ?
                newDataTier.map((item)=>{
                    return(        
                    <div className="item">
                        <div className="start-content">
                            <div className="tierS">{item.Tier}</div>
                            <div className="text-content">
                                <div className="name-team-comp">{item.nameTeamComp}</div>
                                <div className="type">{item.type}</div>
                            </div>
                        </div>
                        <div className="mid-content">
                            {item.champions.map((item1)=>{
                                return(
                                    <div className="champion3 item-of-item 3star">
                                        <img src={item1.src} alt={item1.alt} className={item1.coin} />
                                        <div className="champion3-name">{item1.alt}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="end-content">
                            <span class="material-symbols-outlined icon" onClick={item.opener}>expand_less</span>
                        </div>
                    </div>
                    )
                })
            : dataTier.map((item)=>{
                return(        
                <div className="item">
                    <div className="start-content">
                        <div className="tierS">{item.Tier}</div>
                        <div className="text-content">
                            <div className="name-team-comp">{item.nameTeamComp}</div>
                            <div className="type">{item.type}</div>
                        </div>
                    </div>
                    <div className="mid-content">
                        {item.champions.map((item1)=>{
                            return(
                                <div className="champion3 item-of-item 3star">
                                    <img src={item1.src} alt={item1.alt} className={item1.coin} />
                                    <div className="champion3-name">{item1.alt}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="end-content">
                        <span class="material-symbols-outlined icon" onClick={item.opener}>expand_less</span>
                    </div>
                </div>
                )
            })
            
            }
                
                </div>
                </div>
                </div>
                
                );
            }
export default TeamComp;