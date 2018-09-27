//======================
//     Misc
//==============================
const languagesObj = {
    Common: 'The language common to all races',
    Elvish: 'The language of the Elves',
    Dwarvish: 'The language of the Dwarves',
    Gnomish: 'The language of the Gnomes',
    Halfling: 'The language of Halflings',
    Orcish: 'The language of Orcs',
    Infernal: 'The language of demons'
}
const cantripObj = 'make this later'

const skillObj = {
  Athletics: 'info on ath',
  'Animal Handling': 'blah',
  Deception: 'bla'
}

let user = {
    race: '',
    classType: '',
    name: '',
    speed: 0,
    alignment: [],
    stats:{
      STR: 0,
      DEX: 0,
      CON: 0,
      INT: 0,
      WIS: 0,
      CHA: 0},
    savingThrows:[],
    skills: [],
    profs: {
      weapons:[],
      armor:[],
      other:[]},
    features: [],
    HP: 0,
    AC: 0,
    DC: 0,
    traits: '',
    ideals:'',
    bonds:'',
    flaws:'',
    weapons:[],
    spells:[],
    equipment:[],
    languages:[]
  }

//=====================================
//              Races
//=====================================

const subraces = {
    Dwarf:{
        'Hill Dwarf' : {
            subType: 'Hill Dwarf',
            desc: '...',
            stats:{
                WIS: 1},
            HP:1
        },
        
        'Mountain Dwarf' : {
            subType:'Mountain Dwarf',
            desc: '...',
            stats:{
                STR: 2
            },
            profs: {
            armor:['light armor', 'medium armor']
            }
        }
    },
    Elf:{
        'High Elf' : {
        subType: 'High Elf',
        desc: '...',
        stats: {
            INT: 1},
        profs: {
            weapons: ['longsword', 'shortsword', 'longbow', 'shortbow']},
        spells: ['+1 cantrip'],
        language:['+1 language'],
        choices: {languages: languagesObj,
                    spells: cantripObj,
                }
        },
        
        'Wood Elf' : {
            subType: 'Wood Elf',
            desc: '...',
            stats: {
                WIS: 1},
            profs: {
                weapons:['longsword', 'shortsword', 'longbow', 'shortbow']},
            speed: 35,
            features: ['can attempt to hide even when lightly obscured by foliage, rain, snow, mist, or other natural phenomena']
        },
        
        'Dark Elf' : {
            subType: 'Dark Elf',
            desc: '...',
            stats:{
            CHA: 1},
            features: ['Darkvision:120ft', 'Disadvantage on attacks in direct sunlight'],
            spells: ['Dancing Lights'],
            profs: {
                weapons:['rapiers','shortswords', 'hand crossbows']}
        }
    },
    Halfling:{
        "Lightfoot Halfling" : {
            subType: 'Lightfoot Halfling',
            desc: '...',
            stats:{
                CHA:1},
            features:['Can attempt to hide behind a creature at least one size larger than you']
        },
        
        "Stout Halfling" : {
            subType: 'Stout Halfling',
            desc: '...',
            stats:{
                CON:1},
            features:['Advantage on saving throws against poison, resistance against poison damage']
        }
    },
    "Gnome": {
        "Forest Gnome" : {
            subType:'Forest Gnome',
            desc: '...',
            stats:{
                DEX: 1},
            features: ['You can communicate simple ideas with small beasts'],
            spells: ['Minor Illusion']
        },
        
        "Rock Gnome" : {
            subType: 'Rock Gnome',
            desc: '...',
            stats:{
                CON: 1},
            features:['When making a history cehck related to technology, magic, or alchemy, add twice your proficiency bonus'],
            profs: {
                other:["artisan's tools"]}
        }
    }
}  

