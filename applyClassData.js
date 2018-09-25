
function applyClassData(user, className){
  let {classType, hitDie, savingThrows, proficiencies: {armor, weapons, other}, skillChoices, equipmentChoices, features} = className

  user.classType = classType
  user.savingThrows = savingThrows
  user.profs.armor = armor
  user.profs.weapons = weapons
  user.profs.other = other
  user.hitDie = hitDie
  user.features.push(features)

}
