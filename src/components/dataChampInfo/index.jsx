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

export const dataInfo = [
    {
        id: 1,
        class: '',
        origin: 'Threat',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Aatrox.png`),        
        className: "image coin4",
        alt: "Aatrox",
        coin: 'coin4',
        abilityName:'Soul Crush',
        form: 'Active',
        info: 'Aatrox sucks the soul of nearby enemies, dealing magic damage and gaining a percent of his max HP. Then he unleashes his demonic form for the rest of combat, replacing his spell with The Darkin Blade. The Darkin Blade: Aatrox slams his greatsword down in a line, dealing magic damage to all enemies hit and healing himself.',
        more: 'Percent of Max HP: 40% / 40% / 150%. Soul Crush Damage: 200 / 300 / 1200. Darkin Blade Damage: 200 / 300 / 1200. Healing: 350 / 400 / 800',
        firstGear: 'https://rerollcdn.com/items/Redemption.png',
        secondGear: 'https://rerollcdn.com/items/SunfireCape.png',
        thirdGear: 'https://rerollcdn.com/items/WarmogsArmor.png',
        cost: '4',
        health: '1100 / 1980 / 3564',
        mana: '90',
        armor: '60',
        MR: '60',
        DPS: '48 / 86 / 156',
        damage:' 60 / 108 / 194',
        atkSpd:' 0.8',
        critRate: '25%',
        range: '1',
    },
    {
        id: 2,
        class: ['Mascot','Aegis'],
        origin: 'Ox Force',
        src: (`https://rerollcdn.com/characters/Skin/8.5/Alistar.png`),
        className: "image coin3",
        alt: "Alistar",
        coin: 'coin3',
        abilityName:'Pulverize',
        form: 'Active',
        info: 'Alistar slams the ground underneath his target, dealing magic damage and knocking them up for 1.5 seconds. He then roars, healing himself and the lowest health ally champion for 20% of his maximum health.',
        more: 'Damage: 140 / 210 / 350',
        firstGear: 'https://rerollcdn.com/items/Redemption.png',
        secondGear: 'https://rerollcdn.com/items/SunfireCape.png',
        thirdGear: 'https://rerollcdn.com/items/WarmogsArmor.png',
        cost: '3',
        health: ' 800 / 1440 / 2592',
        mana: '175',
        armor: '50',
        MR: '50',
        DPS: '28 / 50 / 89',
        damage:' 50 / 90 / 162',
        atkSpd:' 0.55',
        critRate: '25%',
        range: '1',
    },
    {
        id: 3,
        class: 'Spellslinger', 
        origin: ['Gadgeteen','Ox Force'],
        src: (`https://rerollcdn.com/characters/Skin/8.5/Annie.png`),
        className: "image coin2",
        alt: "Annie",
        coin: 'coin2',
        des: [{
            abilityName:'Soul Crush',
            form: 'Active',
            info: 'Aatrox sucks the soul of nearby enemies, dealing magic damage and gaining a percent of his max HP. Then he unleashes his demonic form for the rest of combat, replacing his spell with The Darkin Blade. The Darkin Blade: Aatrox slams his greatsword down in a line, dealing magic damage to all enemies hit and healing himself.',
            percentOfMaxHP: 'Percent of Max HP: 40% / 40% / 150%',
            soulCrushDamage: '200 / 300 / 1200',
            darkinBladeDamage: '200 / 300 / 1200',
            healing: '350 / 400 / 800'
        }]
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