const races = {
     Dwarf : {
          raceType:'Dwarf',
          desc:'description',
          names: [['Adrik', 'Kildrak', 'Vondal'],['Amber', 'Vistra', 'Mardred']],
          stats: {
              CON: 2},
          speed: 25,
          subrace: subraces.Dwarf,
          profs:{
            weapons:['battleaxe','handaxe', 'throwing hammer', 'warhammer'],
            other: ["smith's tools", "brewer's supplies", "mason's tools"]},
          features: ['Darkvision'],
          languages: ['Common', 'Dwarvish'],
      },
    Elf : {
        raceType: 'Elf',
        desc:'description',
        name: [['Adran', 'Heian', 'Thamior'],['Adrie', 'Lia', 'Nailo']],
        speed: 30,
        subrace: subraces.Elf,
        stats:{
          DEX: 2},
        savingThrows:[],
        skills: [],
        profs: [],
        features: ['Darkvision:60ft', 'Advg on saving throws from being charmed', "Magic, can't induce sleep"],
        HP: 0,
        spells:[],
        languages: ['Common', 'Elvish'],
      },
    Halfling : {
        raceType: 'Halfling',
        desc:'description',
        name: [['Alton', 'Milo', 'Wellby'],['Andry', 'Lidda', 'Verna']],
        speed: 25,
        subrace: subraces.Halfling,
        stats:{
          DEX: 2},
        savingThrows:[],
        skills: [],
        features: ['Can reroll if roll a 1', 'Advantage on saving throws against being frightened', 'Can move through creature larger than your size'],
        HP: 0,
        spells:[],
        languages: ['Common', 'Halfling'],
    } ,
    Human : {
            raceType: 'Human',
            desc:'description',
            name: [['Bardeid', 'Randal', 'Chen'],['Zasheir', 'Kerri', 'Lei']],
            speed: 30,
            stats:{
              STR: 1,
              DEX: 1,
              CON: 1,
              INT: 1,
              WIS: 1,
              CHA: 1},
            savingThrows:[],
            skills: [],
            features: [],
            HP: 0,
            spells:[],
            languages: ['Common'],
            choices: {languages: languagesObj}
    },   
    Dragonborn : {
        raceType: 'Dragon Born',
        desc:'description',
        name: [['Arjhan', 'Balsar', 'Torinn'],['Akra', 'Kava', 'Uadjit']],
        speed: 30,
        stats:{
          STR: 2,
          CHA: 1},
        savingThrows:[],
        skills: [],
        features: [],
        HP: 0,
        weapons:[],
        spells:[],
        languages: ['Common', 'Draconic'],
        choices: {weapons: [
            {dragonBreath1:'abc',
            dragonBreath2: 'xyz',
            dragonBreath3: 'ret'}
        ]}
        /*=====Add something to specify dragon breath===== */
    },
     Gnome : {
        raceType: 'Gnome',
        desc:'description',
        name: [['Alston', 'Fonkin', 'Wrenn'],['Ella', 'Shamil', 'Orla']],
        speed: 25,
        subrace: subraces.Gnome,
        stats:{
          INT: 2},
        savingThrows:[],
        skills: [],
        features: ['Darkvision:60ft'],
        HP: 0,
        spells:[],
        languages: ['Common', 'Gnomish'],
    },
    "Half Elf" : {
        raceType: 'Half Elf',
        desc:'description',
        dndClass: {},
        name: [['Bardeid', 'Randal', 'Chen'],['Adrie', 'Lia', 'Nailo']],
        speed: 30,
        stats:{
          CHA: 2},
        savingThrows:[],
        skills: [],
        features: ['Darkvision:60ft'],
        HP: 0,
        spells:[],
        languages: ['Common'],
        choices: {
            languages: languagesObj,
            skills: [2, [skillObj]],
            stats: [2, ['CON', 'DEX', 'STR', 'INT', 'WIS']]
        }
        /*=====add feature for choosing two ability scores to increase by 1 */
        /*====== ditto for +1 language and _2 skill proficiencies=====*/
    },
    "Half Orc" : {
        raceType: 'Half Orc',
        desc:'description',
        dndClass: {},
        name: [['Dench', 'Holg', 'Thokk'],['Baggi', 'Ovak', 'Yevelda']],
        speed: 30,
        stats:{
          STR: 2,
          CON: 1},
        savingThrows:[],
        skills: [],
        features: ['Darkvision:60ft', 'When reduced to 0HP, but not killed, you candrop to 1HP', 'When you get a cricial hit w/ a melee weapon, you can roll one damage dice again'],
        HP: 0,
        spells:[],
        languages: ['Common', 'Orc']
    },
     "Tiefling" : {
        raceType: 'Tiefling',
        desc:'description',
        dndClass: {},
        name: [['Akmenos', 'Ekemon', 'Skamos'],['Akta', 'Kallista', 'Rieta']],
        speed: 30,
        stats:{
          INT: 1,
          CHA: 2},
        savingThrows:[],
        skills: [],
        features: ['Darkvision:60ft', 'Resistant to fire damage'],
        HP: 0,
        spells:['Thaumaturgy'],
        languages: ['Common', 'Infernal']
    }
    }
    
