function rollAD_(num){
  return Math.floor(Math.random() * num) + 1
}

let rollAD_20 = rollAD_(20)
// console.log(rollAD_20)

function multiRoll(dieFn, sides, times){
  let result = []
  for (let i = 1; i <= times; i++){
    let rollAD_X = rollAD_(sides)
    result.push(rollAD_X)
  }
  return result
}

function baseStat(){
  let rawStat = multiRoll(rollAD_,6, 4)

  rawStat.sort((a,b) => {
    if(a > b){return 1}
    if(a === b){return 0}
    if(a < b){return -1}
  })
  rawStat.shift()

  return rawStat.reduce( (sum, stat) => {
    return sum + stat
  }, 0)

}

function getBaseStats(baseStat, num){
  let stats = [];
  for(let i = 1; i <= num; i++){
    stats.push(baseStat())
  }
  return stats
}

getBaseStats(baseStat, 6)

