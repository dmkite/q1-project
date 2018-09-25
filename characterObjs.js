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
    dwarf:{
        hillDwarf : {
            subType: 'Hill Dwarf',
            stats:{
                WIS: 1},
            HP:1
        },
        
        mtnDwarf : {
            subType:'Mountain Dwarf',
            stats:{
                STR: 2
            },
            profs: {
            armor:['light armor', 'medium armor']
            }
        }
    },
    elf:{
        highElf : {
        subType: 'High Elf',
        stats: {
            INT: 1},
        profs: {
            weapons: ['longsword', 'shortsword', 'longbow', 'shortbow']},,
        choices: {languages: languagesObj,
                    spells: cantripObj,
                }
        },
        
        woodElf : {
            subType: 'Wood Elf',
            stats: {
                WIS: 1},
            profs: {
                weapons:['longsword', 'shortsword', 'longbow', 'shortbow']},
            speed: 35,
            features: ['can attempt to hide even when lightly obscured by foliage, rain, snow, mist, or other natural phenomena']
        },
        
        darkElf : {
            subType: 'Dark Elf',
            stats:{
            CHA: 1},
            features: ['Darkvision:120ft', 'Disadvantage on attacks in direct sunlight'],
            spells: ['Dancing Lights'],
            profs: {
                weapons:['rapiers','shortswords', 'hand crossbows']}
        }
    },
    halfling:{
        lightfootHalfling : {
            subType: 'Lightfoot Halfling',
            stats:{
                CHA:1},
            features:['Can attempt to hide behind a creature at least one size larger than you']
        },
        
        stoutHalfling : {
            subType: 'Stout Halfling',
            stats:{
                CON:1},
            features:['Advantage on saving throws against poison, resistance against poison damage']
        }
    },
    gnome: {
        forestGnome : {
            subType:'Forest Gnome',
            stats:{
                DEX: 1},
            features: ['You can communicate simple ideas with small beasts'],
            spells: ['Minor Illusion']
        },
        
        rockGnome : {
            subType: 'Rock Gnome',
            stats:{
                CON: 1},
            features:['When making a history cehck related to technology, magic, or alchemy, add twice your proficiency bonus'],
            profs: {
                other:["artisan's tools"]}
        }
    }
}  

const races = {
    const subraces = {
        dwarf:{
            hillDwarf : {
                subType: 'Hill Dwarf',
                stats:{
                    WIS: 1},
                HP:1
            },
            
            mtnDwarf : {
                subType:'Mountain Dwarf',
                stats:{
                    STR: 2
                },
                profs: {
                armor:['light armor', 'medium armor']
                }
            }
        },
        elf:{
            highElf : {
            subType: 'High Elf',
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
            
            woodElf : {
                subType: 'Wood Elf',
                stats: {
                    WIS: 1},
                profs: {
                    weapons:['longsword', 'shortsword', 'longbow', 'shortbow']},
                speed: 35,
                features: ['can attempt to hide even when lightly obscured by foliage, rain, snow, mist, or other natural phenomena']
            },
            
            darkElf : {
                subType: 'Dark Elf',
                stats:{
                CHA: 1},
                features: ['Darkvision:120ft', 'Disadvantage on attacks in direct sunlight'],
                spells: ['Dancing Lights'],
                profs: {
                    weapons:['rapiers','shortswords', 'hand crossbows']}
            }
        },
        halfling:{
            lightfootHalfling : {
                subType: 'Lightfoot Halfling',
                stats:{
                    CHA:1},
                features:['Can attempt to hide behind a creature at least one size larger than you']
            },
            
            stoutHalfling : {
                subType: 'Stout Halfling',
                stats:{
                    CON:1},
                features:['Advantage on saving throws against poison, resistance against poison damage']
            }
        },
        gnome: {
            forestGnome : {
                subType:'Forest Gnome',
                stats:{
                    DEX: 1},
                features: ['You can communicate simple ideas with small beasts'],
                spells: ['Minor Illusion']
            },
            
            rockGnome : {
                subType: 'Rock Gnome',
                stats:{
                    CON: 1},
                features:['When making a history cehck related to technology, magic, or alchemy, add twice your proficiency bonus'],
                profs: {
                    other:["artisan's tools"]}
            }
        }
    }  
    
    const races = {
     dwarf : {
          raceType:'Dwarf',
          desc:'description',
          names: [['Adrik', 'Kildrak', 'Vondal'],['Amber', 'Vistra', 'Mardred']],
          stats: {
              CON: 2},
          speed: 25,
          subrace: subraces.dwarf,
          profs:{
            weapons:['battleaxe','handaxe', 'throwing hammer', 'warhammer'],
            other: ["smith's tools", "brewer's supplies", "mason's tools"]},
          features: ['Darkvision'],
          languages: ['Common', 'Dwarvish'],
      },
    elf : {
        raceType: 'Elf',
        desc:'description',
        name: [['Adran', 'Heian', 'Thamior'],['Adrie', 'Lia', 'Nailo']],
        speed: 30,
        subrace: subraces.elf,
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
    halfling : {
        raceType: 'Halfling',
        desc:'description',
        name: [['Alton', 'Milo', 'Wellby'],['Andry', 'Lidda', 'Verna']],
        speed: 25,
        subrace: subraces.halfling,
        stats:{
          DEX: 2},
        savingThrows:[],
        skills: [],
        features: ['Can reroll if roll a 1', 'Advantage on saving throws against being frightened', 'Can move through creature larger than your size'],
        HP: 0,
        spells:[],
        languages: ['Common', 'Halfling'],
    } ,
    human : {
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
    dragonborn : {
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
     gnome : {
        raceType: 'Gnome',
        desc:'description',
        name: [['Alston', 'Fonkin', 'Wrenn'],['Ella', 'Shamil', 'Orla']],
        speed: 25,
        subrace: subraces.gnome,
        stats:{
          INT: 2},
        savingThrows:[],
        skills: [],
        features: ['Darkvision:60ft'],
        HP: 0,
        spells:[],
        languages: ['Common', 'Gnomish'],
    },
    halfElf : {
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
    halfOrc : {
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
     tiefling : {
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
    
//===============================================
//                   Classes
//===============================================



const barbarian = {
    classType: 'Barbarian',
    desc: '',
    hitDie: 12,
    savingThrows: ['STR', 'CON'],
    proficiencies:{
        armor:['light armor','medium armor','shields'],
        weapons:['simple weapons', 'martial weapons']
    },
    armorType:[],
    skillChoices:['animalHandling', 'athletics', 'intimidation', 'nature', 'perception','survival'],
    equipmentChoices:[['Great Axe', 'otherMartialWeapon'], ['2 Hand Axes', 'otherSimpleWeapon'], "explorer's pack", '4 Javelins'],
    features:['Unarmored Defense']
}


//===============================================
//               Background & Skills
//===============================================

