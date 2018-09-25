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