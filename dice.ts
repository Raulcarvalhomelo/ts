
//  Type alias
type Dices= 4|6|8|9|10|12|20|24|30|34|48|50|60|100|120

function diceSide(a:Dices):number{
  return Math.floor(Math.random()*a)+1
  
}

console.log(diceSide(6))
console.log(diceSide(24))
console.log(diceSide(120))

console.log('')

// com enum

enum Dices1{ 
  fourside=4,
  sixside=6,
  eigthside=8,
  nineside=9,
  tenside=10,
  twelveside=12,
  twentyside=20
}
function diceSide1(a:number):number{
return Math.floor(Math.random()*a)+1

}
console.log(diceSide1(Dices1.sixside))
console.log(diceSide1(Dices1.nineside))
console.log(diceSide1(Dices1.twentyside))