const classes = {
  barbarian : {
      classType: 'Barbarian',
      hitDie: 12,
      savingThrows: ['STR', 'CON'],
      profs:{
          armor:['light armor','medium armor','shields'],
          weapons:['simple weapons', 'martial weapons']
      },
      armorType:[],
      skillChoices:['animalHandling', 'athletics', 'intimidation', 'nature', 'perception','survival'],
      equipment:['Great Axe', '2 Hand Axes', "explorer's pack",  '4 Javelins'],
      features:['Unarmored Defense']
  }
}

const backgrounds = {
  Sailor:{
    desc: 'sailor...',
    skills: ['Animal Handling'],
    equipment: ['XYZ']
  },
  Soldier: {
    desc: 'soldier...',
    skills: ['nature'],
    equipment: ['ABC']
  },
  Urchin: {
    desc: 'urchin...',
    skills: ['perception'],
    equipment: ['DEF']
  }
}

function addRacialData(user, race){
  let {raceType, speed, stats, profs = null, features = null, languages} = race
  user.race = raceType
  user.speed = speed
  if(profs !== null){
    for (let profType in race.profs){
      user.profs[profType] += race.profs[profType]
    }
  }
  if(features !== null){
    user.features.push(features)
  }
  for (let stat in stats){
    user.stats[stat] += stats[stat]
  }
  user.languages = languages
  return user
}

function addSubraceData(user, subrace){
  for(let attributes in subrace){
    switch(attributes){
      case 'subType':
        user.race = subrace.subType
        break
      case 'stats':
        for(let statName in subrace.stats){
          user.stats[statName] += subrace.stats[statName]
        }
        break
      case 'profs':
        for(let profType in subrace.profs){
          user.profs[profType].push(subrace.profs[profType])
        }
        break
      case 'speed':
        user.speed = subrace.speed
        break
      case 'features':
        user.features.push(subrace.features)
        break
      case 'spells':
        user.spells.push(subrace.spells)
        break
      case 'HP':
        user.HP += subrace.HP
        break
      default:
        console.log(`forgot to account for ${attributes}`)
    }
  }
  return user
}

function addClassData(user, className){
  let {classType, hitDie, savingThrows, profs, equipment, features} = className
  user.classType = classType
  user.hitDie = hitDie
  user.savingThrows = savingThrows
  for(let profType in profs){
    user.profs[profType].push(className.profs[profType])
  }
  user.equipment.push(equipment)
  user.features.push(features)
  return user
}

function addBackgroundData(user, background){
  user.skills.push(background.skills)
  user.equipment.push(background.equipment)
  return user
}

function choices(){
  
}

const createEl = element => document.createElement(element)
const getFirstEl = element => document.querySelectorAll(element)[0]
const getXEl = (element, i) => document.querySelectorAll(element)[i]
const appendEl = (element, element2) => element.appendChild(element2)

function buildDom(get, element1, create, element2, append){
  append(get(element1), create(element2))
}

//displays different race choices and descriptions
for(let i = 0; i < Object.keys(races).length; i++){
    buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
    let div = document.querySelectorAll('#holder div')[i]
    div.innerHTML = `<h3>${races[Object.keys(races)[i]].raceType}</h3>`
    div.classList.add('card')
    div.style.width = '30%'
    div.classList.add('col-sm-4')
    div.appendChild(createEl('p'))
    getXEl('p',i).innerHTML = races[Object.keys(races)[i]].desc
}

function select(){
  console.log(this)
  // let userSelection = e.target.firstChild.innerHTML
  // console.log(userSelection)
  for(let race in races){
    if(userSelection === race.raceType){
      applyRaceData(user, race)
      console.log(user.stats)
    }
    if(userSelection === race.raceType && race.hasOwnProperty('subrace')){
      //function to trigger subrace selection
      console.log('subrace trigger works')
    }
    if(userSelection === race.raceType && race.hasOwnProperty('choices')){
     //funtion to trigger choice selection
      console.log('choice trigger works')
    }
  }
  
  // e.target.style.transform = 'scale(.9)'
  console.log(user)
  document.getElementById('holder').innerHTML = ''
  
  
}
// console.log(document.querySelectorAll(#holde))
// document.querySelectorAll('#holder')[0].addEventListener('click', select)
let cards = document.querySelectorAll('div.card')
for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener('click', select)
}

function select(){
  let selection = this.firstElementChild.innerHTML
  // console.log(races[selection.toLowerCase()])
  let raceSelection = races[selection.toLowerCase()]
  console.log(raceSelection)
  addRacialData(user, raceSelection)
  console.log(user)
  document.getElementById('holder').innerHTML = ''
  populateSubraces(user, raceSelection)
}

