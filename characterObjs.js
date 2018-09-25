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
    subrace: undefined,
    stats:{
      DEX: 2},
    savingThrows:[],
    skills: [],
    profs: [],
    features: ['Darkvision:60ft', 'Advg on saving throws from being charmed', "Magic, can't induce sleep"],
    HP: 0,
    spells:[],
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
    spells: ['Dancing Lights'],
    profs: ['rapiers','shortswords', 'hand crossbows']
}

const halfling = {
    type: 'Halfling',
    dndClass: {},
    name: [['Alton', 'Milo', 'Wellby'],['Andry', 'Lidda', 'Verna']],
    speed: 25,
    subrace: undefined,
    stats:{
      DEX: 2},
    savingThrows:[],
    skills: [],
    profs: [],
    features: ['Can reroll if roll a 1', 'Advantage on saving throws against being frightened', 'Can move through creature larger than your size'],
    HP: 0,
    spells:[],
    languages: ['Common', 'Halfling']
} 

const lightfootHalfling = {
    subType: 'Lightfoot Halfling',
    stats:{
        CHA:1},
    features:['Can attempt to hide behind a creature at least one size larger than you']
}

const stoutHalfling = {
    subType: 'Stout Halfling',
    stats:{
        CON:1},
    features:['Advantage on saving throws against poison, resistance against poison damage']
}

const human = {
        type: 'Human',
        dndClass: {},
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
        profs: [],
        features: [],
        HP: 0,
        spells:[],
        languages: ['Common', '+1 Language']

        /*=====trigger language====*/
}   

const dragonborn = {
    type: 'Dragon Born',
    dndClass: {},
    name: [['Arjhan', 'Balsar', 'Torinn'],['Akra', 'Kava', 'Uadjit']],
    speed: 30,
    stats:{
      STR: 2,
      CHA: 1},
    savingThrows:[],
    skills: [],
    profs: [],
    features: [],
    HP: 0,
    weapons:['Dragon Breath'],
    spells:[],
    languages: ['Common', 'Draconic']
    /*=====Add something to specify dragon breath===== */
}

const gnome = {
    type: 'Gnome',
    dndClass: {},
    name: [['Alston', 'Fonkin', 'Wrenn'],['Ella', 'Shamil', 'Orla']],
    speed: 25,
    subrace: undefined,
    stats:{
      INT: 2},
    savingThrows:[],
    skills: [],
    profs: [],
    features: ['Darkvision:60ft'],
    HP: 0,
    spells:[],
    languages: ['Common', 'Gnomish']
}

const forestGnome = {
    subType:'Forest Gnome',
    stats:{
        DEX: 1},
    features: ['You can communicate simple ideas with small beasts'],
    spells: ['Minor Illusion']
}

const rockGnome = {
    subType: 'Rock Gnome',
    stats:{
        CON: 1},
    features:['When making a history cehck related to technology, magic, or alchemy, add twice your proficiency bonus'],
    profs: ["artisan's tools"]
}

const halfElf = {
    type: 'Half Elf',
    dndClass: {},
    name: [['Bardeid', 'Randal', 'Chen'],['Adrie', 'Lia', 'Nailo']],
    speed: 30,
    stats:{
      CHA: 2},
    savingThrows:[],
    skills: [],
    profs: [],
    features: ['Darkvision:60ft'],
    HP: 0,
    spells:[],
    languages: ['Common', 'Gnomish']
    /*=====add feature for choosing two ability scores to increase by 1 */
    /*====== ditto for +1 language and _2 skill proficiencies=====*/
}

const halfOrc = {
    type: 'Half Orc',
    dndClass: {},
    name: [['Dench', 'Holg', 'Thokk'],['Baggi', 'Ovak', 'Yevelda']],
    speed: 30,
    stats:{
      STR: 2,
      CON: 1},
    savingThrows:[],
    skills: [],
    profs: [],
    features: ['Darkvision:60ft', 'When reduced to 0HP, but not killed, you candrop to 1HP', 'When you get a cricial hit w/ a melee weapon, you can roll one damage dice again'],
    HP: 0,
    spells:[],
    languages: ['Common', 'Orc']
}

const tiefling = {
    type: 'Tiefling',
    dndClass: {},
    name: [['Akmenos', 'Ekemon', 'Skamos'],['Akta', 'Kallista', 'Rieta']],
    speed: 30,
    stats:{
      INT: 1,
      CHA: 2},
    savingThrows:[],
    skills: [],
    profs: [],
    features: ['Darkvision:60ft', 'Resistant to fire damage'],
    HP: 0,
    spells:['Thaumaturgy'],
    languages: ['Common', 'Infernal']
}




