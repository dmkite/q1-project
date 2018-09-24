let user = {
    race: '',
    dndClass: {},
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
    profs: [],
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
  
  const dwarf = {
      type:'Dwarf',
      names: [['Adrik', 'Kildrak', 'Vondal'],['Amber', 'Vistra', 'Mardred']],
      stats: {
          CON: 2},
      speed: 25,
      subrace:undefined,
      profs:['battleaxe','handaxe', 'throwing hammer', 'warhammer', ["smith's tools", "brewer's supplies", "mason's tools"]],
      equipment: [],
      features: ['Darkvision'],
      languages: ['Common', 'Dwarvish']
  }
  
  const hillDwarf = {
      subType: 'Hill Dwarf',
      stats:{
          WIS: 1},
      HP:1
  }
  
  const mtnDwarf = {
      subType:'Mountain Dwarf',
      stats:{
          STR: 2
      },
      profs: ['light armor', 'medium armor']
  }


const elf = {
    type: 'Elf',
    dndClass: {},
    name: [['Adran', 'Heian', 'Thamior'],['Adrie', 'Lia', 'Nailo']],
    speed: 30,
    alignment: [],
    stats:{
      STR: 0,
      DEX: 2,
      CON: 0,
      INT: 0,
      WIS: 0,
      CHA: 0},
    savingThrows:[],
    skills: [],
    profs: [],
    features: ['Darkvision:60ft', 'Advg on saving throws from being charmed', "Magic, can't induce sleep"],
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
    languages: ['Common', 'Elvish']
  }

const highElf = {
    subType: 'High Elf',
    stats: {
        INT: 1},
    profs: ['longsword', 'shortsword', 'longbow', 'shortbow'],
    spells: ['+1 cantrip'],
    langauge:['+1 language']
}

const woodElf = {
    subType: 'Wood Elf',
    stats: {
        WIS: 1},
    profs: ['longsword', 'shortsword', 'longbow', 'shortbow'],
    speed: 35,
    features: ['can attempt to hide even when lightly obscured by foliage, rain, snow, mist, or other natural phenomena']
}

const darkElf = {
    subType: 'Dark Elf',
    stats:{
    CHA: 1},
    features: ['Darkvision:120ft', 'Disadvantage on attacks in direct sunlight'],
    spells: ['Dancing Lights']
    profs: ['rapiers','shortswords', 'hand crossbows']
}

const halfling = {
    type: 'Halfling',
    dndClass: {},
    name: [['Alton', 'Milo', 'Wellby'],['Andry', 'Lidda', 'Verna']],
    speed: 25,
    alignment: [],
    stats:{
      STR: 0,
      DEX: 2,
      CON: 0,
      INT: 0,
      WIS: 0,
      CHA: 0},
    savingThrows:[],
    skills: [],
    profs: [],
    features: ['Can reroll if roll a 1', 'Advantage on saving throws against being frightened', 'Can move through creature larger than your size'],
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
    languages: ['Common', 'Halfling']
} 

const lightfootHalfling = {
    subType: 'Lightfoot Halfling'
}