function populateSubraces(user, raceSelection){
    if(!raceSelection.subrace){
      console.log('no subraces')
      return false
    }
    else{
      let subraceList = raceSelection.subrace
      console.log(subraceList)
      let subraceArray = Object.keys(subraceList)
     
      for(let i = 0; i < subraceArray.length; i++){
        buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
        let div = document.querySelectorAll('#holder div')[i]
        div.innerHTML = `<h3>${subraceList[subraceArray[i]].subType}</h3>`
        div.classList.add('card')
        div.style.width = '30%'
        div.classList.add('col-sm-4')
        div.appendChild(createEl('p'))
        getXEl('p', i).innerHTML = subraceList[subraceArray[i]].desc
      }
   }
}

// addRacialData(user, races.gnome)
// addSubraceData(user, races.gnome.subrace.forestGnome)
// addClassData(user, classes.barbarian)
// addBackgroundData(user, backgrounds.Sailor)




//=====================================================
//                  abstraction
//=====================================================


const createEl = element => document.createElement(element)
const getFirstEl = element => document.querySelectorAll(element)[0]
const getXEl = (element, i) => document.querySelectorAll(element)[i]
const appendEl = (element, element2) => element.appendChild(element2)

function buildDom(get, element1, create, element2, append){
  append(get(element1), create(element2))
}

//displays different race choices and descriptions
for(let i = 0; i < Object.keys(races).length; i++){
    buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
    let div = document.querySelectorAll('#holder div')[i]
    div.innerHTML = `<h3>${races[Object.keys(races)[i]].raceType}</h3>`
    div.classList.add('card')
    div.appendChild(createEl('p'))
    getXEl('p',i).innerHTML = races[Object.keys(races)[i]].desc
    div.addEventListener('click', select)
}

//abstraction of above function-> wrap in IIFE 
function generateCards(itemToLoop, functionOnClick, key){
    for (let i = 0; i < itemToLoop.length; i++){
        buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
        let div = document.querySelectorAll('#holder div')[i]
        div.innerHTML = `<h3>${itemToLoop[key]}</h3>`
        div.classList.add('card')
        div.appendChild(createEl('p'))
        getXEl('p',i).innerHTML = itemToLoop[key][i].desc
        div.addEventListener('click', functionOnClick)       
    }
}

// generateCards(Object.keys(races), select, )



function select(){
  for(let race in races){
    if(userSelection === race.raceType){
      applyRaceData(user, race)
      console.log(user.stats)
    }
    if(userSelection === race.raceType && race.hasOwnProperty('subrace')){
      //function to trigger subrace selection
      console.log('subrace trigger works')
    }
    if(userSelection === race.raceType && race.hasOwnProperty('choices')){
     //funtion to trigger choice selection
      console.log('choice trigger works')
    }
  }
  
  // e.target.style.transform = 'scale(.9)'
  console.log(user)
  document.getElementById('holder').innerHTML = ''
  
  
}
// console.log(document.querySelectorAll(#holde))
// document.querySelectorAll('#holder')[0].addEventListener('click', select)
// let cards = document.querySelectorAll('div.card')
// for(let i = 0; i < cards.length; i++){
//   cards[i].addEventListener('click', select)
// }

function select(){
  let selection = this.firstElementChild.innerHTML
  // console.log(races[selection.toLowerCase()])
  let raceSelection = races[selection.toLowerCase()]
  addRacialData(user, raceSelection)
  document.getElementById('holder').innerHTML = ''
  populateSubraces(user, raceSelection)
  console.log(user)
}

function populateSubraces(user, raceSelection){
    if(!raceSelection.subrace){
       //If race doesn't have subrace, terminate function
      console.log('no subraces')
      return false
    }
    else{
      //If race does have subrace, display subrace cards
      let subraceList = raceSelection.subrace
      let subraceArray = Object.keys(subraceList)
      for(let i = 0; i < subraceArray.length; i++){
        buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
        let div = document.querySelectorAll('#holder div')[i]
        div.innerHTML = `<h3>${subraceList[subraceArray[i]].subType}</h3>`
        div.classList.add('card')
        div.appendChild(createEl('p'))
        getXEl('p', i).innerHTML = subraceList[subraceArray[i]].desc
      }
   }
}

// addRacialData(user, races.gnome)
// addSubraceData(user, races.gnome.subrace.forestGnome)
// addClassData(user, classes.barbarian)
// addBackgroundData(user, backgrounds.Sailor)