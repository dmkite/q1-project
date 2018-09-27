// const dragonBreathObj = require('./charObjs')
// const races = require('./charObjs')
// const subraces = require('./charObjs')
// const classes = require('./charObjs')
// const backgrounds = require('./charObjs')
// const languagesObj = require('./charObjs')
// const cantripObj = require('./charObjs')
// const skillsObj = require('./charObjs')
// console.log(races)

const dragonBreathObj = {
    dragonBreath1:'abc',
    dragonBreath2: 'xyz',
    dragonBreath3: 'ret'
}

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
        choices: {languages: [1, languagesObj],
                    spells: [1, cantripObj],
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
          choices: {subrace: [1, subraces.Dwarf]}
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
        choices: {subrace: [1, subraces.Elf]}
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
        choices: {subraces: [1, subraces.Halfling]}
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
            choices: {languages: [1, languagesObj]}
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
        choices: {weapons: [1, dragonBreathObj]}
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
        choices: {subrace: [1, subraces.Gnome]}
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
            languages: [1, languagesObj],
            skills: [2, skillObj],
            stats: [2, {CON: 1, DEX: 1, STR: 1, INT: 1, WIS: 1}]
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
     Tiefling : {
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
  Barbarian : {
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

const userProgress = []

function wrapper(){
let fnCt = 0
const createEl = element => document.createElement(element)
const getFirstEl = element => document.querySelectorAll(element)[0]
const getXEl = (element, i) => document.querySelectorAll(element)[i]
const appendEl = (element, element2) => element.appendChild(element2)

function buildDom(get, element1, create, element2, append){
  append(get(element1), create(element2))
}

createDNDCharacter()

function createDNDCharacter(){
  switch(userProgress.length){
    case 0:
      //function to display characters
      displayRaces()
      break
    case 1:
      //function to display language choices
      console.log('entered stage choose a language')
      if(!races[userProgress[0]].choices || !races[userProgress[0]].choices.languages){
        choiceNotPresent()
      }
      else{
        displayX(races[userProgress[0]].choices.languages, 'languages')
      }
      break
    case 2:
      console.log('entered stage choose a skill')
      //function to display skill choices
      if(!races[userProgress[0]].choices || !races[userProgress[0]].choices.skills){
        choiceNotPresent()
      }
      else{
        displayX(races[userProgress[0]].choices.skills, 'skills')
      }
      break
    case 3:
    console.log('entered stage choose a stat')
      //function to display stats choices
      if(userProgress[0] !== 'Half Elf'){
        choiceNotPresent()
      }
      else{
        displayX(races[userProgress[0]].choices.stats, 'stats')
      }
      break
    case 4:
    console.log('entered stage choose dragon breah')
      //function to display weapon choices
      if(userProgress[0] !== 'Dragonborn'){
        choiceNotPresent()
      }
      else{
        displayX(races[userProgress[0]].choices.weapons, 'weapons')
      }
    case 5:
    console.log('entered stage choose a subrace')
      if(!races[userProgress[0]].subrace){
        choiceNotPresent()
      }
      else{
        displayX(subraces[userProgress[0]].choices.subrace, 'subrace')
      }
    case 6:
      console.log('entered stage to choose a language')
      if(userProgress[0] !== 'Elf'){
        choiceNotPresent()
      }
      else{
        displayX(subraces[userProgress[6]].choices.languages, 'languages')
      } 
      break
    case 7:
      console.log('entered stage to choose a cantrip')
      if(userProgress[0] !== 'Elf'){
        userProgress.push(null)
      }
      else{
        console.log('spellz')
      }
      //function to display spells
      break
    default:
    console.log('works so far')
  }
}//End of createDNDCharacter
console.log(races.Elf)
function choiceNotPresent(){
        userProgress.push(null)
        console.log(userProgress)
        console.log('--no choices to make--')
        fnCt = 1
        document.getElementById('nextButton').addEventListener('click', createDNDCharacter)
}

function displayRaces(){
  for(let i = 0; i < Object.keys(races).length; i++){
    buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
    let div = document.querySelectorAll('#holder div')[i]
    div.innerHTML = `<h3>${Object.keys(races)[i]}</h3>`
    div.classList.add('card')
    div.appendChild(createEl('p'))
    getXEl('p',i).innerHTML = races[Object.keys(races)[i]].desc
    div.addEventListener('click', select)
  }
}

function displayX(choiceArray, key){
  document.getElementById('holder').innerHTML = ''
  let counter = choiceArray[0]
  let choiceList = Object.keys(choiceArray[1])
  let userList = races[userProgress[0]][key]
  for(let i = 0; i < userList.length; i++){
    //in the user's race, loop through the keyword, e.g. languages, etc.
    /*remove list  */
    if(choiceList.includes(userList[i])){
      choiceList.splice(choiceList.indexOf(userList[i]), 1)
    }
  }

  choiceList.forEach(
    (choice, i) =>{
      buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
      let div = document.querySelectorAll('#holder div')[i]
      div.innerHTML = `<h3>${choice}</h3>`
      div.classList.add('card')
      div.appendChild(createEl('p'))
      getXEl('p',i).innerHTML = races[userProgress[0]].choices[key][1][choice]
      div.addEventListener('click', select)
    }
  )
  
}
//+++++++++++++++++++The below code will trigger after 1 selection, need to make sure it's rleated to the number of choices given
//^^^^^^to solve above, possibly user .bind()

function select(){
  let counterObj = {counter: 1}
  if(!counterObj.counterCompare){counterObj.counterCompare = 0}
  
  if(this.hasAttribute('selected')){
    this.removeAttribute('selected')
    //style to look unselected
    this.style.transform = 'scale(1)'
    //remove from userProgress
    userProgress.splice(userProgress.indexOf(this.firstElementChild.innerHTML))
    counterObj.counterCompare -= 1
  }
  else{
    //style to look "selected"
    counterObj.counterCompare += 1
    this.style.transform = 'scale(.9)'
    this.setAttribute( 'selected', 'selected')
    userProgress.push(this.firstElementChild.innerHTML)
    if(counterObj.counterCompare === counterObj.counter){document.getElementById('nextButton').addEventListener('click', createDNDCharacter)}
  }
}

}//End of wrapper
wrapper()



























  /*
//=====================================================================================

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

function populateX(user, xObj){
  let xArray = Object.keys(xObj)
  for(let i = 0; i < xArray.length; i++){
    buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
    let div = document.querySelectorAll('#holder div')[i]
    div.innerHTML = `<h3>${xArray[i]}</h3>`
    div.classList.add('card')
    div.appendChild(createEl('p'))
    getXEl('p', i).innerHTML = xObj[xArray[i]].desc    
  }
}

function select(selectedElement, obj, addDataFn){
  let preSelection = selectedElement.firstElementChild.innerHTML
  let selection = obj[preSelection]
  addDataFn(user, selection)
  selectedElement.classList.add('selected')
  document.querySelector('input[type="button"]').addEventListener('click', 
    function(){clearAndPopulateRaceChoices('race', races[user.race])})
}

//set up initial validation, if user click next w/ no race chosen, alert

function clearAndPopulate(topic, obj){    
  if(!user[topic] || user[topic] === {} || user[topic] === []){
    buildDom(getFirstEl, '#holder', createEl, 'b', appendEl)
    document.querySelector('b').innerHTML = `Whoa there, select a ${topic} before moving on`
    return false
  }

  else{
    document.getElementById('holder').innerHTML = ''
    if(obj.choices){
        let choiceList = Object.keys(obj.choices)
        for(let i = 0; i < choiceList.length; i++){
            let choiceType = choiceList[i]
            let counter = obj.choices[choiceType][0]
            document.getElementById('holder').innerHTML += `<h3>As a ${user.race}, you can choose ${counter} from these ${choiceType}:</h3>`
            let choiceOptionArray = Object.keys(obj.choices[choiceType][1])
            for(let i = 0; i < choiceOptionArray.length; i++){
                buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)
                let div = document.querySelectorAll('#holder div')[i]
                div.classList.add('card')
                div.innerHTML = `<h3>${choiceOptionArray[i]}</h3>`
                div.appendChild(createEl('p'))
                document.querySelectorAll('p')[i].innerHTML = obj.choices[choiceType[1]]
                console.log(obj.choices[choiceType[1].Elvish])
            }
            break
        }
    }
    if(!obj.choices){
        //********************************************************************Return class function!!!!!!!!!!!!!!!!!!!1
    }
  }
}

let clearAndPopulateRaceChoices = function(){
    return clearAndPopulate('race', races[user.race])
}




//===============================================
//                Step 1
//===============================================

//displays different race choices and descriptions
(function (){
    for(let i = 0; i < Object.keys(races).length; i++){

        buildDom(getFirstEl, '#holder', createEl, 'div', appendEl)

        let div = document.querySelectorAll('#holder div')[i]

        div.innerHTML = `<h3>${races[Object.keys(races)[i]].raceType}</h3>`

        div.classList.add('card')

        div.appendChild(createEl('p'))

        getXEl('p',i).innerHTML = races[Object.keys(races)[i]].desc

        div.addEventListener('click', 
        function(){
            select(div, races, addRacialData)
        })
    }

    buildDom(getFirstEl, '#holder', createEl, 'input', appendEl)
    document.querySelector('input').value = 'next'
    document.querySelector('input').type = 'button' 
    document.querySelector('input').classList.add('choices')
    
    document.querySelector('input[type="button"').addEventListener('click', 
        function(){
            clearAndPopulate('race', function(){buildDom(getFirstEl, '#holder', createEl, 'b', appendEl)
            document.querySelector('b').innerHTML = `Whoa there, select a ${topic} before moving on`})})
    })();
//^^^ establishes initial set up ^^^^

//===============================================
//                Step 2
//===============================================
 */