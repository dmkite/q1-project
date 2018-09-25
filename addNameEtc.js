document.querySelector('#idealsForm').addEventListener('submit', addIdeals)
document.querySelector('#traitsForm').addEventListener('submit', addTraits)
document.querySelector('#bondsForm').addEventListener('submit', addBonds)
document.querySelector('#flawsForm').addEventListener('submit', addFlaws)
document.querySelector('#name').addEventListener('submit', addName)

function addIdeals(){
  user.ideals = document.getElementById('ideals').value
  return user
}

function addIdeals(){
  user.name = document.getElementById('name').value
  return user
}

function addTraits(){
  user.traits = document.getElementById('traits').value
  return user
}

function addBonds(){
  user.bonds = document.getElementById('bonds').value
  return user
}

function addFlaws(){
  user.flaws = document.getElementById('flaws').value
  return user
}