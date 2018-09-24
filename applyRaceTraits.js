function applyRaceData(user, races, subrace){
    let {type: race, stats, speed, profs, equipment, features, languages} = races
  
    if(subrace){
      race = subrace.subType
      races.subrace = subrace
    }
  
    
    user.race += race
    user.speed += speed
    user.profs.push(profs) 
    user.equipment.push(equipment)
    user.features.push(features)
  
    addRacialStats(user,races)
    
    if(subrace){
      addSubraceStats(user, subrace)
    }
  
    return user
  
  }
  
  function addRacialStats(user, races){
    for (let stat in races.stats){
      user.stats[stat] += races.stats[stat]
    }
  }
  
  function addSubraceStats(user, subrace){
    for(let attribute in subrace){
  
      switch(attribute){
        case 'subType':
          break
        case 'stats':
          for(let stat in subrace[attribute]){
            console.log(stat)
            user.stats[stat] += subrace.stats[stat]
            console.log(user.stats)
          }
          break
    
        case 'speed':
          user.speed = subrace.speed
          break
        case 'prof':
          user.prof.push(subrace.prof)
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
          console.log(`You didn't account for ${attribute}`)
      }
    }
    return user
  }
  
  
  
  // addSubraceStats(user, hillDwarf)
  
//   applyRaceData(user, dwarf, hillDwarf)